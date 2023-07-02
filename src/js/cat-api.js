export {fetchBreeds, fetchCatBreed}

const API_KEY = 'live_Ko6wZTeYmlx0ffigih2h1Z9ovtTKpVD4jIxy8RCsg0DzCnOULymC5Yb71xvzx8Tr'
const BASE_URL = 'https://api.thecatapi.com/v1'

function fetchBreeds() {
    return fetch(`${BASE_URL}/breds`, {
    headers: {
        'x-api-key': API_KEY,
    }
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
}

function fetchCatBreed(catId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${catId}`, {
    headers: {
        'x-api-key': API_KEY,
    }
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
}