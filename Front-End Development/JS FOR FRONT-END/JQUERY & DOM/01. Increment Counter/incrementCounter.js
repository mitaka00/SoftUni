function increment(selector) {
    let container=$(selector);
    let fragment=document.createDocumentFragment();
    let incrementBtn=$('<button>Increment</button>');
    let addBtn=$('<button>Add</button>');
    let textArea=$('<textarea>');
    let list=$('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled',true);

    addBtn.addClass('btn');
    addBtn.attr('id','addBtn');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id','incrementBtn');

    list.addClass('results');

    //events
    $(incrementBtn).on("click", function () {
        textArea.val(Number(textArea.val())+ 1);
    });
    $(addBtn).on("click",function () {
        let li=$('<li>');
        li.text(textArea.val());
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    addBtn.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
increment("#wrapper");

