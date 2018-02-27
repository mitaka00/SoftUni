function increment(selector) {
   let fragment=document.createDocumentFragment();
   let container=$(selector);
   let textArea=$('<textarea class="counter">').prop('disabled','true');
   textArea.val(0);
   let incrementBtn=$('<button id="incrementBtn" class="btn">Increment</button>');
   let addBtn=$('<button id="addBtn" class="btn">Add</button>');
   let ul=$('<ul class="results">');

   incrementBtn.click(function () {
       textArea.val(Number(textArea.val())+1);
   });

   addBtn.click(function () {
       let li=$(`<li>${textArea.val()}</li>`)

       li.appendTo(ul);
   });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    ul.appendTo(fragment);

    container.append(fragment)
}
