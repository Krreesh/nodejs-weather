const weatherform= document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#result-1')
const messageTwo = document.querySelector('#result-2')
//document.getElementByName.innerHTML('resbottom')= 'Hello'

messageOne.textContent = ''
weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    if (location.length=== 0) {
       console.log('Please enter location')
       return messageOne.textContent ='Please enter location'
    }

    fetch('http://localhost:3000/weather?address=' + location).then((response ) => {
            
            response.json().then((data) => {
             if (typeof data.placename === 'undefined') {
                messageOne.textContent = 'Please enter correct location'
             }
            else if (data.error) {
                messageOne.textContent = 'Error finding location ' + data.error                                
            } else {
                messageOne.textContent = 'Place -' + data.placename 
                messageTwo.textContent = 'Temperature: ' + data.temperature + ' observed at ' + data.observationTime
                console.log('Place -' + data.placename + 'Temperature: ' + data.temperature + 'observed at ' + data.observationTime)
    
            }
        })
    })
})
