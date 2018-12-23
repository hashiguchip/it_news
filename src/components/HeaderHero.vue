<!-- src/components/Hello.vue -->

<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{ currentPage }}
                </h1>
                <h2 class="subtitle">

                </h2>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import Vuex from 'vuex'

    export default Vue.extend({
        props: ['name', 'initialEnthusiasm'],
        data() {
            return {
                enthusiasm: this.initialEnthusiasm,
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
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            },
        },
        computed: {
            currentPage(): string {
                return this.$store.state.currentPage
            }
        }
    });
</script>

<style lang="scss">
    /*.parents {*/
    /*.greeting {*/
    /*font-size: 120px;*/
    /*}*/
    /*}*/
</style>