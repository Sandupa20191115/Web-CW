function fontChange(){
    var changeSizeValue = document.getElementById('range').value;   //get value from range
    document.getElementById("displaySize").innerHTML = changeSizeValue +"%";    //display the font size

    // main topic
    document.getElementById("mainTopicLink_1").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    document.getElementById("mainTopicLink_2").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    document.getElementById("mainTopicLink_3").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    
    //sub topic
    document.getElementById("subtopicLink_1").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    document.getElementById("subtopicLink_2").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    document.getElementById("subtopicLink_3").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    document.getElementById("subtopicLink_4").style.fontSize = parseInt(changeSizeValue) + 100 + "%";
    document.getElementById("subtopicLink_5").style.fontSize = parseInt(changeSizeValue) + 100 + "%";

    //content
    var contentDiv = document.getElementById("wiki");
    contentDiv.getElementsByTagName("h3")[0].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[1].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[2].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[3].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[4].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[5].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[6].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
    contentDiv.getElementsByTagName("h3")[7].style.fontSize = parseInt(changeSizeValue) + 17 + "%";
}

