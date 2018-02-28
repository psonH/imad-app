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
     request.open('GET', 'http://priyankhajela.imad.hasura-app.io/',true);
     request.send(null);
};