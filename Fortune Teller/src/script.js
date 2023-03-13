var fortunes = [
"Your hard work will reward you", "A friend will come to you for advice",
"At the end of this week comes an unexpected reward", "A great adventure is waiting for you", "Keep smiling"
];
function generate() {
    var randomNumber = Math.floor(Math.random() * fortunes.length);
    document.getElementById ('displays').value = "Your fortune is: ";
    var result = " ";

    if (randomNumber == 0) {
        result = fortunes [0];
    }

    if (randomNumber == 1) {
       result = fortunes [1];
    }

    if (randomNumber == 2) {
        result = fortunes [2];
    }

     if (randomNumber == 3) {
        result = fortunes [3];
    }

     if (randomNumber == 4) {
        result = fortunes [4];
    }



    document.getElementById ('displays').value += result;
}
