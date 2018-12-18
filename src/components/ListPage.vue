<!-- src/components/Hello.vue -->

<template>
    <ul id="sites">
        <h2 class="title">おすすめ it news site</h2>
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
        data() {
            return {
                list: this.$store.state.list,
            }
        },
    });
</script>

<style lang="scss">
    @import '~bulma/bulma';

    #sites {
        .site {
            margin-top: 3vh;
        }
    }
</style>