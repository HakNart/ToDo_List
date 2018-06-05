//Toggle the line-through effect when an li is clicked
$("li").on("click",function(){
    $(this).toggleClass("done");
})

//Click on X to delete a todo
$(".delete").on("click",function(event){
    event.stopPropagation();
    $(this).parent("li").fadeOut(500,function(){
        $(this).remove();
    })
})