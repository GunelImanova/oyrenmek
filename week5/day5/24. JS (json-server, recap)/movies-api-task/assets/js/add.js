
import { endpoints } from "./API/constants.js";
import { post } from "./API/requests/index.js";
const titleInp = document.querySelector("#title");
const posterInp = document.querySelector("#poster");
const trailerURLInp = document.querySelector("#trailerURL");
const genreInp = document.querySelector("#genre");
const ageInp = document.querySelector("#age");
const countryInp = document.querySelector("#country");
const directorInp = document.querySelector("#director");
const descTextArea = document.querySelector("#desc");
const backtohome=document.getElementById("backtohome")
const addMoviebtn = document.getElementById("addMoviebtn")
addMoviebtn.addEventListener('click', (e) => {
    e.preventDefault()
    let newMovie = {

        "title": titleInp.value,
        "genre": genreInp.value,
        "country": countryInp.value,
        "director": directorInp.value,
        "ageRestriction": ageInp.value,
        "poster": posterInp.value,
        "trailerURL": trailerURLInp.value,
        "description": descTextArea.value,
        "id": "7",
    }
    post(endpoints.movies, newMovie)
})

backtohome.addEventListener('click',(e)=>{
window.location.replace("/movies-api-task/index.html")
})