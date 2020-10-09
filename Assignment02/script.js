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
 
  //adding and removing tasks to DOM
   document.addEventListener('DOMContentLoaded', function(){
     document.querySelector("#new-task").onsubmit = function(){
       
       const li = document.createElement('li');
       
       let task_text = document.querySelector("#task").value;
       let new_task_html = ' <span> ${task_text} </span> <button class ="remove"> Remove </button>';
       li.innerHTML = new_task_html
       
       li.innerHTML = document.querySelector('#task').value;
       
       document.querySelector("#tasks_list").append(li);
       document.querySelector("#task").value = '';
       return false;
     }
      document.addEventListener('click', function(event){
        
        element = event.target;
        if (element.className === 'remove'){
          element.parentElement.remove();
        }
        
      })
   });
  
  
                                                     
                            
                     
    
    
