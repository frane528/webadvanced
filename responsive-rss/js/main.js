$(document).ready(function(){
  
  /*
	console.log("RSS - Responsive");

    var statement = "select * from feed where url='http://www.theonion.com/rss'"; // here you link the url you need
    $.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

      $("#onion").append("<h3>The Onion RSS Feed</h3>") //append title of rss feed

        for (var i = 0; i < data.query.results.item.length; i) { // for each result:

        console.log(data.query.results.item[i]) // console log the result's object

        $("#onion").append( "<h3>" + data.query.results.item[i].title + "</h3><p>" + data.query.results.item[i].description + "</p>")

        }

    });
    */
    
    //NYT
    var url = "https://api.nytimes.com/svc/news/v3/content/content.json";
    url += '?' + $.param({
      'api-key': "aaa01caec4f34077939eb30a2af49d87",
      'url': "https://frane528.github.io/webadvanced/fake-news/index.html"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
    
    //breitbart
    
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=6c2b8f7b3357496ab6710a4dd88a77ce';

    var req = new Request(url);
    
    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })
})


