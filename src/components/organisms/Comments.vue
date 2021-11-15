<template>
    <div class="comments">
        <div class="title-wrapper">
            <h3>Yorumlar</h3>
            <a href="" class="write-comment-button" @click.prevent="showWriteComment = !showWriteComment">
                <span>Yorum yap</span>
            </a>
        </div>
        <form class="write-comment-section" v-if="showWriteComment">
            <custom-input labelText="Adınız Soyadınız" type="text" placeholderText="ör. Ahmet Yılmaz"
                inputId="text-input" minWidth="100%" borderPosition="all" />

            <custom-input labelText="E-posta adresiniz" type="email" placeholderText="ör. ahmet@mail.com"
                inputId="email-input" minWidth="100%" borderPosition="all" />
            <custom-input labelText="Yorumunuz" type="textarea" placeholderText="ör. ahmet@mail.com" inputId="textarea"
                minWidth="100%" :isTextarea="true" borderPosition="all" />
            <div class="flex _vc _fe">
                <a href="#" class="write-comment-btn">
                    Yorumu gönder
                </a>

            </div>
        </form>
        <div class="" v-for="(comment, index) in comments" :key="index">
            <comment :data="comment" />
        </div>
    </div>
</template>

<script>
    import comment from "../molecules/Comment";
    import CustomInput from '../atoms/CustomInput'
    export default {
        components: {
            comment,
            CustomInput
        },
        data() {
            return {
                comments: [{
                        content: `Donec hendrerit nibh ultrices lorem placerat, quis vehicula magna tincidunt. Morbi a mollis magna. Proin auctor neque eu libero iaculis efficitur. Vestibulum ut tortor egestas, pharetra mauris at, vulputate metus. Nullam non vehicula metus, ac congue nisl.`,
                        user: {
                            image: "editor-img",
                            name: "Nagehan Çavuş",
                        },
                    },
                    {
                        content: `Phasellus lectus libero, pulvinar id vulputate id, vehicula quis tellus.`,
                        user: {
                            image: "editor-img",
                            name: "Nagehan Çavuş",
                        },
                    },
                    {
                        content: `Praesent auctor a felis vitae ornare. Nam malesuada ornare orci, ac auctor dolor pretium.`,
                        user: {
                            image: "editor-img",
                            name: "Nagehan Çavuş",
                        },
                    }
                ],
                showWriteComment: false
            };
        }
    };
</script>

<style lang="scss" scoped>
    .comments {
        width: 100%;
        padding: 32px 0;

        .title-wrapper {
            display: flex;
            // align-items: center;
            justify-content: space-between;
        }

        .write-comment-section {
            padding-top: 20px;

            .write-comment-btn {
                padding: 10px 15px;
                text-align: center;
                border-radius: 5px;
                background: #FFB400;
                color: #fff;
                font-size: 14px;
            }
        }
    }
</style>