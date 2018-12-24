<!-- src/components/Hello.vue -->

<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <transition name="fade" mode="in-out">
                        <p v-if="show">{{ currentPage }}</p>{{animation}}
                    </transition>
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
                show: true,
                nowPage: ''
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            },
        },
        computed: {
            currentPage(): string {
                if (this.nowPage !== this.$store.state.currentPage) {
                    this.show = false
                }
                this.nowPage = this.$store.state.currentPage;
                return this.$store.state.currentPage;
            },
            //todo : animation Library とか使って書き換える
            animation(): string {
                if (!this.show) {
                    let _this = this;
                    setTimeout(function () {
                        _this.show = true
                    }, 300, _this);
                }
                return '';
            }
        }
    });
</script>

<style lang="scss">

    .hero.is-primary {
        background-color: #008fcd;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

</style>