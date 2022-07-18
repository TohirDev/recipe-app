const API_KEY = '9beea8bdee1e48f5809bf2e5cc412f09'

const API_URL = `https://api.spoonacular.com/recipes/random?&apiKey=${API_KEY}`

fetch(API_URL)
    .then(foods => {
            document.body.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <img src="${foods.image}" alt="img" />
                    <a class="more" target="_blank" href="${foods.sourceUrl}">More</a>
                </div>
                <div class="card-body">
                    <div class="top">
                    <p>${foods.title}</p>
                    <p>Price: <span>${foods.pricePerServing}</span>$</p>
                    </div>
                    <div class="summary"><h2>Summary</h2>${foods.summary}</div>
                </div>
            </div>
            `
        
        console.log(foods.recipes)
    })
