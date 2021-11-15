<template>
    <div class="comment-card">
        <user :user="comment.user" :is-comment-user="true" />
        <div class="comment-section">
            <p>
                {{ comment.content }}
            </p>
            <div class="reaction-buttons">
                <a href="#"><img src="@/assets/images/icons/thumb-up-icon.svg" alt=""> Beğen</a>
            <a href="#"><img src="@/assets/images/icons/thumb-down-icon.svg" alt=""> Beğenme</a>
            </div>
            
        </div>
    </div>
</template>

<script>
import user from "./User";

export default {
    props: {
        data: Object,
    },
    components: {
        user
    },
    data() {
        return {
            comment: this.data
        };
    }
};
</script>

<style lang="scss" scoped>
.comment-card {
    padding: 24px 0;
    border-bottom: 1px solid #e9eef1;

    .comment-section {
        padding: 10px 0 0 35px;

        p {
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.71;
            letter-spacing: normal;
            color: #2f363a;
        }

        a {
            display: flex;
            align-items: center;
            color: #222222;
            font-weight: 500;
            margin-right: 15px;
            
            img {
                margin-right: 10px;
            }

            &:last-child {
                margin-right: 0;
            }
        }

        .reaction-buttons {
            padding-top: 15px;
            display: flex;
            align-items: center;
        }
    }
}
</style>
