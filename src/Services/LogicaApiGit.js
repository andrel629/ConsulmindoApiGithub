


export default async function ConsulmindoApiGit(username){
    
    const url=`https://api.github.com/users/${username}/repos`;
    let resp=null
  resp = fetch(url)
    .then((e)=>{return e.json()})
    .catch((e)=>{console.log(e)})
return resp
}