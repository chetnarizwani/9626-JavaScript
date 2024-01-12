
function calculate() 

 {
  var AngleFactor = Math.tan(angle.value * Math.PI / 180);
  // Complete the calculation.
  //Height of tree = (AngleFactor*Distance from tree)+Eye height of the viewer
  var DistanceFromTree = distance.value*1;
  var EyeHeight = viewheight.value*1;
  var TreeHeight = (AngleFactor * DistanceFromTree) + EyeHeight;
  
  document.getElementById("Treeheight Result").innerHTML = "The height of the tree is " + Math.round(TreeHeight*10)/10 + " metres";
 }
  