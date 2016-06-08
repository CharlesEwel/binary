$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();
    var binarynumber = $("input#number").val();
    var decimaloutput = binarytodecimal(binarynumber);
    $("#result").text(decimaloutput);
  });
});

var binarytodecimal = function(binarynumber) {
  var decimalnumber=0;
  var binaryarray=binarynumber.split("");
  console.log(binaryarray)
  for(var index=binaryarray.length-1; index>=0; index--){
    decimalnumber+=binaryarray[index]*Math.pow(2,binaryarray.length-1-index);
    console.log(decimalnumber)
  }
  return decimalnumber
}
