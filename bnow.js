//Total Amount Calculation
var qty1 = document.getElementById("qty[1]");
var qty2 = document.getElementById("qty[2]");
var qty3 = document.getElementById("qty[3]");
var total_qty = document.getElementById("total_qty");
qty1.onchange = function(){
var total = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value);
  total_qty.value = total;
}
qty2.onchange = function() {
  var total = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value);
  total_qty.value = total;
}
qty3.onchange = function() {
    var total = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value);
    total_qty.value = total;
}
//Validation and Pop Up
function notEmpty()
{
var a = document.getElementById('name');
var b = document.getElementById('contactno');
var c = document.getElementById('pickup');
var d = document.getElementById('date');
if(a.value != "" && b.value != "" && c.value != "" && d.value != ""  )
    alert("Your Order of amount ₹"+total_qty.value+" has been placed"  )
else
alert("Please Enter the details")	
}
