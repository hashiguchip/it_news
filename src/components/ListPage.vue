<!-- src/components/Hello.vue -->

<template>
    <ul id="example-1">
        <li v-for="item in list">
            {{ item.url }}
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