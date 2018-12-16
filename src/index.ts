import Vue from "vue";
import Vuex from 'vuex'
import HelloComponent from "./components/Hello.vue";
import ListPageComponent from "./components/ListPage.vue";
//import AboutPageComponent from "./components/AboutPage.vue";
import siteList from './backendAPI/data.json';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        count: 0,
        page: 'top',
        list: siteList,
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})


let v = new Vue({
    el: "#app",
    store,//vuex
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: {name: "World"},
    components: {
        HelloComponent,
        ListPageComponent,
       // AboutPageComponent
    }
});