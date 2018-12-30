<!-- src/components/Hello.vue -->

<template>
    <ul id="sites">
        <li v-for="item in list">
            <div class="site">
                <a v-bind:href=item.url>
                    <div class="subtitle">
                        {{item.name}}
                    </div>
                </a>
            </div>
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
                enthusiasm: this.initialEnthusiasm,
            }
        },
        computed: {
            list(): any {
                return this.$store.state.siteList.default.filter(
                    function (sites: any) {
                        return sites.category.includes(1)
                    }
                )
            }
        }
    });
</script>

<style lang="scss">
    //@import "~bulmaswatch/superhero/variables";
    @import '~bulma/bulma';
    //@import "~bulmaswatch/superhero/overrides";

    #sites {
        .site {
            margin-top: 3vh;
        }
    }

    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity .15s ease;
    }

    .component-fade-enter, .component-fade-leave-to {
        opacity: 0; //mean start from 0
    }
</style>