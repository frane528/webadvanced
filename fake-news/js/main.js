$(document).ready(function(){
    
	console.log("RSS - Responsive");

    var onionFeed = [],
        timesFeed = [],
        breitbartFeed = [];

    var statement = "select * from feed where url='http://www.theonion.com/rss'"; // here you link the url you need
    $.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

        for (var i = 0; i < 1; i++) { // for each result:

        console.log(data.query.results.item[i]) // console log the result's object
        
         $("#onion").append( "<h3>" + data.query.results.item[i].title + "</h3><p>" + data.query.results.item[i].description + "</p>")

        var articleInfo = data.query.results.item[i];

        onionFeed.push(articleInfo)
        
        }
    })
    
    
    //breitbart query
     var breitbartUrl = 'https://newsapi.org/v2/top-headlines?sources=breitbart-news&apiKey=6c2b8f7b3357496ab6710a4dd88a77ce';
     
     $.getJSON( breitbartUrl, function(json){
         
        console.log("breitbart", json.articles)
        
        //push breitbart articles to breitbartFeed array
        
        breitbartFeed.push(json.articles)
         
     })
     
     
     //Times 
    
    //var timesUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json&apiKey=aaa01caec4f34077939eb30a2af49d87';
     
     var timesUrl = "https://api.nytimes.com/svc/news/v3/content/all/all.json";
        timesUrl += '?' + $.param({
          'api-key': "aaa01caec4f34077939eb30a2af49d87"
        });
        $.ajax({
          url: timesUrl,
          method: 'GET',
        }).done(function(result) {
          
          
          console.log(result);
          
          //push article info to timesFeed array
          
          timesFeed.push(result)
          
          
        }).fail(function(err) {
          
          throw err;
        
            
        });
        
        
        var contentCounter = 0;
        
        var loadedContent = function(){
            
            
            if (onionFeed.length > 0 && timesFeed.length > 0 && breitbartFeed.length > 0 ){
                
                console.log("all three are loaded!")
                
                // have your logic that gets random content from each and appends it into the questionaire
                
                //get random source (i.e. one of the feeds)
                
                // define variable with name of source
                    // var trueButton = 'randomSourceName'
                
                // from random source, get random article
                
                // 
                
                
                // click function assigned to the buttons
                
                // inside click function, have an if statement that says 
                // if .btn's id is equal to trueButton, then success!
                
                /*$(".btn").click(function(){
                    
                    if(){ // if button is true
                        
                            
                            // get star, give it a green class
                            
                        
                    }else{
                        
                        // get star, give it a red class
                        
                    }
                    // counter to count which star 
                    
                })
                
                */
                
                
                
                
            }else{
                
                
                setTimeout(function(){ 
                    
                    if(contentCounter < 200){
                        
                        console.log("it is gonna run again")
                        loadedContent()
                        
                    }
             
                    contentCounter++;
                    
                }, 10)
                  
             
             
                
            }
        }
        
        
        loadedContent()
    
    
    
});