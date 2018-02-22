function search() {
    let searched=$('#searchText').val();
    let count=0;

    $("#towns li").each((index,item)=>{
        if(item.textContent.includes(searched)){
            $(item).css('font-weight','bold');
            count++;
        } else {
            $(item).css('font-weight','');
        }
    });

    $('#result').text(`${count} matched found.`)
}
