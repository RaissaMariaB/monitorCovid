import React, {useEffect, useState, Fragment} from 'react';
import MonitorItem from "./components/MonitorItem"
import { getCountrie, getGlobal, getBrazil } from "./service/countries";
import  "./home.css"


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
      

    useEffect(() =>{
        getDataGlobal(),  
        getDataBrazil()
        setInterval(() => {
            getDataGlobal(), 
            getDataBrazil()
        } , 2000)
    } , [] )
    


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
        <h1 className="title">
        Monitoramento Covid-19 
        </h1> 
    </header>
    <body className = 'container'> 
    <div className = 'container__global'>
            <h2 className="title">
                Casos Globais
            </h2>
            <div className="global__item">
            <MonitorItem label = "Casos Totais" cases = {casos}/>        
            <MonitorItem label = "Mortes" cases = {mortes}/>        
            <MonitorItem label = "Recuperados" cases = {recuperados}/>   
            </div>       
            
        </div>    
        <div className= "container__brazil">
            <h2 className="title">
                Casos no Brasil
            </h2>
            <div className="brazil__item">
                <div className="brazil__item-list">
                <MonitorItem label = "Casos Totais" cases = {casos}/>        
                <MonitorItem label = "Casos hoje" cases = {casosHoje}/>        
                <MonitorItem label = "Mortes" cases = {mortes}/>  
                </div>
                <div className="brazil__item-list">
                <MonitorItem label = "Mortes Hoje" cases = {mortesHoje}/> 
                <MonitorItem label = "Casos Críticos" cases = {criticos}/> 
                <MonitorItem label = "Recuperados" cases = {recuperados}/> 
                </div>            
           
            </div>
            
   </div>
        

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