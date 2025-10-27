import './index.css'
import '../../Services/LogicaApiGit'

export default function buttons({TextInput,setDados}){
    const url=`https://api.github.com/users/${TextInput}/repos`;
    
    let X=null
    const calbck= async()=>{
        X=await fetch(url)
        .then((response)=>{return response.json()})
        .then((data)=>{return data})
        .catch((e)=>{return e})
        
        setDados(X)
    }

    return (
        <button onClick={calbck}>Buscar</button> 
    )
}
