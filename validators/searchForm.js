function searchValidator(){

    //all elements that are needed to validate search
    var nameInput = document.getElementById("idWifiName").value;
    var ratingInput = document.getElementById("ratingSelect").value; //Rating
    var suburbInput = document.getElementById("suburbSelect").value; //Suburb
    var formSearch = document.getElementsByClassName('formSearch')

    //checking if the input is empty, if it is then it will show the toast
    if(nameInput === "" && ratingInput === "Rating" && suburbInput === "Suburb"){ 
        var toast = document.getElementById("snackbar");
        //setting color, text and class;
        toast.style.backgroundColor = "#e74c3c";
        toast.innerHTML = "Enter search details...";
        toast.className = "show";
        //showing the toast
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        return false;
    }
    
}
