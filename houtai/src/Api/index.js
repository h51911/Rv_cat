import axios from 'axios'

// let Lao = axios.create({
//     baseURL:'http://localhost:5200'
// })
// export async function get(params,config={}){
//     let data = await Lao.get('',{
//         ...config,
//         params
//     })
//     return data
// }

export async function get(){
    let data = await axios.get('http://localhost:5200/goods/all')
    return data
}
// export async function getone() {
//     let data = await axios.get('http://localhost:5200/goods/lao')
//     return data
// }
export default {
    get,
    // getone
}