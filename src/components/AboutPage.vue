<!-- src/components/AboutPage.vue -->

<template>
    <div class="parents">
        <div class="greeting"></div>
        <div>このサイトはITのnewsを集めたサイトです</div>
        <div>うたんら</div>
        <div>かんたｒ</div>
        <div>TODO</div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Vuex from 'vuex';

    export default Vue.extend({
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: 'About',
            // all titles will be injected into this template
            titleTemplate: '%s | IT news よりすぐり'
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