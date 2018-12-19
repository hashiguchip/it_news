<!-- src/components/Hello.vue -->

<template>
    <div class="tabs is-toggle is-fullwidth">
        <ul>
            <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                    <span>一覧</span>
                </a>
            </li>
            <li>
                <button v-on:click="changeTab">
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>このサイトについて</span>
                </button>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>お気に入り</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                    <span>技術</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                    <span>ガジェット</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                    <span>ブログ・ネタ</span>
                </a>
            </li>
        </ul>
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
            changeTab: function () {
                if (this.currentComponentsData == 'list') {
                    this.currentComponentsData = 'about';
                } else {
                    this.currentComponentsData = 'list';
                }
                return true;
            }
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
    /*.parents {*/
    /*.greeting {*/
    /*font-size: 120px;*/
    /*}*/
    /*}*/
</style>