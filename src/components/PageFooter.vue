<!-- src/components/Hello.vue -->

<template>
    <footer class="footer">
        <div class="container">
            <div class="columns">
                <div class="column is-4">
                    IT news よりすぐり
                </div>
            </div>
        </div>
    </footer>
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

    .parents {
        .greeting {
            font-size: 120px;
        }
    }
</style>