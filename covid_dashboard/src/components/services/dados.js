import { api } from './config'

export default{

    listar: (N) => {
        let key = ''
        return api.get('?format=json&page_size='+N, {headers: {
            Authorization: `token ${key}`
        }}
        )
    }
}