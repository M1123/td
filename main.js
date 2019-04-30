$(()=>{
    $("#add").on("click", ()=>{
        let key = new Date();
        let val=prompt('Заметка');
        localStorage.setItem(key,val);
        location.reload();
    })
    for (let i=0;i<localStorage.length;i++){
        key = localStorage.key(i);
        let elem=$('<div class="card"></div>').text(localStorage.getItem(key));
        $(elem).append('<hr><header>'+key+'</header>');
        $(elem).append('<button class="del">x</button>');
        $("#myList").append(elem);
    }
    $(".del").on("click",()=>{
        $(this).parent().remove();
        console.log('remove');
    })
})