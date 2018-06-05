//Toggle the line-through effect when an li is clicked
$("ul").on("click", 'li', function(){
    $(this).toggleClass("done");
})

//Click on X to delete a todo
$("ul").on("click", '.delete', function(event){
    event.stopPropagation();
    $(this).parent("li").fadeOut(500,function(){
        $(this).remove();
    })
})

//Add a todo to the list
$("input").on("keypress",function(event){
    if(event.which === 13) {
        //Store the input value into todoText
        var todoText = $(this).val();
        //Clear the input box
        $(this).val("");
        //Create a new li and add it to the ul
        $("ul").append("<li><span class='delete'>X</span> " + todoText + "</li>"); 
    }
})