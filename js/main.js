const inputs = document.querySelectorAll(".input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


document.getElementById('form1').addEventListener('submit', function(evt){
  evt.preventDefault();
  
  let ass=validate();
  if(ass){window.location.href="infff.html";}
  
});





function validate(){
  // return true;
	let name =document.getElementById("usen");
    let pass =document.getElementById("passv");
    if(name.value=='admin' && pass.value=='12345'){
        
		return true;
    }
    else{
        
          alert("Ïnvalid Login Credentials!");  
          return false;
        }
    
}

let count=0;
  
  function edit(obj) {


    var id =obj.id
    var label_id = 'label'+id;

    if (obj.checked) {   

       $("#"+id).prop("checked", true);


        console.log(obj.id);
  
       count++;
       console.log(count);
       $( this ).attr( 'checked', true )


       document.getElementById(label_id).style.textDecoration = 'line-through';
       $("#"+id).prop("checked", true);


       if (count == 5){
       
       alert('Congrats.  5 Tasks have been Successfully Completed');
   }

    } else {
        // $( this ).attr( 'checked', false )
      count--;
      document.getElementById(label_id).style.textDecoration = '';
    }
  }



