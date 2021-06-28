let files;
let count = 0;
let url = window.location.href;
console.log(url);

fetch('../json/articles.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    logData(files);

    document.getElementById("header").innerText = data.article[0].header;
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });



  function logData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(data.article[a].ID);
      console.log(data.article[a].header);
      console.log(data.article[a].link);
    }
  }

  function nextArticle(){
    if (true){
      count++;
      document.getElementById("page").innerText = files.article[0].pages[count].ID;
      document.getElementById("text").innerText = files.article[0].pages[count].content;
    }
  }
  function prevArticle(){

    if (count > 0) {
      count--;
      document.getElementById("page").innerText = files.article[0].pages[count].ID;
      document.getElementById("text").innerText = files.article[0].pages[count].content;
    }
  }

  function getPagesCount(){return files.article[0].pages.length - 1;}

