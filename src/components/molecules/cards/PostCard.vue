<template>
                
    <div class="post-card" :class="size ? size : ''"
            :style="`background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0.01%, #000000 100%) , url(${require('@/assets/images/' + post.image)})`"
            >
              <div class="post-card-content">
                <router-link :to="post.link">
                  <h2 class="post-title">{{ post.title }}</h2>
                </router-link>
                <div class="post-card-footnote">
                  <span>{{ post.shareTime }}</span>
                  <span v-if="post.commentsCount">
                    · <span>{{ post.commentsCount }} yorum</span></span
                  >
                </div>
              </div>
            </div>
</template>

<script>
export default {
    props: {
        size: String,
        post: Object,
        image: String,
        title: String,
        shareTime: String,
        commentsCount: String
    }
}
</script>

<style lang="scss">
</style>