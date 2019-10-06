function createTodo(){
    var text = $("#txtToDo").val();

     $("#txtToDo").val("");

    // create li inside ul
     var li = "<li>" + text + "</li>";
     console.log(li);
     $("#pendingList").append(li);

     // set the focus back to the input field
     $("#txtToDo").focus();
}

function init(){
    console.log("Init of Todo app");

    //By Id
    // document.getElementById("btnSave").onclick = createTodo;
    //^ Find the button, then execute the function ^
    $("#btnSave").click(createTodo);        //# = id
}

//when the browser finish rendering my HTML,
//execute the init function //init is the start of everything
window.onload = init;





/*
    //By Tag
    document.getElementsByTagName("button"); JS
    $("button"); jQ

    document.getElementsByClassName("create-form"); JS
    $(".create-form"); jQ             //. = class
*/