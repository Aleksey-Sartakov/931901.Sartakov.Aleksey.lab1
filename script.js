const row = `<tr>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><button class="up">↑</button></td>
                <td><button class="down">↓</button></td>
                <td><button class="delete">x</button></td>
            </tr>`;

$('.add').click(function () {
    $('table').append(row);
})

$('body').delegate('.delete', 'click', function (e) {
    console.log('hi');

    $(this).parent().parent().remove();
})

$('body').delegate('.up', 'click', function (e) {
    $(this).parent().parent().prev().before($(this).parent().parent().detach())
})

$('body').delegate('.down', 'click', function (e) {
    let cur_row = $(this).parent().parent();
    let last_row = $('tr').last();
    if (cur_row.is(last_row)) {
    }
    else {
        $(cur_row).next().after(cur_row.detach());
        console.log('bebe');
    }
})
$('.save').click(function () {
    let data = {};
    for (let row of $('tr')) {
        let first_col = $(row).children()[0];
        let second_col = $(row).children()[1];
        let key = $(first_col).children().first().val();
        let value = $(second_col).children().first().val();
        if ((key != "") && (value != "")) {
            data[key] = value;
        }
    }
    let result = document.createElement('div');
    result.innerText = JSON.stringify(data);
    $('body').append(result);
});