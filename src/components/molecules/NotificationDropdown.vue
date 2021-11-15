<template>
    <div class="dropdown-menu notifications" aria-labelledby="notificationsDropdown">
        <span class="dropdown-menu-title">BİLDİRİMLERİN</span>
        <ul>
            <li v-for="(notification, index) in notifications" :key="index">
                <img src="@/assets/images/icons/comment-icon.svg" v-show="notification.type === 'comment' && !darkMode"
                    alt="">
                <img src="@/assets/images/icons/comment-icon-light.svg"
                    v-show="notification.type === 'comment' && darkMode" alt="">
                <img src="@/assets/images/icons/thumb-up-icon.svg" v-show="notification.type === 'like'" alt="">
                <img src="@/assets/images/icons/thumb-down-icon.svg" v-show="notification.type === 'dislike'" alt="">
                <!-- <img :src="
                            require(`@/assets/images/icons/${notification.icon}.svg`)
                          " alt="" /> -->
                <div class="notification-content">
                    <p v-if="notification.type === 'comment'"> <b>@{{ notification.username }}</b> yorumuna yanıt verdi
                    </p>
                    <p v-else-if="notification.type === 'like'"> <b>@{{ notification.username }}</b> yorumunu +1’ledi
                    </p>
                    <p v-else> <b>@{{ notification.username }}</b> yorumunu -1’ledi</p>
                    <span>{{ notification.shareTime }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["notifications", "darkMode"],
    }
</script>

<style lang="scss" scoped>

</style>