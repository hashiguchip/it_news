import Vue from "vue";
import Vuex from 'vuex'
import HelloComponent from "./components/Hello.vue";
import ListPageComponent from "./components/ListPage.vue";
import AboutPageComponent from "./components/AboutPage.vue";
import * as siteList from './backendAPI/data.json';

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
        <button  v-on:click="changeTab">コンポーネント切り替えbutton</button>
        <!--Name: <input v-model="name" type="text">-->
        <!--<hello-component :name="name" :initialEnthusiasm="5" />-->
        <!--<list-page-component :name="name" :initialEnthusiasm="5" />-->
        <!--<about-page-component :name="name" :initialEnthusiasm="5" />-->
        <keep-alive>
          <component v-bind:is="currentComponent"></component>
        </keep-alive>
    </div>
    `,
    data: {
        name: "World",
        currentComponentsData: 'list'
    },
    methods: {
        changeTab: function () {
            if (this.currentComponentsData == 'list') {
                this.currentComponentsData = 'about';
            } else {
                this.currentComponentsData = 'list';
            }
            return true;
        }
    },
    components: {
        //HelloComponent,
        ListPageComponent,
        AboutPageComponent
    },
    computed: {
        currentComponent: function () {
            if (this.currentComponentsData == 'list') {
                return 'list-page-component';
            } else {
                return 'about-page-component';
            }
        }
    }
});