console.log("Hello Testing :)")


let dict = {}
dict[1] = "Rock"
dict[2] = "Paper"
dict[3] = "Scissors"

function RPS() {
    let opponent = Math.floor(Math.random()*3)+1
    console.log("Please choose between Rock, Paper, and Scissors")
    let choice = prompt("Please choose between Rock, Paper and Scissors" )
    console.log("You played " + choice)
    console.log("Your opponent played " + dict[opponent] )

    if (choice == "Rock") {
        if (dict[opponent] == "Rock"){
            console.log("You tie!")
        } else if (dict[opponent] == "Paper") {
            console.log("You Lose! :(")
        } else {
            console.log("You Win!! :)")
        }
    } else if (choice == "Paper") {
        if (dict[opponent] == "Paper"){
            console.log("You tie!")
        }   else if (dict[opponent] == "Scissors") {
            console.log("You Lose! :(")
        }   else {
            console.log("You Win!! :)")
        }
    } else if (choice == "Scissors") {
        if (dict[opponent] == "Scissors"){
            console.log("You tie!")
        }   else if (dict[opponent] == "Rock") {
            console.log("You Lose! :(")
        }   else {
            console.log("You Win!! :)")
        }
    } else {
        console.log("Please enter a vald option :)")
    }
}