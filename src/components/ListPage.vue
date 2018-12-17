<!-- src/components/Hello.vue -->

<template>
    <ul id="example-1">
        <h2>おすすめ it news site</h2>
        <li v-for="item in list.news_sites">
            <a v-bind:href=item.url>
                <div>
                    {{ item.name }}
                </div>
            </a>
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
    .parents {
        .greeting {
            font-size: 120px;
        }
    }
</style>