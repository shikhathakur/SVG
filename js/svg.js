function fnMyFunction() {
   var sxAxis= document.getElementById("xAxis").value;
   var syAxis=document.getElementById("yAxis").value;
   var sCircle=document.getElementsByTagName("circle");
   var xAxisLine=sCircle[0].setAttribute('cx',sxAxis);
   var yAxisLine=sCircle[0].setAttribute('cy',syAxis);
}