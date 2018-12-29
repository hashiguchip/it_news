import Vue from "vue";
import Vuex from 'vuex'
import ListPageComponent from "./components/ListPage.vue";
import ItNewsPageComponent from "./components/ItNewsPage.vue";
import AboutPageComponent from "./components/AboutPage.vue";
import FavoritePageComponent from "./components/FavoritePage.vue";
import PageHeaderComponent from "./components/PageHeader.vue";
import PageFooterComponent from "./components/PageFooter.vue";
import HeaderMenuComponent from "./components/HeaderMenu.vue";
import HeaderHeroComponent from "./components/HeaderHero.vue";
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import * as siteList from './backendAPI/data.json';

Vue.use(VueRouter)
Vue.use(VueMeta, {
    keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
    attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
    ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
    tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})
Vue.use(Vuex);

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
const routes = [
    {path: '/', component: ListPageComponent},
    {path: '/all', component: ListPageComponent},
    {path: '/itnews', component: ItNewsPageComponent},
    {path: '/about', component: AboutPageComponent},
    {path: '/itnews', component: ItNewsPageComponent},
    {path: '/itnews', component: ItNewsPageComponent},
]

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう

const router = new VueRouter({
    mode: (false) ? 'history' : 'hash',//if 本番 history
    routes // `routes: routes` の短縮表記
})


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

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
// const app = new Vue({
//     router
// }).$mount('#app')

let v = new Vue({
    el: "#app",
    router,//vue-router
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
                                <router-view></router-view>
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
        ItNewsPageComponent,
        AboutPageComponent,
        FavoritePageComponent,
        HeaderMenuComponent,
        HeaderHeroComponent
    },
    computed: {
        currentComponent: function () {
            return this.$store.state.currentPage + '-page-component';
        }
    },
    metaInfo: {
        title: 'IT news よりすぐり',
        titleTemplate: '%s | IT業界人はここに掲載されているサイトを抑えておけば間違いない!...そんなサイトです',
        htmlAttrs: {
            lang: 'ja',
        },
        meta: [
            //{charset: 'utf-8'},//読み込み時には文utf-8と書いていないためか字化けするので一旦html側に書いた。
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'description', content: 'IT業界人はここに掲載されているサイトを抑えておけば間違いない!...そんなサイトです'}
        ]
    }
});