$(document).ready(function() {
  $("#submit-binary").click(function(event) {
    event.preventDefault();
    var binarynumber = $("input#number-binary").val();
    var decimaloutput = binarytodecimal(binarynumber);
    $("#result").text(decimaloutput);

  });
  $("#submit-trinary").click(function(event){
    event.preventDefault();
    var binarynumber = $("input#number-binary").val();
    var decimaloutput2 = trinarytodecimal(binarynumber);
    $("#result").text(decimaloutput2);
  });
  $("#submit-hexadecimal").click(function(event){
    event.preventDefault();
    var binarynumber = $("input#number-binary").val();
    var decimaloutput2 = hextodecimal(binarynumber);
    $("#result").text(decimaloutput2);
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

var trinarytodecimal = function(binarynumber) {
  var decimalnumber=0;
  var binaryarray=binarynumber.split("");
  console.log(binaryarray)
  for(var index=binaryarray.length-1; index>=0; index--){
    decimalnumber+=binaryarray[index]*Math.pow(3,binaryarray.length-1-index);
    console.log(decimalnumber)
  }
  return decimalnumber
}

var hextodecimal = function(number) {
  var decimalnumber=0;
  var array=number.split("");
  var newarray=array.map(function(value){
    if(value==="a"){
      return 10;
    } else if(value==="b"){
      return 11;
    } else if(value==="c"){
      return 12;
    } else if(value==="d"){
      return 13;
    } else if(value==="e"){
      return 14;
    } else if(value==="f"){
      return 15;
    } else {
      return value;
    }
  });
  console.log(array)
  for(var index=newarray.length-1; index>=0; index--){
    decimalnumber+=newarray[index]*Math.pow(16,newarray.length-1-index);
    console.log(decimalnumber)
  }
  return decimalnumber
}
