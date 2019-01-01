<!-- src/components/AboutPage.vue -->

<template>
    <ul id="sites">
        <li v-for="item in list">
            <div class="site">
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
    import Vuex from 'vuex';

    export default Vue.extend({
        props: ['name', 'initialEnthusiasm'],
//        data() {
//        },
        computed: {
            list(): any {
                return this.$store.state.siteList.default.filter(
                    function (sites: any) {
                        return sites.favorite
                    }
                )
            }
        }
    });

</script>