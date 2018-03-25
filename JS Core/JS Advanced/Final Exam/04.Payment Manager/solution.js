class PaymentManager {
    constructor(title) {
        this.title = title;
        this.element = this._initialiseElement();

    }

    _initialiseElement() {
        let table = $('<table>');
        let caption = $('<caption>');
        caption.text(`${this.title} Payment Manager`);
        caption.appendTo(table);

        let head = $('<thead>');
        let headingRow = $('<tr>');
        let nameTh = $('<th class="name">Name</th>');
        let catTh = $('<th class="category">Category</th>');
        let priceTh = $('<th class="price">Price</th>');
        let actionsTh = $('<th>Actions</th>');
        let body = $('<tbody class="payments"></tbody>');
        head.appendTo(table);
        headingRow.appendTo(head);
        nameTh.appendTo(headingRow);
        catTh.appendTo(headingRow);
        priceTh.appendTo(headingRow);
        actionsTh.appendTo(headingRow);
        body.appendTo(table);

        let footer = $('<tfoot class="input-data"></tfoot>');
        let footRow = $('<tr>');
        let inputName = $('<td><input name="name" type="text"></td>');
        let inputCat = $('<td><input name="category" type="text"></td>');
        let inputPrice = $('<td><input name="price" type="number"></td>');
        let addBtnDefinition = $('<td><button>Add</button></td>');
        footer.appendTo(table);
        footRow.appendTo(footer);
        inputName.appendTo(footRow);
        inputCat.appendTo(footRow);
        inputPrice.appendTo(footRow);
        addBtnDefinition.appendTo(footRow);

        let addBtn = addBtnDefinition.find('button');

        addBtn.on('click', function () {
            let name = inputName.find('input');
            let cat = inputCat.find('input');
            let price = inputPrice.find('input');
            console.log(typeof price.val())
            if (name.val() !== '' && cat.val() !== '' && price.val() !== '') {
                let bodyTr = $('<tr>');
                let bodyName = $(`<td>${name.val()}</td>`);
                let bodyCat = $(`<td>${cat.val()}</td>`);
                let bodyPrice = $(`<td>${Number(price.val())}</td>`);
                let delBtnDefinition = $('<td><button>Delete</button></td>');
                bodyTr.appendTo(body);
                bodyName.appendTo(bodyTr);
                bodyCat.appendTo(bodyTr);
                bodyPrice.appendTo(bodyTr);
                delBtnDefinition.appendTo(bodyTr);

                name.val('');
                cat.val('');
                price.val('');

                let delBtn = delBtnDefinition.find('button');

                delBtn.on('click', () => {bodyTr.remove()})
            }
        });

        return table;
    }

    render(id) {
        this.element.appendTo($(`#${id}`));
    }
}