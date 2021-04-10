array=[];

function submit()
{
    inputBox=[];
   for(var j=1;j<=4;j++){
    var paragraph=document.getElementById("para_input_box"+j).value;
    console.log(paragraph);
    array.push(paragraph);
   }
   console.log(array);
   var lengthofthearray=array.length;
   console.log(lengthofthearray);
  for(var k=0;k<lengthofthearray;k++){
      inputBox.push("<h4>para_input_box -"+array[k]+"</h4>");
      console.log(inputBox);
  }
  document.getElementById("display_name_with_commas").innerHTML=inputBox;
  var removecommas=inputBox.join(" ");
  console.log(removecommas);
  document.getElementById("display_name_without_commas").innerHTML=removecommas;
}