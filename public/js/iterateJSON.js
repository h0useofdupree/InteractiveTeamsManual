let files;
let count = 0;
let url = location.href;
let currentPage = url.substring(url.lastIndexOf('/')+1);
let currentPageID = 0;


fetch('../json/files.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    getFileForCurrentPage();
    //logData(files);
    
    initialLoad(currentPageID);
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });

  function initialLoad(index){
    document.getElementById("header").innerText = files.article[index].header;
    document.getElementById("page").innerText = files.article[index].pages[0].ID;
    document.getElementById("text").innerText = files.article[index].pages[0].content;
  }

  function nextArticle(){
    var pages = getPagesCount();
    if (count < pages){
      count++;
      document.getElementById("page").innerText = files.article[currentPageID].pages[count].ID;
    document.getElementById("text").innerText = files.article[currentPageID].pages[count].content;
    }
    
  }
  function prevArticle(){

    if (count > 0) {
      count--;
      console.log("Count " + count);
      document.getElementById("page").innerText = files.article[currentPageID].pages[count].ID;
      document.getElementById("text").innerText = files.article[currentPageID].pages[count].content;
    }
  }

  function getFileForCurrentPage(){
    for (let index = 0; index < files.article.length; index++) {
      if (files.article[index].ID == currentPage) {
        currentPageID = index;
      }//else console.log("not found");
    }
  }

  function getPagesCount(){return files.article[currentPageID].pages.length - 1;}




  function logData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(files.article[a].ID);
      console.log(files.article[a].header);
      console.log(files.article[a].link);
    }
  }

