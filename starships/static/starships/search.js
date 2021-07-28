//Search page js code

const searchBar = document.getElementById('user-input')
const searchResult = document.getElementById('search-result')
const searchBtn = document.getElementById('search-btn')
let q ;

console.log('annen kasar')

const searchRequest = () => {
    console.log(q)
    $.ajax({
        type: 'GET',
        url: `https://swapi.dev/api/starships/?search=${q}`,
        success: function(response){
            const data = response.results
            console.log(data)
            data.map(ship=> {
                searchResult.innerHTML += `
                <article class="media content-section" >
                <div class="media-body">
                  <div class="article-metadata">
                    <span class="mr-2">${ship.model}</span>
                    <small class="text-muted">Hyper Drive Rating: ${ship.hyperdrive_rating}</small>
                  </div>
                  <h2><a class="article-title" href="/${ship.name}">${ship.name}</a></h2>
                </div>
              </article>
                `
            })
            if(response.count == 0){
                searchResult.innerHTML += `
                <h2>No results found.</h2>
                `
            }
        },
        error: function(error){
            console.log(error)
        }
    })
}

searchBtn.addEventListener('click', ()=>{
    searchResult.innerHTML = ''
    q = document.getElementById('user-input').value
    //console.log(q)
    searchRequest()
})