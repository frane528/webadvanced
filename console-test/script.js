function shapes(){
      var redSquare = document.getElementById("redSquare");
      var yellowCircle = document.getElementById("yellowCircle");
      var blueSquare = document.getElementById("blueSquare");
      var breakLine = '\n';
      
      var result = '';
      
      var width = document.getElementById('rowNumber').value;
      var height = document.getElementById('colNumber').value;
      
      for(var j=0;j<height;j++){
        for(var i=0;i<width;i++){
          result += redSquare;
        }; result += breakLine;
        for(var i=0;i<width;i++){
          result += yellowCircle;
        }; result += breakLine;
        for(var i=0;i<width;i++){
          result += blueSquare;
        }; result += breakLine;
      };
      console.log(result);
    };