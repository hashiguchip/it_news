<!-- src/components/Hello.vue -->

<template>
    <ul id="sites">
        <li v-for="item in list.news_sites">
            <div class="site">
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

    export default Vue.extend({
        props: ['name', 'initialEnthusiasm'],
//        data() {
//        },
        computed: {
            list(): any {
                return this.$store.state.siteList.default;
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
        }
    }
</style>