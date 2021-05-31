import axios from 'axios'

const urlBase = 'https://todos-go.herokuapp.com/api/todos'

const read = () => {

    const promise = axios(urlBase)

    return promise

}

export default read