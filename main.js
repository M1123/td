$(()=>{
    $("#add").on("click", ()=>{
        let val=prompt('Заметка');
        if(val!==''){
            let elem=$('<div class="card"></li>').text(val);
            $(elem).append('<button class="del">x</button>');
            $("#myList").append(elem);
            // $("input").val("");
        }
    })
    $(".del").on("click",()=>{
        $(this).parent().remove();
        console.log('remove')
    })
})