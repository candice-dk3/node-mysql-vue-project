import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {useCookies} from 'vue-cookies'
import router from '@/router';

axios.defaults.withCredentials = true //
axios.defaults.headers = $cookies.get('token')


export default createStore({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    addUser({commit},info){
      let data = axios.post('http://localhost:5050/users',info)
      if(data){
        toast("New User Has Been Added", )
      }
    },
    async loginUser({commit}, info){
      let {data}=  axios.post('http://localhost:5050/users/login',info)
      console.log(data);
      $cookies.set('token',data.token)
      if (data.message){
        toast("Logged In Successfully", {
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/'),
      location.reload()
    },
    async getFruits({commit}){
      let data = await axios.get('http://localhost:5050/fruit',)
      console.log('setFruits',data);
    },
    async addToCart(){
      let {data} =  await axios.post('http://localhost:5050/fruit')
      console.log(data);
      
    }
  },
  modules: {
  }
})
