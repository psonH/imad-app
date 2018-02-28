console.log('Loaded!');

//changes made to the main-text;

var element=document.getElementById('main-text');

element.innerHTML="New Value";

var img=document.getElementById('mardi');

img.onclick= function()
{
    img.style.marginLeft='100px';
};