import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL='https://teste-3abd0-default-rtdb.firebaseio.com/'

Vue.use(
    {
        install(Vue){
            //Vue.prototype.$http=axios
            Vue.prototype.$http=axios.create({
                baseURL:'https://teste-3abd0-default-rtdb.firebaseio.com/'
            })

            Vue.prototype.$http.interceptors.request.use(config => {
                console.log(config.method)
                return config
            })
        }

    })