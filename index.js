const hands = ["🧱", "✂️", "📃", "🖖", "🦎"]
const renderHands1El = document.getElementById("render-hand1-el")
const renderHands2El = document.getElementById("render-hand2-el")
const startBtn = document.getElementById("start-game")
const sheldonComment = document.getElementById("sheldon-comment")

startBtn.addEventListener("click", function() {
    renderHands()
})

function renderHands() { 
    const randomNumber1 = Math.floor(Math.random() * hands.length)
    const randomNumber2 = Math.floor(Math.random() * hands.length)
    renderHands1El.textContent = "Player1: " + hands[randomNumber1]
    renderHands2El.textContent = "Player2: " + hands[randomNumber2]
    let playerName = ""
    
    if (randomNumber1 == 0 && randomNumber2 == 1 || randomNumber1 == 1 && randomNumber2 == 0)
    {randomNumber1 < randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Rock crushes Scissors."`
        
    } else if (randomNumber1 == 0 && randomNumber2 == 2 || randomNumber1 == 2 && randomNumber2 == 0) {randomNumber1 > randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Paper covers Rock"`
        
    } else if (randomNumber1 == 0 && randomNumber2 == 3 || randomNumber1 == 3 && randomNumber2 == 0) {randomNumber1 > randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Spock vaporizes Rock"`
        
    } else if (randomNumber1 == 0 && randomNumber2 == 4 || randomNumber1 == 4 && randomNumber2 == 0) {randomNumber1 < randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Rock crushes Lizard"`
        
    } else if (randomNumber1 == 1 && randomNumber2 == 2 || randomNumber1 == 2 && randomNumber2 == 1) {randomNumber1 < randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Scissors cuts Paper"`
        
    } else if (randomNumber1 == 1 && randomNumber2 == 3 || randomNumber1 == 3 && randomNumber2 == 1) {randomNumber1 > randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Spock smashes Scissors"`
        
    } else if (randomNumber1 == 1 && randomNumber2 == 4 || randomNumber1 == 4 && randomNumber2 == 1) {randomNumber1 < randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Scissors decapitates Lizard"`
        
    } else if (randomNumber1 == 2 && randomNumber2 == 3 || randomNumber1 == 3 && randomNumber2 == 2) {randomNumber1 < randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Paper disproves Spock"`
        
    } else if (randomNumber1 == 2 && randomNumber2 == 4 || randomNumber1 == 4 && randomNumber2 == 2) {randomNumber1 > randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Lizard eats Paper"`
        
    } else if (randomNumber1 == 3 && randomNumber2 == 4 || randomNumber1 == 4 && randomNumber2 == 3) {randomNumber1 > randomNumber2 ? playerName = "Player1": playerName = "Player2"
        sheldonComment.textContent = `"${playerName} wins, Lizard poisons Spock"`
    } else {
        sheldonComment.textContent = '"BAZINGA! Try again."'
    }
}