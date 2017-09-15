function shapes(){
      var redSquare = document.getElementById("redSquare");
      var yellowCircle = document.getElementById("yellowCircle");
      var blueSquare = document.getElementById("blueSquare");
      var newLine = '\n';
      
      var result = '';
      
      var width = document.getElementById('rowNumber').value;
      var height = document.getElementById('colNumber').value;
      
      for(var j=0;j<height;j++){
        for(var i=0;i<width;i++){
          result += redSquare;
        }; result += newLine;
        for(var i=0;i<width;i++){
          result += yellowCircle;
        }; result += newLine;
        for(var i=0;i<width;i++){
          result += blueSquare;
        }; result += newLine;
      };
      console.log(result);
    };