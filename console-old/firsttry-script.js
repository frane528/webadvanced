var shapeTimer = 0;
let shapeArray = ['        🔵', '        🔶', '      🔶🔺🔵🔶','   🔵🔶🔺🔵🔶🔺🔵',' 🔺🔵🔶🔺🔵🔶🔺🔵🔶🔺','🔶🔺🔵🔶🔺🔵🔶🔺🔵🔶🔺🔵🔶', ' 🔺🔵🔶🔺🔵🔶🔺🔵🔶🔺', '   🔵🔶🔺🔵🔶🔺🔵','      🔶🔺🔵🔶','        🔺'];

  for (i = 0; i <50; i++) {
    setTimeout(function() {
    for (let j = 0; j < shapeArray.length; j++) {
      console.log(shapeArray[j]);
    }
    }, shapeTimer); 
    shapeTimer += 300;
};
