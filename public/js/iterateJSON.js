let files;
let count = 0;
let url = window.location.href;
console.log(url);

fetch('../json/articles.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    outputData(files);

    document.getElementById("header").innerText = data.article[0].header;
  })
  .catch(function (err){
    alert("JSON ERROR: " + err);
  });



  function outputData(data){
    for (let a = 0; a < data.article.length; a++) {
      console.log(data.article[a].ID);
      console.log(data.article[a].header);
      console.log(data.article[a].link);
    }
  }

  function nextArticle(){
    if (count < files.article[0].pages.length) {
      count++;
    }else alert("No more pages to display!");
    document.getElementById("page").innerText = files.article[0].pages[count].ID;
    document.getElementById("text").innerText = files.article[0].pages[count].content;

  }
  function prevArticle(){
    console.log(count);
    if (count < 1) {
      count--;
    }else alert("No more pages to display!");
    document.getElementById("page").innerText = files.article[0].pages[count].ID;
    document.getElementById("text").innerText = files.article[0].pages[count].content;
  }

