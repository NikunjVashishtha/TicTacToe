$(document).ready(function () {
    let xIsNext = true;
    let winnerSet = false;
    let playWithComp = true;

    function resetBoard() {
        for (let i = 1; i <= 9; i++) {
            $("#square" + i).text("");
        }
        winnerSet = false;
        xIsNext = true;
        $("#winner").text("Winner: ");
        $("#playWith").prop('disabled', false);
        $("#playAs").prop('disabled', false);
    }

    function checkSquares() {
        const lines = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
            [1, 4, 7], [2, 5, 8], [3, 6, 9], // cols
            [1, 5, 9], [3, 5, 7]             // diags
        ];
        let winner = null;
        for (const [a, b, c] of lines) {
            const valA = $("#square" + a).text();
            const valB = $("#square" + b).text();
            const valC = $("#square" + c).text();
            if (valA && valA === valB && valA === valC) {
                winner = valA;
                break;
            }
        }
        if (winner) {
            winnerSet = true;
            $("#winner").text(winner+" WINS!");
        } else if ([1,2,3,4,5,6,7,8,9].every(i => $("#square" + i).text() !== "")) {
            winnerSet = true;
            $("#winner").text("DRAW");
        }
    }

    function compTurn() {
        if (winnerSet) return;
        // Find all empty squares
        let empty = [];
        for (let i = 1; i <= 9; i++) {
            if ($("#square" + i).text() === "") empty.push(i);
        }
        if (empty.length === 0) return;
        // Pick a random empty square
        let move = empty[Math.floor(Math.random() * empty.length)];
        $("#square" + move).text(xIsNext ? "X" : "O");
        xIsNext = !xIsNext;
        checkSquares();
    }

    function renderTurn(element) {
        if (winnerSet || element.text() !== "") return;
        element.text(xIsNext ? "X" : "O");
        xIsNext = !xIsNext;
        checkSquares();
        if (playWithComp && !winnerSet && !xIsNext) {
            // Computer plays as O
            setTimeout(compTurn, 300);
        }
    }

    // Initial board clear
    resetBoard();

    // Play with computer toggle
    $("#playWith").click(function () {
        playWithComp = !playWithComp;
        $("#playWithStatus").text("Play with Computer: " + (playWithComp ? "ON" : "OFF"));
    });

    // Play as X or O toggle
    $("#playAs").click(function () {
        xIsNext = !xIsNext;
        $("#playAsStatus").text("Play as: " + (xIsNext ? "X" : "O"));
    });

    // Reset button
    $("#resetBtn").click(resetBoard);

    // Square click handler
    $(".square").click(function () {
        if (playWithComp && xIsNext) {
            renderTurn($(this));
        } else if (!playWithComp) {
            renderTurn($(this));
        }
        $("#playWith").prop('disabled', true);
        $("#playAs").prop('disabled', true);
    });
});