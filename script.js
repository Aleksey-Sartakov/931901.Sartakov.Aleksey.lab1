const max_figure_size = 300;
const min_figure_size = 50;
const doc_width = $(document).width() - 300;
const doc_height = $(document).height() - 300;


function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


$("input[name='square']").click(function () {
    let quantity_of_elem = $("input[name='quantity_of_elem']").val();
    let X, Y, size;
    for (let i = 0; i < quantity_of_elem; i++) {
        let elem = document.createElement('div');
        $(elem).addClass('square');
        $(elem).addClass('geom_fig');
        size = GetRandomInt(min_figure_size, max_figure_size);
        X = String(GetRandomInt(0, doc_width)) + 'px';
        Y = String(GetRandomInt(100, doc_height)) + 'px';
        $(elem).width(String(size) + 'px');
        $(elem).height(String(size) + 'px');
        $(elem).css('left', X);
        $(elem).css('top', Y);
        $('body').append(elem);
    }
})

$("input[name='triangle']").click(function () {
    let quantity_of_elem = $("input[name='quantity_of_elem']").val();
    let X, Y, size;
    for (let i = 0; i < quantity_of_elem; i++) {
        let elem = document.createElement('div');
        $(elem).addClass('triangle');
        $(elem).addClass('geom_fig');
        size = GetRandomInt(min_figure_size, max_figure_size);
        X = String(GetRandomInt(0, doc_width)) + 'px';
        Y = String(GetRandomInt(100, doc_height)) + 'px';
        $(elem).css('border-bottom', String(size) + 'px solid blue');
        $(elem).css('border-left', String(size / 2) + 'px solid transparent');
        $(elem).css('border-right', String(size / 2) + 'px solid transparent');
        $(elem).css('left', X);
        $(elem).css('top', Y);
        $('body').append(elem);
    }
})

$("input[name='circle']").click(function () {
    let quantity_of_elem = $("input[name='quantity_of_elem']").val();
    let X, Y, size;
    for (let i = 0; i < quantity_of_elem; i++) {
        let elem = document.createElement('div');
        $(elem).addClass('circle');
        $(elem).addClass('geom_fig');
        size = GetRandomInt(min_figure_size, max_figure_size);
        X = String(GetRandomInt(0, doc_width)) + 'px';
        Y = String(GetRandomInt(100, doc_height)) + 'px';
        $(elem).width(String(size) + 'px');
        $(elem).height(String(size) + 'px');
        $(elem).css('border-radius', String(size / 2) + 'px')
        $(elem).css('left', X);
        $(elem).css('top', Y);
        $('body').append(elem);
    }
})

$('body').delegate('.square', 'click', function (e) {
    if (e.detail === 1) {
        $(this).css('background-color', 'yellow');
    }
    else if (e.detail === 2) {
        $(this).remove();
    }
})

$('body').delegate('.circle', 'click', function (e) {
    if (e.detail === 1) {
        $(this).css('background-color', 'yellow');
    }
    else if (e.detail === 2) {
        $(this).remove();
    }
})

$('body').delegate('.triangle', 'click', function (e) {
    if (e.detail === 1) {
        $(this).css('border-bottom-color', 'yellow');
    }
    else if (e.detail === 2) {
        $(this).remove();
    }
})