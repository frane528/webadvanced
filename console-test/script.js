var shapeTimer = 0;
let shapeArray = ['🔴🔵⚫️🔴🔵⚫️🔴🔵⚫️🔴🔵⚫️',' 🔵⚫️🔴🔵⚫️🔴🔵⚫️🔴🔵','   ⚫️🔴🔵⚫️🔴🔵⚫️','      🔴🔵⚫️','        🔵','        ⚫️','        🔴','      🔵⚫️🔴','   🔴🔵⚫️🔴🔵⚫️🔴'];

setTimeout(function() {
  for (i = 0; i <5; i++) {
    for (let j = 0; j < shapeArray.length; j++) {
      for (let j = 1; j < shapeArray.length; j++) {
      console.log(shapeArray[j]);
    }
  }
}
}, shapeTimer); 
    shapeTimer += 300; 
      