import './index.css'

export default function inputss ({TextInput,setTextInput}){

    return (
        <input placeholder='ola mundo'
        value={TextInput}
        onChange={(e)=>setTextInput(e.target.value)}
        ></input>
    )
}