let files;
let count = 0;

fetch('../json/articles.json')
  .then(response => response.json())
  .then(data => {
    files = data;
    outputData(files);
    function nextArticle(){
      count++;
      document.getElementById("header").innerText = data.article[count].header;
  
    }
    function prevArticle(){
      count--;
      document.getElementById("header").innerText = data.article[count].header;
    }
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

