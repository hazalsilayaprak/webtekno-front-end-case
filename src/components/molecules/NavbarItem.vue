<template>
<router-link class="" :to="navbarItem.link" exact>
    <div class="navbar-item" >
            <p class="item-text">
                {{ navbarItem.text }}
            </p>
        
    </div>
</router-link>
</template>

<script>
    export default {
        props: {
            navbarItem: Object,
        },
        methods: {
            clickEvent(tab) {
                this.$emit('changeTab', tab)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar-item {
        cursor: pointer;
        padding: 25px 0 22px 0;
        border-bottom: 3px solid transparent;
        transition: all .3s;

        &:hover {
            border-bottom: 3px solid $primary-color;
        }
    }

@media only screen and (min-width: 0px) and (max-width: 924px) {
    .navbar-item {
            text-decoration: none;
            cursor: pointer;
            padding: 10px 0 !important;
        }
}
        


</style>