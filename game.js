$(document).ready(function() {
    for (let i = 1; i <= 9; i++) {
        $("#square" + i).text("");
    }
    var xIsNext = true;
    var winnerSet = false;
    if ($("#playWith").checked) {
        var playWithComp = true;
    } else {
        var playWithComp = false;
    }
    $("#playWith").click(function() {
        playWithComp = !playWithComp;
        if (playWithComp == true) {
            $("#playWithStatus").text("Play with Computer: ON");
        } else {
            $("#playWithStatus").text("Play with Computer: OFF");
        }
    })
    $("#playAs").click(function() {
        xIsNext = !xIsNext;
        if (xIsNext == true) {
            $("#playAsStatus").text("Play as: X");
        } else {
            $("#playAsStatus").text("Play as: O");
        }
    })
    $("#resetBtn").click(function() {
        for (let i = 1; i <= 9; i++) {
            $("#square" + i).text("");
        }
        winnerSet = false;
        xIsNext = true;
        $("#winner").text("Winner: ");
        $("#playWith").prop('disabled', false);
        $("#playAs").prop('disabled', false);
    })

    function checkSquares() {
        // checkWinner X
        if ($("#square1").text() == "X" && $("#square2").text() == "X" && $("#square3").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square4").text() == "X" && $("#square5").text() == "X" && $("#square6").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square7").text() == "X" && $("#square8").text() == "X" && $("#square9").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square1").text() == "X" && $("#square4").text() == "X" && $("#square7").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square2").text() == "X" && $("#square5").text() == "X" && $("#square8").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square3").text() == "X" && $("#square6").text() == "X" && $("#square9").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square1").text() == "X" && $("#square5").text() == "X" && $("#square9").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        } else if ($("#square3").text() == "X" && $("#square5").text() == "X" && $("#square7").text() == "X") {
            winnerSet = true;
            $("#winner").text("Winner: X");
        }

        // checkWinner O
        else if ($("#square1").text() == "O" && $("#square2").text() == "O" && $("#square3").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square4").text() == "O" && $("#square5").text() == "O" && $("#square6").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square7").text() == "O" && $("#square8").text() == "O" && $("#square9").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square1").text() == "O" && $("#square4").text() == "O" && $("#square7").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square2").text() == "O" && $("#square5").text() == "O" && $("#square8").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square3").text() == "O" && $("#square6").text() == "O" && $("#square9").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square1").text() == "O" && $("#square5").text() == "O" && $("#square9").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else if ($("#square3").text() == "O" && $("#square5").text() == "O" && $("#square7").text() == "O") {
            winnerSet = true;
            $("#winner").text("Winner: O");
        } else {
            if ($("#square1").text() != "" && $("#square2").text() != "" && $("#square3").text() != "" && $("#square4").text() != "" && $("#square5").text() != "" && $("#square6").text() != "" && $("#square7").text() != "" && $("#square8").text() != "" && $("#square9").text() != "") {
                winnerSet = true;
                $("#winner").text("Draw");
            } else {}
        }
    }

    function renderTurn(element) {
        if (winnerSet == false) {
            if (xIsNext == true) {
                if (playWithComp == true) {
                    compTurn();
                } else {
                    if (element.text() == "") {
                        element.text("X");
                        xIsNext = false;
                        checkSquares();
                    }
                }
            } else {
                if (playWithComp == true) {
                    compTurn();
                } else {
                    if (element.text() == "") {
                        element.text("O");
                        xIsNext = true;
                        checkSquares();
                    }
                }
            }
        } else {
            return false;
        }
    }

    function compTurn() {
        $(".square").click(
            function() {

            }
        )
    }
    $(".square").click(
        function() {
            if (playWithComp == true) {
                compTurn($(this));
            } else {
                renderTurn($(this));
            }
            $("#playWith").prop('disabled', true);
            $("#playAs").prop('disabled', true);
        }
    )
});