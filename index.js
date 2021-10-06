/*function change_link_playlist() {
    location.replace("make_your_own_playlist.html");
}*/

// Create a "close" button and append it to each list item

/*var myNodePlayList = 
document.getElementsByTagName('li') ;
var i;
for (i =0; i <myNodePlayList.length; i++) {
    var span =
    document.createElement("SPAN");
var txt = documentcreateTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

}*/

//getting all required elements
/*const inputBox = document.querySelector("/make_your_own_playlist.inputField input");
const addBouton = document.querySelector("/make_your_own_playlist.addBtn");
const todoList = document.querySelector("/make_your_own_playlist.todoList");
const deleteAllBtn = document.querySelector("/make_your_own_playlist.footer button");*/

// onkeyup event

/*inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value; 
    if (userEnteredValue.trim () !=0) {
        addBouton.classList.add("active");
    }else {
        addBouton
    }
}*/

function todoList () {
    var item = document.getElementById("myInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("container_list").appendChild(newItem)


}
