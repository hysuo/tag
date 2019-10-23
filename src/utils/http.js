// export default{
//     get({url}){
//         return axios({
//             url
//         }).then((result) => {
//             return result.data
//         })
//     }
// }
export default {
    get: ({url}) => {
      return fetch(url)
        .then(response => response.json())
        .then(result => {
          return result
        })
    }
  }
