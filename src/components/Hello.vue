<!-- src/components/Hello.vue -->

<template>
    <div class="parents">
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <div>vuex counter {{ count }}</div>
    </div>
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