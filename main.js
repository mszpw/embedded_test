let setDefault = () => {
  document.getElementById('joke').innerHTML = 'Ehhh, what a life...';
  document.getElementById('heading').innerHTML = 'We have been programming in a lockdown for so long...'
  document.getElementById('jokeButton').innerHTML = 'Get in Better Mood';
  document.body.style.backgroundColor = "gray";
  document.getElementById('main-container').style.backgroundColor = "rgba(14, 14, 117, 0.692)";
  document.getElementById('sad').style.display = 'block';
  document.getElementById('happy').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.querySelector('.jokeCategory').style.display = 'none';
  endpoint = "https://sv443.net/jokeapi/v2/joke/Any?type=single";
  document.getElementById('ordinary').style.backgroundColor = 'whitesmoke';
  document.getElementById('programming').style.backgroundColor = 'whitesmoke';


}


let endpoint = "https://sv443.net/jokeapi/v2/joke/Any?type=single";

let getJoke = () => {
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE) {
            /* TRANSFORM JSON INTO A JS OBJECT (KEY:STRING) */
          let randomJoke = JSON.parse(xhr.responseText);
          /* GET THE JOKE:actualJoke pair */
          let readyJoke = randomJoke.joke;
          /* IN CASE OF AN ERROR */
          if (randomJoke.error == "true") {
            readyJoke = "Jumbo - the monkey coming up with the jokes got tired. :( Please try again later when he is ready. Sorry for the inconvenince..";
          }
          else {
            readyJoke = randomJoke.joke;
          }

          document.getElementById("joke").innerHTML = readyJoke;
        }
      };
      xhr.open("GET", endpoint);
      xhr.send();
}

let jokeClick = () => {
    document.getElementById("jokeButton").innerHTML = 'Keep the fun going ';
    getJoke();
    document.body.style.backgroundColor = "aquamarine";
    document.querySelector('.main-container').style.backgroundColor = "rgba(14, 117, 103, 0.363)";
    document.getElementById('heading').innerHTML = "Cheer up ! Programming is fun! "
    document.getElementById('sad').style.display = 'none';
    document.getElementById('happy').style.display = 'block';
    document.querySelector('.resetButton').style.display = 'inline';
    document.querySelector('.jokeCategory').style.display = 'block';
}

let geekyJoke = () => {
  endpoint = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  /* alert("Remember, not every programmer is a Geek! But well, seems like you are one..."); */
  document.getElementById('programming').style.backgroundColor = 'rgb(100, 237, 111)';
  document.getElementById('ordinary').style.backgroundColor = 'whitesmoke';
  /* document.getElementById('dark').style.backgroundColor = 'whitesmoke'; */
 
  }
let ordinaryJoke = () => {
  endpoint = "https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=single";
  /* alert("Normal people scare me..."); */
  document.getElementById('ordinary').style.backgroundColor = 'rgb(100, 237, 111)';
  document.getElementById('programming').style.backgroundColor = 'whitesmoke';
  /* document.getElementById('dark').style.backgroundColor = 'whitesmoke'; */
  
}

/* let darkJoke = () => {
  endpoint = "https://sv443.net/jokeapi/v2/joke/Dark?type=single";
  alert("If I were you, I would change it to something else. You have been warned!");
  document.getElementById('dark').style.backgroundColor = 'rgb(100, 237, 111)';
  document.getElementById('programming').style.backgroundColor = 'whitesmoke';
  document.getElementById('ordinary').style.backgroundColor = 'whitesmoke';
  
} */

let help = () => {
  
  alert("Hello there and welcome to our geeky jokes generator! In order to view a joke, simply click the button 'Get in better mood'. If you want to see another joke, click on 'Keep the fun going'. You can further specify whether you want to see programming jokes or miscellaneous by choosing how you feel. In order to reset the setting and get back to that cute puppy click on 'back to sadness'. Enjoy!  ");
}


document.getElementById("jokeButton").addEventListener("click", jokeClick);
document.getElementById("resetButton").addEventListener("click",setDefault);
document.getElementById("programming").addEventListener("click", geekyJoke);
document.getElementById("ordinary").addEventListener("click", ordinaryJoke);
/* document.getElementById("dark").addEventListener("click", darkJoke); */
document.getElementById("helpsign").addEventListener("click", help);


 



 
