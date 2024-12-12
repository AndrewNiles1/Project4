function TextChange(){
    document.getElementById("change").innerHTML = "you changed the text!";
    console.log("change");
}   
function NavChange() {


    const element = document.getElementById("nav");
    if(document.getElementsByClassName("open")){
          element.classList.toggle("closed");
        console.log("changing nav status ")
    }
    
}

function ExpandedNav(){
    NavChange();
}

    
