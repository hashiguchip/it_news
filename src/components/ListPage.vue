<!-- src/components/Hello.vue -->

<template>
    <ul id="sites">
        <li v-for="item in list.news_sites">
            <div class="site">
                <font-awesome-icon :icon="favoriteIcon"pull="left" class="star"></font-awesome-icon>
                <a v-bind:href=item.url>
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
//        data() {
//        },
        computed: {
            list(): any {
//                return this.$store.state.siteList.default.news_sites.filter(
//                    function (sites: any) {
//                        //return sites.category.includes()
//                        return true;//all
//                    }
//                )
                return this.$store.state.siteList.default;
            },
            favoriteIcon() {//if favorite solid
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
            .star{
                color: #77761b;
            }
        }
    }

    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity .15s ease;
    }

    .component-fade-enter, .component-fade-leave-to {
        opacity: 0; //mean start from 0
    }
</style>