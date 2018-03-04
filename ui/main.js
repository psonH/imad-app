var button=document.getElementById('counter');


button.onclick=function(){
    //Create a request object//
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE)
       {
          if(request.status === 200)
          {
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
       }
       //Not DONE yet
     };
     //Make request
     request.open('GET','http://priyankhajela.imad.hasura-app.io/counter',true);
     request.send(null);
};


//Submit name

 var submit=document.getElementById('submit_btn');
 submit.onclick=function(){
    
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE)
       {
          if(request.status === 200)
          {
             var names=request.responseText;
             names=JSON.parse(names);
             var list='';
             for(var i=0;i<names.length;i++)
             {
                 list +='<li>'+names[i]+'</li>';
             }
             var ul=document.getElementById('namelist');
             ul.innerHTML=list;
          }
       }
       //Not DONE yet
     };
     //Make request
     var nameInput=document.getElementById('name');
     var naam=nameInput.value; 
     request.open('GET','http://priyankhajela.imad.hasura-app.io/submit-name?name='+naam,true);
     request.send(null);
 };
 
 