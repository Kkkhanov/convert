$('#speed').click(
    function(){
        let dist = $('#distance').val()
        let time = $('#time').val()
        let result = dist / time;
        $('#out').text('скорость равна: ' + result + ' км/ч')
    }
)
$('#dengi').click(
    function(){
        let balance = $('#balance').val()
        let cost = $('#cost').val()
        let count = balance / cost
        let itog = Math.trunc(count)
        let sda4a = balance - itog * cost
        $('#itog').text('Вы можете купить ' + itog + ' шоколадок')
        $('#sda4a').text('Ваша сдача: ' + sda4a + ' рублей')
    }
)
$('#convert').click(
    function(){
        let dollar = $('#dollar').val()
        let curs = 0.91
        let result = dollar * curs
        $('#out2').text(dollar + ' долларов равно ' + result + ' евро')
    }
)