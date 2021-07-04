let files;

// Var for counting button clicks
// TODO: Replace this garbage Logic with VueJS or ReactJS
let count = 0;

// Get current Page Route
let url = location.href;
let currentPage = url.substring(url.lastIndexOf('/')+1);

// Default Page ID is 0
let currentPageID = 0;

// reads JSON file and runs intitial functions
fetch('../json/files.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    getFileForCurrentPage();
    initialLoad(currentPageID);
    //logData(files);
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });

// Displays Header, Pagecount, Text and Picture of first page in manual
  function initialLoad(currentPageID){
    var curPageNum = parseInt((files.article[currentPageID].pages[count].ID) + 1);
    document.getElementById("header").innerText = files.article[currentPageID].header;
    document.getElementById("page").innerText = curPageNum + "/" + getPagesCount();
    document.getElementById("text").innerText = files.article[currentPageID].pages[0].content;
    document.getElementById("pic").src = files.article[currentPageID].pages[0].pic;
  }

// Displays the next manual, if there is one
  function nextArticle(){
    var pages = getPagesCount() -1 ;
    if (count < pages){
      count++;
      var curPageNum = parseInt(files.article[currentPageID].pages[count].ID) + 1;
      document.getElementById("right").style.display = "flex";
      document.getElementById("page").innerText = curPageNum + "/" + getPagesCount();
      document.getElementById("text").innerText = files.article[currentPageID].pages[count].content;
      document.getElementById("pic").src = files.article[currentPageID].pages[count].pic;
    }    
  }

// Displays the previous manual, if there is one
  function prevArticle(){
    if (count > 0) {
      count--;
      var curPageNum = parseInt(files.article[currentPageID].pages[count].ID) + 1;
      document.getElementById("right").style.display = "flex";
      document.getElementById("page").innerText = curPageNum + "/" + getPagesCount();
      document.getElementById("text").innerText = files.article[currentPageID].pages[count].content;
      document.getElementById("pic").src = files.article[currentPageID].pages[count].pic;
    }
  }

// Picks the manuals from files.json according to current Route ( e.g. localhost:8000/manuals/install would grab the ID install)
  function getFileForCurrentPage(){
    for (let index = 0; index < files.article.length; index++) {
      if (files.article[index].ID == currentPage) { // If any file's ID in JSON equals the currentPage Name
        currentPageID = index;                      // the index of said file will be the index to display
      }
    }
  }

// Gets the amount of pages in the current manual
  function getPagesCount(){return files.article[currentPageID].pages.length;}

// Control Pages with Right and Left Arrow Key
  document.getElementById("key").onkeyup = function(e){
    if (e.keyCode == '39') {
      console.log("test");
      nextArticle();
    }else if(e.keyCode == '37') prevArticle();
  }

// Just for logging and debugging
  function logData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(files.article[a].ID);
      console.log(files.article[a].header);
      console.log(files.article[a].link);
    }
  }

