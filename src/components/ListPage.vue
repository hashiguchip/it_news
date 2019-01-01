<!-- src/components/Hello.vue -->

<template>
    <ul id="sites">
        <li v-for="item in list">
            <div class="site">
                <font-awesome-icon :icon="favoriteIconOn"
                                   v-if="item.favorite" pull="left"
                                   v-on:click="favorite(false,item.id)"
                                   class="starOn">
                </font-awesome-icon>
                <font-awesome-icon :icon="favoriteIconOff"
                                   v-else pull="left"
                                   v-on:click="favorite(true,item.id)"
                                   class="starOff">
                </font-awesome-icon>
                <a v-bind:href=item.url target="_blank">
                    <div class="subtitle">
                        {{item.name}}
                    </div>
                </a>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue from "vue";
    import Vuex from 'vuex'

    import {faStar} from '@fortawesome/free-solid-svg-icons'
    import {faStar as faUnStar} from '@fortawesome/free-regular-svg-icons'

    export default Vue.extend({
        props: ['name', 'initialEnthusiasm'],
        data() {
            return {
                enthusiasm: this.initialEnthusiasm,
            }
        },
        methods: {
            favorite: function (flg: boolean, id: number) {
                let arg = {
                    id: id,
                    flg: flg
                }
                this.$store.commit('favorite', arg)
            }
        },
        computed: {
            list(): any {
                let test = this.$store.state.count
//                return this.$store.state.siteList.default.news_sites.filter(
//                    function (sites: any) {
//                        //return sites.category.includes()
//                        return true;//all
//                    }
//                )
                return this.$store.state.siteList.default;
            },
            favoriteIconOn() {//if favorite solid
                return faStar
            },
            favoriteIconOff() {//if favorite solid
                return faUnStar
            }
        }
    });
</script>

<style lang="scss">
    //@import "~bulmaswatch/superhero/variables";
    @import '~bulma/bulma';
    //@import "~bulmaswatch/superhero/overrides";

    #sites {
        .site {
            margin-top: 3vh;
            .starOn {
                color: #feec00;
            }
            .starOff {
                color: #77761b;
            }
        }
    }

    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity .15s ease;
    }

    .component-fade-enter,
    .component-fade-leave-to {
        opacity: 0; //mean start from 0
    }
</style>