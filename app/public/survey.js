/**
 * Created by SilverDash on 6/2/17.
 */

// var otherFile = require('./../routing/apiRoutes.js');
// bmc: if that ^^^^^ would work, things would be better

// bmc: this is for the submit click on the test
$('#submit').on('click', function (event) {
    event.preventDefault();

    // bmc: create a new person with the stuff
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
    $.post('/friend-list', newPerson, function (responseFromBackEnd) {
        // bmc: I'm not sure if this is working

        // bmc: display the information from the response
        // bmc: remember this is being "sent" to the apiRoutes.js
        // bmc: and we'll get the response back from that
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

// otherFile.pleaseShowBestFriendAlready
// bmc: yet another line of code that results in bupkus

function showNewBestFriend(friend) {
    $("#results").css("display", "block");
    $("#results").html(friend);
    $("#results").text("yes this is working");
}
// bmc: that ^^^^^^ stuff doesn't work at all. ARG!
