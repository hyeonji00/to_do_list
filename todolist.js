function newRegister() {

    var text = document.querySelector("#txt");
    if(text.value==""){
        return false;
    }	
    
    var newP = document.createElement("p");	
    
    var check = document.createElement("input");
    check.setAttribute("type","checkbox");
    check.setAttribute("class","check");
    check.setAttribute("id","check");
    newP.appendChild(check);
    
    				
	var newText = document.createTextNode(text.value);
	newP.appendChild(newText);  

   
    var delBttn = document.createElement("button");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);							
    newP.appendChild(delBttn);


    var List = document.querySelector("#List");  
    List.insertBefore(newP, List.childNodes[0]);

    text.value = ""; 
    
    var removeBttns = document.querySelectorAll(".del");
            
    for (var i=0; i<removeBttns.length; i++) {
        removeBttns[i].addEventListener("click", function() {
        if (this.parentNode.parentNode)
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }

    var u=document.querySelectorAll("p");
    if(u.length>=6){
        u[u.length-1].style.border="none";
    }   
}		

function removeSelect(){
    var remove_sel = document.querySelectorAll(".check");
    for (var i=0; i<remove_sel.length; i++) {
       if(remove_sel[i].checked){
           if(remove_sel[i].parentNode.parentNode)
           remove_sel[i].parentNode.parentNode.removeChild(remove_sel[i].parentNode);
       }
    }
}

function removeAll(){
    var rmvAll=document.querySelectorAll("p");
    for(var i=0;i<rmvAll.length;i++){
        if(rmvAll[i].parentNode)
        rmvAll[i].parentNode.removeChild(rmvAll[i]);
    }   
}
