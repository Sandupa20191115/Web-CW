var clicked = true;
var clicked2 = true;
function showdown(){
    if(clicked){
        document.getElementById("stu_pages").style.display = "block";
        document.getElementById("downarrow").style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById("stu_pages").style.display = "none";
		document.getElementById("downarrow").style.transform = "rotate(0deg)";
		}
    clicked = !clicked
}
function showdown2(){
    if(clicked2){
        document.getElementById("font_btns").style.display = "block";
        document.getElementById("downarrow2").style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById("font_btns").style.display = "none";
        document.getElementById("downarrow2").style.transform = "rotate(0deg)";
    }
    clicked2 = !clicked2
}
function menuhide(){
    document.getElementById("links").style.right = "-200px";
    document.getElementById("bars").style.opacity = "1";
}
function menushow(){
    document.getElementById("links").style.right = "0px";
    document.getElementById("bars").style.disply = "0";
}




//Products 
function display_product_card(x){
    document.getElementById("disply-card").style.display = "block"; //Display product card div
    var pro_name = document.getElementsByClassName("product-name")[x];  //Get product name from product-name
    var pro_discription = document.getElementsByClassName("product-discription")[x];    //Get producy discription from product-discription
    var pro_price = document.getElementsByClassName("without$")[x]; //Get product price from without
    document.getElementsByClassName("image-title")[0].innerHTML = pro_name.innerHTML;   //Set the product name in image-title
    document.getElementsByClassName("image-discription")[0].innerHTML = pro_discription.innerHTML;  //Set the product discription in image-discription
    document.getElementsByClassName("image-price")[0].innerHTML = pro_price.innerHTML;  //Set the product price in the image-price
    document.images[5].src = document.images[x+1].src;  //Set product image on displya product card image box
    for(i=0; i<4; i++){ 
        document.getElementsByClassName("products")[i].style.display = "none";  //Display hide product div
    }
}

function display_discription(){
    document.getElementById("disply-card").style.display = "none";  //Hide disply-card div
    for(i=0; i<4; i++){
        document.getElementsByClassName("products")[i].style.display = "block"; //Display product div
     }
}

// function buy_button(){
//     var form_name = document.getElementsByName('name')[0].value;    //Get customer name
//     var form_phoneno = document.getElementsByName('phoneno')[0].value;  //Get customer phone numeber
//     var form_mail = document.getElementsByName('email')[0].value;   //Get customer email
//     var form_quantity_number = document.getElementsByName('quantityno')[0].value;   //Get number of items
//     var form_address = document.getElementsByTagName('textarea').value;   //Get customer address
//     var product_title_pop = document.getElementsByClassName('image-title')[0].innerHTML;   //Get product name from image-title
//     var product_price_pop = document.getElementsByClassName('image-price')[0].innerHTML;   //Get product price from image-price

//     if (form_name =='' || form_phoneno =='' || form_mail =='' || form_quantity_number =='' || form_address ==''){   //Check form was fill correctly
//         confirm("Hey, \nPlease fill the form correctly...!");
//     }
//     else{
//         confirm("Hey "+form_name+",\n"+"You have ordered "+form_quantity_number+" '"+product_title_pop+"' at a cost of $"+
//         product_price_pop+" each. Your total bill is $"+product_price_pop*form_quantity_number)
//     }
// }





function buy_button(){
    var form_name = document.getElementsByName('name')[0].value;    //Get customer name
    var form_phoneno = document.getElementsByName('phoneno')[0].value;  //Get customer phone numeber
    var form_mail = document.getElementsByName('email')[0].value;   //Get customer email
    var form_quantity_number = document.getElementsByName('quantityno')[0].value;   //Get number of items
    var form_address = document.getElementsByTagName('textarea').value;   //Get customer address
    var product_title_pop = document.getElementsByClassName('image-title')[0].innerHTML;   //Get product name from image-title
    var product_price_pop = document.getElementsByClassName('image-price')[0].innerHTML;   //Get product price from image-price

    if (form_name =='' || form_phoneno =='' || form_mail =='' || form_quantity_number =='' || form_address ==''){   //Check form was fill correctly
        document.getElementById('popup-summary').innerHTML = 'Please fill the form correctly...!';      //Display error message in popup-summary div and popoup that
        document.getElementById('popup-content').style.borderColor = "#ff0042";     //Change popup box border color in red
    }
    else{
        document.getElementById('popup-summary').innerHTML = "You have ordered "+form_quantity_number+" '"+product_title_pop+"' at a cost of $"+
        product_price_pop+" each. Your total bill is $"+product_price_pop*form_quantity_number;                 //Display this popup message for without filling errors
        document.getElementById('popup-content').style.borderColor = "aqua";    //Change popup box border color in aqua
    }
    document.getElementById('customer_name').innerHTML = form_name;     //Set the customer name in customer_name div
    document.getElementById('popup-box').style.transform = 'scale(1)';      //Display popup div
    document.getElementsByClassName("overlayer")[0].style.display = "block";    //Display overlayer div
    document.getElementsByClassName("fullbody")[0].style.filter = "blur(3px)";      //Add filters to the fullbody div 
}

function close_popup(){
    document.getElementById('popup-box').style.transform = 'scale(0)';  //Close popup box
    document.getElementsByClassName("overlayer")[0].style.display = "none"; //Hide overlayer div
    document.getElementsByClassName("fullbody")[0].style.filter = "blur(0px)";  //Change fullbody div fillters
}
