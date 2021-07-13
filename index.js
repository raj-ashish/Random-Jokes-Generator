// GET https://icanhazdadjoke.com/

const joke = document.querySelector("#joke");
const btnJoke = document.querySelector("#btnJoke");

//Using Promises -- 
// function generatejokes(){

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }
    
//     fetch("https://icanhazdadjoke.com/", setHeader)
//     .then((response) => response.json())
//     .then((data) => {
//         joke.innerHTML = data.joke;
//     }).catch((error) =>{
//         console.log(error);
//     })
// }


btnJoke.addEventListener('click', generatejokes);
generatejokes();


//Using Async/await method --
async function generatejokes(){

    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        const response = await fetch("https://icanhazdadjoke.com/", setHeader);
        const data     = await response.json();
        joke.innerHTML = data.joke;
    }catch(error){
        console.log(`The error is ${error}`);
    }
   
   
btnJoke.addEventListener('click', generatejokes);
// generatejokes();
}
