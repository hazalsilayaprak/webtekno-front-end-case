<template>
    <img :src="require(`@/assets/images/${image}.jpeg`)" class="user-image" :class="image == 'user-avatar' ? 'user-logo' : ''">
</template>

<script>
export default {
    props: {
        image: String
    }
}
</script>

<style lang="scss" scoped>
.user-image {
    width: 25px;
    height: 25px;
    object-fit: contain;
    filter: grayscale(100%);
    border-radius: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

.user-logo {
  object-fit: cover;
  object-position: center;
  transition: all .1s;
  filter: none;
}

@media screen and (max-width: 576px) {
    .user-logo {
        width: 40px;
        height: 40px;
    }
}
</style>