let files;
let count = 0;
let url = location.href;
let filename = url.substring(url.lastIndexOf('/')+1);
console.log(filename);

fetch('../json/files.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    //logData(files);
    getFileForCurrentPage();
    initialLoad();
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });

  function initialLoad(){
    //document.getElementById("header").innerText = files.article[0].header;
    //document.getElementById("page").innerText = files.article[article].pages[0].ID;
    document.getElementById("text").innerText = files.article[0].pages[0].content;
  }

  function nextArticle(){
    var pages = getPagesCount();
    console.log(pages);
    if (count < pages){
      count++;
    }
    document.getElementById("page").innerText = files.article[article].pages[count].ID;
    document.getElementById("text").innerText = files.article[article].pages[count].content;
  }
  function prevArticle(){

    if (count > 0) {
      count--;
      document.getElementById("page").innerText = files.article[article].pages[count].ID;
      document.getElementById("text").innerText = files.article[article].pages[count].content;
    }
  }

  function getFileForCurrentPage(){
    
  }

  function getPagesCount(){return files.article[0].pages.length;}




  function logData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(files.article[a].ID);
      console.log(files.article[a].header);
      console.log(files.article[a].link);
    }
  }

