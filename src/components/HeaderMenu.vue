<!-- src/components/Hello.vue -->

<template>
    <div class="tabs is-toggle is-fullwidth">
        <ul>
            <li>
                <a v-on:click="changeTab('list')">
                    <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                    <span>一覧</span>
                </a>
            </li>
            <li>
                <a v-on:click="changeTab('about')">
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>このサイトについて</span>
                </a>
            </li>
            <li>
                <a v-on:click="changeTab('favorite')">
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>お気に入り</span>
                </a>
            </li>
            <li>
                <a v-on:click="changeTab('programing')">
                    <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                    <span>技術</span>
                </a>
            </li>
            <li>
                <a v-on:click="changeTab('gadget')">
                    <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                    <span>ガジェット</span>
                </a>
            </li>
            <li>
                <a v-on:click="changeTab('blog')">
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
            changeTab: function (page: string) {
                this.$store.commit('changePage', {
                    "currentPage": page
                })
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