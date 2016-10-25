/*console.log('Loaded!');
var img= document.getElementById('image');
img.onclick=function()
{
  img.style.marginLeft='100px';  
};*/

var button=document.getElementById('counter');
var counter=0;

Button.onclick=function(){
    counter++;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}