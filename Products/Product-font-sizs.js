function fontChange(){
    var changeSizeValue = document.getElementById('range').value;   //get value from range
    document.getElementById("displaySize").innerHTML = changeSizeValue +"%";    //display the font size

    //content
    var imageCardDiv = document.getElementsByClassName("image-card")[0];
    imageCardDiv.getElementsByClassName("image-title")[0].style.fontSize = parseInt(changeSizeValue) + 88 + "%";
    imageCardDiv.getElementsByClassName("image-discription")[0].style.fontSize = parseInt(changeSizeValue) +5+ "%";
}