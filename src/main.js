import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import _ from 'lodash'

import NaviComponent from './components/Navigation.vue'
import CommonManagerComponent from './components/CommonManager.vue'
import AdminIndexComponent from './components/AdminIndex.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueResource);

Vue.http.options.root = '/root';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

const Manager = {template: '<div>I`m Manager</div>'};

const routes = [
    {path: '/manager', component: Manager},
    {path: '/common-manager', component: CommonManagerComponent},
    {path: '/admin', component: AdminIndexComponent}
];

const router = new VueRouter({
    routes,
    history: true,
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        'navigation-component': NaviComponent,
        'common-manager': CommonManagerComponent,
        'admin-index-component': AdminIndexComponent
    },
    data: {

    },

    methods: {

    }
});