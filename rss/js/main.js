$(document).ready(function(){

	console.log("RSS - Responsive");

    var statement = "select * from feed where url='http://www.theonion.com/rss'"; // here you link the url you need
    $.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

      $("#onion").append("<h1>The Onion RSS Feed</h1>") //append title of rss feed

        for (var i = 0; i < data.query.results.item.length; i++) { // for each result:

        console.log(data.query.results.item[i]) // console log the result's object

        $("#onion").append( "<h2>" + data.query.results.item[i].title + "</h2><h3>" + data.query.results.item[i].pubDate + "</h3><p>" + data.query.results.item[i].description + "</p>")

        }

    });

})
