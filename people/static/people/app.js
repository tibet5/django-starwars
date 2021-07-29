const shipBox = document.getElementById('ship-section')
const loadBtn = document.getElementById('load-btn')
let next = !null;
let pageNum = 2;

const dataRequest = () => {
    $.ajax({
        type: 'GET',
        url:`https://swapi.dev/api/people/?page=${pageNum}`,
        success: function(response){
            const data = response.results
            next = response.next
            data.map(ship=> {
                shipBox.innerHTML += `
                <article class="media content-section" >
                <div class="media-body">
                  <div class="article-metadata">
                  <span class="mr-2">Peoples of Star Wars</span>
                  </div>
                  <h2><a class="article-title" href="${ship.name}">${ship.name}</a></h2>
                </div>
              </article>
                `
            })
            if(next == null){
                loadBtn.classList.add('not-visible')
            }
        },
        error: function(error){
            console.log(error)
        }
    })
}

loadBtn.addEventListener('click', ()=> {
    if(next != null ){
        dataRequest()
        pageNum +=1;
    }
})
//*********************//
