<template>
    <div class="dropdown-menu user" :class="menuPosition ? 'dropdown-menu-left' : 'dropdown-menu-right'" aria-labelledby="userDropdown">
        <div class="user-welcome-message-section">
            <span class="dropdown-menu-title">HOŞGELDİN</span>
            <a href="#" class="user-name">Mehmet Ali Öztekin</a>
        </div>
        <ul>
            <li v-for="(option, index) in options" :key="index">
                <!-- <img
                          :src="
                            require(`@/assets/images/icons/${option.icon}.svg`)
                          "
                          alt=""
                        /> -->
                <div class="flex _vc">
                    <svg class="item-icon" v-html="option.svg"></svg>
                    <div class="notification-content">
                        <p>{{ option.text }}</p>
                    </div>
                </div>
                <div v-if="option.itemLabel === 'dark-mode'">
                    <div class="mode-toggle" @click="modeToggle" :class="darkDark">
                        <div class="toggle">
                            <div id="dark-mode" type="checkbox"></div>
                        </div>
                    </div>
                </div>
                <div v-else-if="option.itemLabel === 'counter'">
                    <span> {{ option.itemLabelText }} </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            options: Array,
            menuPosition: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>