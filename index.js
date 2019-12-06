// user clicks board and X or O appears in the box
let turn = 'O';

document.getElementById('board').addEventListener('mousedown', newTurn);

function newTurn(event) {
    turn = turn === 'O' ? 'X' : 'O';

    event.target.querySelector('h4').innerHTML = turn;
}

//change in text to let the player know it is their turn
document.getElementById('main').addEventListener('mouseup', turnText);

function turnText() {
    if (turn === 'X') {
        document.querySelector('h2').innerHTML = 'It\'s Player 2\'s turn!';
    }

    else {
        document.querySelector('h2').innerHTML = 'It\'s Player 1\'s turn!';
    }
}

//check for wins... hardcode
document.getElementById('main').addEventListener('mouseup', checkForWin);

function checkForWin() {
    var box0 = document.getElementById('box0').innerText;
    var box1 = document.getElementById('box1').innerText;
    var box2 = document.getElementById('box2').innerText;
    var box3 = document.getElementById('box3').innerText;
    var box4 = document.getElementById('box4').innerText;
    var box5 = document.getElementById('box5').innerText;
    var box6 = document.getElementById('box6').innerText;
    var box7 = document.getElementById('box7').innerText;
    var box8 = document.getElementById('box8').innerText;

    if (box0 === 'X' && box1 === 'X' && box2 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box0 === 'O' && box1 === 'O' && box2 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box3 === 'X' && box4 === 'X' && box5 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box3 === 'O' && box4 === 'O' && box5 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box6 === 'X' && box7 === 'X' && box8 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box6 === 'O' && box7 === 'O' && box8 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box0 === 'X' && box3 === 'X' && box6 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box0 === 'O' && box3 === 'O' && box6 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box1 === 'X' && box4 === 'X' && box7 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box1 === 'O' && box4 === 'O' && box7 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box2 === 'X' && box5 === 'X' && box8 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box2 === 'O' && box5 === 'O' && box8 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box0 === 'X' && box4 === 'X' && box8 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box0 === 'O' && box4 === 'O' && box8 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }

    else if (box2 === 'X' && box4 === 'X' && box6 === 'X') {
        alert('Player 1 wins!');
        return window.location.reload();
    }

    else if (box2 === 'O' && box4 === 'O' && box6 === 'O') {
        alert('Player 2 wins!');
        return window.location.reload();
    }
}

//user can reset the game on tie or whenever they want
document.getElementById('reset-button').addEventListener('mousedown', reset);

function reset() {
    window.location.reload();
}