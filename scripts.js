let expression = $(".expression")[0];
$('.add_sym').click(function () {
    expression.value += $(this).val();
})
$('.del_last_sym').click(function () {
    expression.value = expression.value.slice(0, -1);
})
$('.result').click(function () {
    expression.value = math.evaluate(expression.value);
})