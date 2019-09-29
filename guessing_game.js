const num = Math.floor((Math.random() * 10) + 1);
let count = 10;


$(document).ready(function() {
    $('button').on('click', function() {
        let guess = $('input').first().val();
        if (guess && count > 0) {
            if (guess != num){
                count--;
                let res = guess<num?'lower':'higher';
                $('#result').text(`Your guess is ${res} than the result, ${count} turn(s) left.`);
                $('#result').addClass('fail');
                $('#info').text($('#info').text() + '  ' + guess);
                $('#info').css('visibility', 'visible');
            }
            else {
                $('#result').text(`Yay YOUR ARE THE LORD OF THE GUESSES`);
                $('#result').removeClass('fail');
                $('#result').addClass('success');
            }
            $('#result').css('visibility', 'visible');
        }
        if (count == 0){
            alert('Loser');
        }
    })
})