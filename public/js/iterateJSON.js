let files;
let count = 0;
let url = window.location.href;
let article = 1;
console.log(url);

fetch('../json/articles.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    logData(files);
    initialLoad();
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });



  function logData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(files.article[a].ID);
      console.log(files.article[a].header);
      console.log(files.article[a].link);
    }
  }

  function initialLoad(){
    document.getElementById("header").innerText = files.article[0].header;
    document.getElementById("page").innerText = files.article[article].pages[0].ID;
    document.getElementById("text").innerText = files.article[article].pages[0].content;
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

  function getPagesCount(){return files.article[0].pages.length;}

