import Vue from "vue";
import Vuex from 'vuex'
import ListPageComponent from "./components/ListPage.vue";
import AboutPageComponent from "./components/AboutPage.vue";
import FavoritePageComponent from "./components/FavoritePage.vue";
import PageHeaderComponent from "./components/PageHeader.vue";
import PageFooterComponent from "./components/PageFooter.vue";
import HeaderMenuComponent from "./components/HeaderMenu.vue";
import HeaderHeroComponent from "./components/HeaderHero.vue";
import * as siteList from './backendAPI/data.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        page: 'top',
        siteList: siteList,
        currentPage: 'list',
    },
    mutations: {
        //changePage: state => state.currentPage = 'about',
        increment: state => state.count++,
        decrement: state => state.count--,
        changePage(state, obj) {
            // 状態を変更する
            state.currentPage = obj.currentPage
        }
    }
})


let v = new Vue({
    el: "#app",
    store,//vuex
    template: `
    <div>
        <page-header-component :name="name" :initialEnthusiasm="5" />
        <!--<button  v-on:click="changeTab">コンポーネント切り替えbutton</button>-->
        <!--Name: <input v-model="name" type="text">-->
        <!--<hello-component :name="name" :initialEnthusiasm="5" />-->
        <!--<list-page-component :name="name" :initialEnthusiasm="5" />-->
        <!--<about-page-component :name="name" :initialEnthusiasm="5" />-->
        <header-menu-component :name="name" :initialEnthusiasm="5" />
        <header-hero-component :name="name" :initialEnthusiasm="5" />
        <section class="hero is-medium intro">
            <div class="hero-body">
                <div class="container">
                    <div class="intro-columns">
                        <div class="intro-column is-content">
                            <transition name="component-fade" mode="out-in">
                                <keep-alive>
                                  <component v-bind:is="currentComponent"></component>
                                </keep-alive>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <page-footer-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: {
        name: "World",
        currentComponentsData: 'list'
    },
    // methods: {
    // },
    components: {
        PageHeaderComponent,
        PageFooterComponent,
        ListPageComponent,
        AboutPageComponent,
        FavoritePageComponent,
        HeaderMenuComponent,
        HeaderHeroComponent
    },
    computed: {
        currentComponent: function () {
            return this.$store.state.currentPage + '-page-component';
        }
    }
});