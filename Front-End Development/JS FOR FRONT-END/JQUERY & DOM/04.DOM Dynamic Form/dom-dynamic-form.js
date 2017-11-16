function domDynamicForm(selector) {
    let container=$(selector);
    let fragment=document.createDocumentFragment();

    let addDiv=$('<div>');
    let label=$('<label>Enter text:</label>');
    let input=$('<input>');
    let addBtn=$('<a>Add</a>').css('left','270px').css('text-decoration','none').hover().css('cursor','pointer');
    let resultDiv=$('<div>');
    let ul=$('<ul>');

    addDiv.addClass('add-controls');
    addBtn.addClass('button');
    resultDiv.addClass('result-controls');
    ul.addClass('items-list');

    input.appendTo(label);
    label.appendTo(addDiv);
    addBtn.appendTo(addDiv);
    addDiv.appendTo(fragment);

    container.append(fragment);

    addBtn.on('click',function () {
        let li=$('<li>');
        let strong=$('<strong>');
        let deleteBtn=$('<a>X</a>').css('text-decoration','none').hover().css('cursor','pointer');
        li.addClass('list-item');
        deleteBtn.addClass('button');

        li.append(deleteBtn);
        strong.append(input.val());
        li.append(strong);

        li.appendTo(ul);

        deleteBtn.on('click',function () {
            li.remove();
        })
    });

    ul.appendTo(resultDiv);
    resultDiv.appendTo(fragment);

    container.append(fragment);
}
