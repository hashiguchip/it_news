import Vue from "vue";
import Vuex from 'vuex'
import HelloComponent from "./components/Hello.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
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
        HelloComponent
    }
});