import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var VueResource = require('vue-resource');

Vue.use(VueResource);

axios.defaults.headers.common['Authorization'] = 'Token secret-token-1';

Vue.component('name-list', {

    props: ['list'],

    template: `
                    <div class="content">
                        <label class="label"> Names: </label>
                        <ul>
                            <task v-for="name in list" v-text="name"></task>
                        </ul>
                    </div>
                `

});

Vue.component('task', {

    template: `
                    <li><slot></slot></li>
                `

});

new Vue({
    el: '#app',
    render: h => h(App)
})
