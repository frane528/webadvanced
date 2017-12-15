$(document).ready(function(){

	console.log("RSS - Responsive");

	var statement = "select * from feed where url='http://www.theonion.com/rss'";
	$.queryYQL(statement, "json", undefined, function (data) {
	  
	    for (var i = 0; i < 10; i++) { // for each result:

        console.log(data.query.results.item[i]) // console log the result's object
        
         $("#onion").append( "<h3>" + data.query.results.item[i].title + "</h3><p>" + data.query.results.item[i].description + "</p>")

        var articleInfo = data.query.results.item[i];

        onionFeed.push(articleInfo)
        
        }
    })

	});

