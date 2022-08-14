const base_url = "https://api.jikan.moe/v3/anime/1";

 function searchAnime(event){

    event.preventDefault();


     const form = new FormData(this);
     const query = form.get("search");

     console.log(query);

     /*
     fetch(base_url)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.warn(err.message));*/

}


function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}

window.addEventListener("load",pageLoaded);

