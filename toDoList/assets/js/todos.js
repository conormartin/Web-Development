//when li is clicked inside a ul, run this function
$('ul').on('click', 'li', function() {
    //if color is gray, change to black
    $(this).toggleClass('completed');
});

//click on X to delete undo
$('ul').on('click', 'span', function(event) {
    //parent.remove() removes both the span and its parent li
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //stopPropogation stops click event bubbling up through all parent elements
    event.stopPropogation();
});

//enter new item to list
$('input[type="text"]').keypress(function(event) {
    //checks which key was pressed, 13 refers to enter key
    if(event.which === 13) {
        //gets to-do text from input
        var toDoText = $(this).val();
        //empties text box after user clicks enter
        $(this).val('');
        //creates a new li and adds to the ul
        $('ul').append('<li><i class="fa fa-trash"></i></span>' + toDoText + '</li>');
    }
});

$('.fa-plus').click(function() {
    $('input[type="text"]').fadeToggle();
})