/**
 * Created by SilverDash on 6/2/17.
 */
// bmc: at this point, june 3, 6:58am, this file isn't used, instead, this code is in the survey.html because it keeps glitching over here

console.log('survey.js has been accessed');

$('#submit').on('click', function (event) {
    console.log('script started in the survey.js file');
    event.preventDefault();
    var newPerson = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val()
        ]

    };
    console.log(newPerson);
    $.post('/friend-list', newPerson, function (responseFromBackEnd) {

        // bmc: display the information from the response
        // bmc: remember this is being "sent" to the apiRoutes.js
        // bmc: and we'll get the response back from that
        console.log('we have found your friend');
        console.log('this is the response from backend:', responseFromBackEnd);
        $('#name').val('');
        $('#photo').val('');
        $('#q1').val('');
        $('#q2').val('');
        $('#q3').val('');
        $('#q4').val('');
        $('#q5').val('');
        $('#q6').val('');
        $('#q7').val('');
        $('#q8').val('');
        $('#q9').val('');
        $('#q10').val('');
    });

});

