fetch('../json/articles.json')
  .then(response => response.json())
  .then(data => {
    for (let a = 0; a < data.article.length; a++) {
      console.log(data.article[a].ID);
      console.log(data.article[a].header);
      console.log(data.article[a].link);

      for (let p = 0; p < data.article.length; p++) {
        const element = data.article[p];
        
      }

    }
  })





















/* var json = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "../json/articles.json",
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  });
  return json;
})();
// console.log(json.article[0].ID);

for(var art = 0; art < json.article.length; art++){
    var article = json.article[art];
    console.log(article);

    for (let element in article) {
      if (element != 'pages') {
        console.log(element);
      }
      else{
        let pages = element;

        for (const page in pages) {
          console.log(page);
        }
      }
    }
    
} */

