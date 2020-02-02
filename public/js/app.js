
console.log('Client side javascript file is loaded!')

const searchBar = document.querySelector('#search-bar')

const searchButton = document.querySelector('#btn-search')

const info1 = document.querySelector('#info-1')

const info2 = document.querySelector('#info-2')

const errorMessage = document.querySelector('#error-message')

info1.innerHTML = ''
info2.innerHTML = ''
errorMessage.innerHTML = ''

function SearchWeather(){
    if(info1.innerHTML !== 'Loading...'){
        event.preventDefault()
    
        const location = searchBar.value

        info1.innerHTML = 'Loading...'
        info2.innerHTML = ''
        errorMessage.innerHTML = ''
        
        fetch('/weather?address=' + location).then((response) => {
        
        response.json().then((data) => {
            info1.innerHTML = 'Forecast: ' + data.forecast.summary
            info2.innerHTML = 'Location: ' + data.location
            errorMessage.innerHTML = ''
            console.log(data)
        }).catch((error) => {
            console.log(error)
            info1.innerHTML = ''
            info2.innerHTML = ''
            errorMessage.innerHTML = error
        })
    })
    }
}


// weatherForm.addEventListener('submit', (event) => {
//     if(info1.innerHTML !== 'Loading...'){
//         event.preventDefault()
    
//         const location = searchBar.value

//         info1.innerHTML = 'Loading...'
        
//         fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        
//         response.json().then((data) => {
//             info1.innerHTML = 'Forecast: ' + data.forecast.summary
//             info2.innerHTML = 'Location: ' + data.location
//             errorMessage.innerHTML = ''
//             console.log(data)
//         }).catch((error) => {
//             console.log(error)
//             info1.innerHTML = ''
//             info2.innerHTML = ''
//             errorMessage.innerHTML = error
//         })
//     })
//     }
// })

