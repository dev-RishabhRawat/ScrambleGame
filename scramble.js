var text = document.querySelector('.msg');
var guess = document.querySelector('input');
var btn = document.querySelector('.btn');
var p = document.querySelector('p');
var stp = document.getElementById('stop');
let play = false;
var newWords, shuffledWords, stopButoon;
var words = ["tanhaji", "baaghi 3", "malang", "chhapaak", "krish 3", "jawaani jaaneman", "hacked", "kabir singh", "good news", "mission mangal", "housefull 4", "Ghajini", "rockstar", "uri", "Badal", "kismat", "Sholay", "queen", "Gangster", "NH10", "GolMaal", "3 Idiots", "Lootera", "Andhadhun", "Fida", "Partner", "Dangal", "Badhaai Ho", "Avenger", "DevDas", "Raazi", "Dabangg", "Kahaani", "Dhoom", "Dhoni", "war"]
const createNewWords = () => {
    var randomeWords = Math.floor(Math.random() * words.length);
    return words[randomeWords];

}
const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
btn.addEventListener('click', function() {
    if (!play) {
        p.innerHTML = "";
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        shuffledWords = scrambleWords(newWords.split(''));
        text.innerHTML = `Guess The Movie : \'${shuffledWords.join('')}\' And write below`;
        stp.classList.toggle('hidden');


    } else {
        let typeWords = guess.value;
        if (typeWords.toLowerCase() === newWords.toLowerCase()) {

            text.innerHTML = `Awesome!! Right guess.. It's \'${newWords}\'`;
            btn.innerHTML = "Start Again!!";
            guess.classList.toggle('hidden');
            stp.classList.toggle('hidden');
            play = false;
            guess.value = "";
            p.innerHTML = "";

        } else if (typeWords.toUpperCase() === newWords.toUpperCase()) {

            text.innerHTML = `Awesome!! Right guess.. It's \'${newWords}\'`;
            btn.innerHTML = "Start Again!!";
            guess.classList.toggle('hidden');
            stp.classList.toggle('hidden');
            play = false;
            guess.value = "";
            p.innerHTML = "";

        } else {
            text.innerHTML = `Wrong!! Try Again. It's \'${newWords}\'`;
            btn.innerHTML = "Start Again!!";
            guess.classList.toggle('hidden');
            stp.classList.toggle('hidden');
            play = false;
            guess.value = "";
            p.innerHTML = "";

        }
    }
});