//creates array 
var tasks = [];

// sets priority 
var priority = document.getElementById("priority");

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }

  //form add event
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#form').onsubmit= function(){
      let msg =  document.querySelector('#message').value;
      alert(msg);
    }
    
     document.querySelector('#abutton').onclick = function(){
      let msg =  document.querySelector('#message').value;
      alert(msg);
     }
  })
 
  //
                                                     
                            
                     
    
    
