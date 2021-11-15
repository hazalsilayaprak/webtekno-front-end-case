<template>
  <div class="home">
    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-gap-sm" v-for="(post, i) in posts.slice(0,2)" :key="'post-' + i">
            <post-card 
              size="lg"
              :post="post"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-gap-sm" v-for="(post, i) in posts.slice(2,5)" :key="'post-' + i">
            <post-card 
              size="sm"
              :post="post"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-gap-sm">
            <h3 class="colored section-title">YENİ İÇERİKLER</h3>
          </div>
        </div>
        <div class="row video-section-content">
          <div class="col-lg-6 col-gap-sm">
            <span class="overline">MOBİL UYGULAMA</span>
            <a href="#">
              <h2 class="content-title dark">
                Spotify, Spor Yaparken İstediğiniz Listeyi Yapmanızı Sağlayan Yeni
                Özelliğini Duyurdu
              </h2>
            </a>
            <div class="title-border"></div>
            <user :user="user" />
          </div>
          <div class="col-lg-6 col-gap-sm">
            <div class="video-content-background">
              <div class="video-play-button">
                <img src="@/assets/images/icons/play-icon.svg" alt="" />
              </div>
              <div class="add-bookmark-button">
                <img src="@/assets/images/icons/add-bookmark-icon.svg" alt="" />
              </div>
              <div class="video-duration-box"><span class="w">04:36</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from "../molecules/User";
import postCard from "../molecules/cards/PostCard";

export default {
  name: "home",
  components: {
    user,
    postCard,
  },
  data() {
    return {
      posts: [
        {
          link:"detail",
          image: "image-1.png",
          title:
            "Netflix, Hayranlarını Meraktan Çatlatacak Stranger Things'in 4. Sezonundan Yeni Fragman Yayınladı",
          shareTime: "2s önce",
          commentsCount: 3,
        },
        {
          link:"detail",
          image: "image-2.png",
          title: "Spotify, Yeni Üst Düzey Abonelik Sistemi HiFi’yı Duyurdu",
          shareTime: "2s önce",
        },
        {
          link:"detail",
          image: "image-3.png",
          title: "Volkswagen T-Roc Türkiye'de Satışa Sunuldu: İşte Fiyatı",
          shareTime: "2s önce",
          commentsCount: 5,
        },
        {
          link:"detail",
          image: "image-4.png",
          title:
            "Elon Musk, Starlink Projesinin Dudak Uçuklatan Maliyetini Açıkladı",
          shareTime: "2s önce",
          commentsCount: 17,
        },
        {
          link:"detail",
          image: "image-5.png",
          title:
            "iPhone 11, Yeniden Girdiği DxOMark Testinden Daha Yüksek Puan Aldı",
          shareTime: "2s önce",
        },
      ],
      user: {
        image: "editor-img",
        name: "Nagehan Çavuş",
        postShareTime: "12 dakika önce",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.video-section-content {
  .content-title {
    max-width: 90%;
  }
}
.section-title {
  margin: 20px 0 30px 0;
}
.video-content-background {
  background: url("../../assets/images/video-post-image.png");
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  height: 321px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
