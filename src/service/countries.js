import axios from 'axios'

const coronaApi = axios.create({
    baseURL:'https://coronavirus-19-api.herokuapp.com'
})

function getCountrie(countrieName){
    const urlCountries = `/countries/${countrieName}`
    return coronaApi.get(urlCountries)
}

function getBrazil(){
    const urlBrazil = '/countries/brazil'
    return coronaApi.get(urlBrazil)
}

function getGlobal(){
    const urlGlobal =  '/all'
    return coronaApi.get(urlGlobal)
}


export  {getCountrie, getGlobal, getBrazil}