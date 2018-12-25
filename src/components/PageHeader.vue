<!-- src/components/Hello.vue -->

<template>
    <nav id="navbar" class="navbar has-shadow is-spaced">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <!--todo: remove !!!/it_news/!!!-->
                    <img id="logo" :src="'/it_news/'+image"/>
                    <h1 class="title">IT news よりすぐり</h1>
                </a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import Vue from "vue";
    import Vuex from 'vuex'
    import image from "./logo.png"

    export default Vue.extend({
        props: ['name', 'initialEnthusiasm'],
        data() {
            return {
                enthusiasm: this.initialEnthusiasm,
                image: image
            }
        },
        methods: {
//            increment() {
//                this.enthusiasm++;
//            },
//            decrement() {
//                if (this.enthusiasm > 1) {
//                    this.enthusiasm--;
//                }
//            },
            increment() {
                this.$store.commit('changePage', "about")
            },
            decrement() {
                this.$store.commit('decrement')
            },
        },
        computed: {
            exclamationMarks(): string {
                return Array(this.enthusiasm + 1).join('!');
            },
            count(): string {
                return this.$store.state.count
            }
        }
    });
</script>

<style lang="scss">
    #logo {
        max-height: 2.7rem;
        margin-right: 0.5rem;
    }
</style>