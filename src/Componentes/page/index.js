import './index.css'
import octocatlogo from'../imagens/pngfind.com-github-logo-png-405156.png'
import MyInputTex from '../MyInputTex'
import MyButton from '../MyButton'
import { useEffect, useState } from 'react'
import { getValue } from '@testing-library/user-event/dist/utils'


export default function Pagina(){
    const [TextInput,setTextInput]=useState("andrel629")
    const [Dados,setDados]=useState({})
    const [favoritos,seFavoritos]=useState([])
    

    useEffect(
    ()=>{
        const X= Object.values(Dados).map((x)=>x.name)
       
        console.log(`Sua lista de favoritos ${favoritos}`)
        console.log(X)
    },[Dados,favoritos]
    )
 return (
    <div className="Bory">
        <div className="Buscador">
            <img src={octocatlogo} alt='Logo' className='octocat' /> 
            <div className='inputes'>
            <MyInputTex TextInput={TextInput} setTextInput={setTextInput} />
            <MyButton TextInput={TextInput} setDados={setDados} />
            </div>
            </div>
        <div className="Lista">
            {Object.values(Dados).map(element => {
                
                return (
                    <button onClick={()=>{
                    
                        seFavoritos([...favoritos,element.name])
                    }} >{element.name}</button>
                )
            })}
        </div>

    </div>
 )
}