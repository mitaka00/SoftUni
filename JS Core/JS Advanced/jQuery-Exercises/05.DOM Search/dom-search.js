function domSearch(selector,isSensitive) {
    let container=$(selector);
    container.addClass('items-control');

    //make add Div
    let addDiv=$(`<div class="add-controls">`);
    let addLabel=$(`<label>Enter text: </label>`);
    let addInput=$('<input>');
    let addBtn=$(`<a class="button" style="display: inline-block">Add</a>`).click(addToList);

    addLabel.append(addInput);
    addDiv.append(addLabel);
    addDiv.append(addBtn);

    //make search div
    let searchDiv=$(`<div class="search-controls">`);
    let searchLabel=$(`<label>Search: </label>`);
    let searchInput=$('<input>').change(searchListElements);

    searchLabel.append(searchInput);
    searchDiv.append(searchLabel);

    //make result div
    let resultDiv=$(`<div class="result-controls">`);
    let ul=$('<ul class="items-list">');

    resultDiv.append(ul);

    //append divs to container
    container.append(addDiv);
    container.append(searchDiv);
    container.append(resultDiv);
    
    
    function addToList() {
        let li=$('<li class="list-item">').css('display','block');
        let deleteBtn=$(`<a class="button">X</a>`).click(deleteFromList);
        let inputText=$(`<strong>${addInput.val()}</strong>`);

        if(inputText.text()!=='') {
            li.append(deleteBtn);
            li.append(inputText);

            ul.append(li);
        }
    }
    
    function searchListElements() {
        let searchedText=searchInput.val();

        //make pattern for searched text;
        let pattern;
        if(isSensitive){
            pattern=new RegExp(searchedText);
        } else {
            pattern=new RegExp(searchedText,'i');
        }

       let listArr=$('ul li').toArray();

       if(searchedText===''){
           for (let listItem of listArr) {
               listItem.style.display='block';
           }
       } else {
           for (let listItem of listArr) {
                let elementsInList=listItem.children;
                let currentText=elementsInList[1].textContent;

                if(pattern.test(currentText)){
                    listItem.style.display='block';
                } else {
                    listItem.style.display='none'
                }
           }
       }
    }

    function deleteFromList() {
        let deleted=$(this).parent();
        deleted.remove();
    }
}
