//Search page js code

const searchBar = document.getElementById('user-input')
const searchShip = document.getElementById('search-ship')
const searchPerson = document.getElementById('search-person')
const searchBtn = document.getElementById('search-btn')
let q ;

const search_Ship = () => {
    console.log(q)
    $.ajax({
        type: 'GET',
        url: `https://swapi.dev/api/starships/?search=${q}`,
        success: function(response){
            const data = response.results
            console.log(data)
            data.map(ship=> {
                searchShip.innerHTML += `
                <article class="media content-section" >
                <div class="media-body">
                  <div class="article-metadata">
                    <span class="mr-2">${ship.model}</span>
                    <small class="text-muted">Hyper Drive Rating: ${ship.hyperdrive_rating}</small>
                  </div>
                  <h2><a class="article-title" href="/ships/${ship.name}">${ship.name}</a></h2>
                </div>
              </article>
                `
            })
            if(response.count == 0){
                searchShip.innerHTML += `
                <h2>No ships found.</h2>
                `
            }
        },
        error: function(error){
            console.log(error)
        }
    })
}

const search_Person = () => {
    console.log(q)
    $.ajax({
        type: 'GET',
        url: `https://swapi.dev/api/people/?search=${q}`,
        success: function(response){
            const data = response.results
            console.log(data)
            data.map(person=> {
                searchPerson.innerHTML += `
                <article class="media content-section" >
                <div class="media-body">
                  <div class="article-metadata">
                    <span class="mr-2">Peoples of Star Wars</span>
                  </div>
                  <h2><a class="article-title" href="/people/${person.name}">${person.name}</a></h2>
                </div>
              </article>
                `
            })
            if(response.count == 0){
                searchPerson.innerHTML += `
                <h2>No persons found.</h2>
                `
            }
        },
        error: function(error){
            console.log(error)
        }
    })
}

searchBtn.addEventListener('click', ()=>{
    searchShip.innerHTML = ''
    searchPerson.innerHTML = ''
    q = document.getElementById('user-input').value
    //console.log(q)
    search_Ship()
    search_Person()
})