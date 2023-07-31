





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const dataShow = document.querySelector('#output')
const errorMessage = document.querySelector('#error')

weatherForm.addEventListener('submit',(event) =>{
    event.preventDefault()

    const location = search.value

    // console.log(location)
    if(!location){
        return alert("Please provide an address")
    }


    fetch('https://api.weatherapi.com/v1/current.json?key=df26414aaef446bb970104043232407&q=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                return errorMessage.textContent = `Error is: ${data.error.message}`
            }


            dataShow.textContent = `The weather in ${location} is: ${data.current.condition.text}`

    })
})
})