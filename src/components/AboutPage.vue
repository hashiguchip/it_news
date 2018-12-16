<!-- src/components/AboutPage.vue -->

<template>
    <div class="parents">
        <div class="greeting"></div>
        <h2>このサイトは...</h2>
        <div>このサイトはITのnewsを集めたサイトです</div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Vuex from 'vuex'
</script>

<style lang="scss">
    .parents {
        .greeting {
            font-size: 120px;
        }
    }
</style>