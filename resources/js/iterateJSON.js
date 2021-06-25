/* let articlesJSON;

fetch('../json/articles.json')
  .then(response => response.json())
  .then(data => {
    articlesJSON = data;
    outputData(articlesJSON);
    appendData(articlesJSON);
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

  function appendData(data){
    
  } */