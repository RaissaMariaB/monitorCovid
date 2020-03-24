import React, {useEffect, useState, Fragment} from 'react';
import MonitorItem from "./MonitorItem"
import { getCountrie, getGlobal, getBrazil } from "../service/countries";


// useEffect(() => getDataCountrie(), [])





// const getDataCountrie = async () =>{ 
//   const response = await axios.get(getCountrie)  
//       setCasos(response.data.cases)
//       setCasosHoje(response.data.todayCases)
//       setMortes(response.data.deaths)
//       setMortesHoje(response.data.todayDeaths)
//       setCriticos(response.data.critical)
//       setRecuperados(response.data.recovered)

//       console.log('response', response.data)
// }




const Home = props =>{

    const getDataBrazil = async () =>{ 
        const response = await getBrazil()
        setCasos(response.data.cases)
        setCasosHoje(response.data.todayCases)
        setMortes(response.data.deaths)
        setMortesHoje(response.data.todayDeaths)
        setCriticos(response.data.critical)
        setRecuperados(response.data.recovered)
            console.log('response', response.data)
      }
      
      
      const getDataGlobal = async () =>{ 
        const response = await getGlobal()
            setCasos(response.data.cases)
            setMortes(response.data.deaths)
            setRecuperados(response.data.recovered)
            console.log('response', response.data)
      }
      

    useEffect(() => getDataGlobal(), [])
    useEffect(() => getDataBrazil(), [])


const [pais, setPais] = useState()
const [casos, setCasos] = useState()
const [casosHoje, setCasosHoje] = useState()
const [mortes, setMortes] = useState()
const [mortesHoje, setMortesHoje] = useState()
const [criticos, setCriticos] = useState()
const [recuperados, setRecuperados] = useState()

    return(

    
    <Fragment>
    <header className="container">
        <h1>
        Monitor Covid-19 
        </h1> 
    </header>
    <body className = 'container'> 
        <div className = 'container__global'>
            <MonitorItem label = "Casos Totais" cases = {casos}/>        
            <MonitorItem label = "Casos" cases = {mortes}/>        
            <MonitorItem label = "Casos" cases = {recuperados}/>        
            
        </div>    
        <div className= "container__brazil">
            <MonitorItem label = "Casos Totais" cases = {casos}/>        
            <MonitorItem label = "Casos hoje" cases = {casosHoje}/>        
            <MonitorItem label = "Mortes" cases = {mortes}/>        
            <MonitorItem label = "Mortes Hoje" cases = {mortesHoje}/> 
            <MonitorItem label = "Casos Críticos" cases = {criticos}/> 
            <MonitorItem label = "Recuperados" cases = {recuperados}/> 

        </div >

        {/* <div className = "container__countries">
            <input></input>
            <button></button>
            <MonitorItem label = "Casos Totais" cases = {casos}/>        
            <MonitorItem label = "Casos" cases = {casos}/>        
            <MonitorItem label = "Casos" cases = {casos}/>        
            <MonitorItem label = "Casos" cases = {casos}/> 
        </div> */}

    </body>
    </Fragment>
    )   
} 

export default Home