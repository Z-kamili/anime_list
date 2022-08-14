const base_url = "https://api.jikan.moe/v3";

 function searchAnime(event){

    event.preventDefault();
    const form = new FormData(this);
    const query = form.get("search");
     console.log(query);
     fetch(`${base_url}/search/anime?q=${query}&page=1`)
     .then(res => res.json())
     .then(updateDom)
     .cattch(err=>console.warn(err.message));

}

function updateDom(data)
{

    data.results.forEach(anime=>console.log(anime));

}


function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}

window.addEventListener("load",pageLoaded);

