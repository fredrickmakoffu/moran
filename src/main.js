import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


// Axios defaults
axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.baseURL = 'https://api.kipekee.co.ke';
axios.defaults.baseURL = 'http://localhost:8000';

  
createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
