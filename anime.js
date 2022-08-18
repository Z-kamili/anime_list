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

    const searchResults = document.getElementById('search-results');

    // searchResults.innerHTML = "";

    const animeByCategories = data.results
    .reduce((acc,anime)=>{
        const {type} = anime;
        if(acc[type] === undefined) acc[type] = [];
        acc[type].push(anime);
        return acc;
    },{});

    searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{
        const animeHTML = animeByCategories[key]
        .sort((a,b)=> a.episodes-b.episodes)
        .map(anime=>{
        return `
        <div class="mt-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
                <img class="rounded-t-lg" style="width:100%" src="${anime.image_url}"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${anime.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${anime.synopsis}</p>
            <a href="${anime.url}" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
        </div>
    </div>
        `
    }).join("");
}).join("");
}


function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}

window.addEventListener("load",pageLoaded);

