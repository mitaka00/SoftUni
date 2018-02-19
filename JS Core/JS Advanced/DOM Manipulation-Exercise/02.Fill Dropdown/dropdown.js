function addItem() {
    let text=document.getElementById('newItemText').value;
    let value=document.getElementById('newItemValue').value;

    let option=document.createElement('option');
    option.textContent=text;
    option.value=value;

    document.getElementById('menu').appendChild(option);

    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';
}
