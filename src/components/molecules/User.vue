<template>
    <div class="user">
        <user-avatar :image="user.image" />
        <a href="#">
            <span class="user-name" :class="isCommentUser ? 'comment-user-name lg' : ''">{{ user.name }} </span>
        </a>
        <span v-if="user.postShareTime" class="share-time"> · <span>{{ user.postShareTime }}</span>
        </span>

    </div>
</template>

<script>
    import userAvatar from '../atoms/UserAvatar';

    export default {
        props: {
            user: Object,
            isCommentUser: Boolean
        },
        components: {
            userAvatar
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        display: flex;
        align-items: center;

        .user-name {
            margin-left: 10px;
        }

        .comment-user-name {
            font-weight: 600;
            color: #222;
            font-style: 16px;
        }

        .share-time {
            margin-top: 5px;
            margin-left: 5px;
        }
    }
</style>