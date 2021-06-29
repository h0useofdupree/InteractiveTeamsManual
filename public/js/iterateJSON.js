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
    console.log(currentPage + " " + currentPageID);
    //logData(files);
    
    initialLoad(currentPageID);
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });

  function initialLoad(index){
    document.getElementById("header").innerHTML = files.article[index].header;
    document.getElementById("page").innerHTML = files.article[index].pages[0].ID;
    document.getElementById("text").innerHTML = files.article[index].pages[0].content;
  }

  function nextArticle(){
    var pages = getPagesCount();
    console.log(pages);
    if (count < pages){
      count++;
    }
    document.getElementById("page").innerText = files.article[currentPageID].pages[count].ID;
    document.getElementById("text").innerText = files.article[currentPageID].pages[count].content;
  }
  function prevArticle(){

    if (count > 0) {
      count--;
      document.getElementById("page").innerText = files.article[currentPageID].pages[count].ID;
      document.getElementById("text").innerText = files.article[currentPageID].pages[count].content;
    }
  }

  function getFileForCurrentPage(){
    for (let e = 0; e < files.article.length; e++) {
      if (files.article[e].ID == currentPage) {
        console.log(files.article[e].ID);
        currentPageID = e;
      }//else console.log("not found");
    }
  }

  function getPagesCount(){return files.article[currentPageID].pages.length;}




  function logData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(files.article[a].ID);
      console.log(files.article[a].header);
      console.log(files.article[a].link);
    }
  }

