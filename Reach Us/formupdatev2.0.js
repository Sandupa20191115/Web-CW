function fontChange(){
    var changeSizeValue = document.getElementById('range').value;   //get value from range
    document.getElementById("displaySize").innerHTML = changeSizeValue +"%";    //display the font size

    // main topic
    document.getElementById("szName").style.fontSize = parseInt(changeSizeValue) + 7 + "%";
    document.getElementById("szEmail").style.fontSize = parseInt(changeSizeValue) + 7 + "%";
    document.getElementById("szComment").style.fontSize = parseInt(changeSizeValue) + 7 + "%";
    document.getElementById("ratequestion").style.fontSize = parseInt(changeSizeValue) + 50+ "%";

    document.getElementsByClassName("rating-text")[0].style.fontSize = parseInt(changeSizeValue) + 30 + "%";
    document.getElementsByClassName("rating-text")[1].style.fontSize = parseInt(changeSizeValue) + 30 + "%";
    document.getElementsByClassName("rating-text")[2].style.fontSize = parseInt(changeSizeValue) + 30 + "%";

    document.getElementById("submit").style.fontSize = parseInt(changeSizeValue) + 15+ "%";
    document.getElementById("reset").style.fontSize = parseInt(changeSizeValue) + 15+ "%";

}

