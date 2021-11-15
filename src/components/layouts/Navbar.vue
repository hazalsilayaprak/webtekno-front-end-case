<template>
  <div>
    <div class="ghost-navbar" v-show="fixed"></div>
    <div id="navbar" :class="fixed || isMobile ? 'fixed' : ''">
      <div class="container">
        <div class="navbar-wrapper" v-if="!isMobile">
          <div class="flex _vc w-100">
            <router-link to="/">
              <img class="logo" src="../../assets/images/logo.svg" alt="" />
            </router-link>

            <ul v-show="!showSearchInput" class="navbar-item-list-section flex _vc">
              <li v-for="(navbarItem, index) in navbarItems" :key="index" class="list-item">
                <navbar-item :navbar-item="navbarItem"  />
              </li>
              <li class="flex _vc">
                <div class="dropdown">
                  <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moreOptionsDropdown"
                    class="flex _vc">
                    <p class="item-text">Daha fazla</p>
                    <img src="@/assets/images/icons/arrow-down-icon.svg" v-show="!darkMode" alt="" />
                    <img src="@/assets/images/icons/arrow-down-icon-light.svg" v-show="darkMode" alt="" />
                  </a>
                  <div class="dropdown-menu more" aria-labelledby="moreOptionsDropdown">
                    <ul>
                      <li>Liste</li>
                      <li>İnceleme</li>
                      <li>Nasıl yapılır?</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <!-- :style="`opacity: ${showSearchInput ? '1' : '0' }`" -->
            <div v-show="showSearchInput" style="width: 70%;">
              <form class="w-100" action="#">
                <div class="input-wrapper">
                  <img src="@/assets/images/icons/search-icon-light-colored.svg" alt="" />
                  <input type="text" placeholder="Webtekno'da arama yapın..." />
                </div>
              </form>
            </div>
          </div>
          <div>
            <ul class="navbar-icon-list-section flex _vc">
              <li class="list-item icon-list-item" @click="showSearchInput = !showSearchInput">
                <img src="@/assets/images/icons/search-icon.svg" alt="" v-if="!showSearchInput && !darkMode" />
                <img src="@/assets/images/icons/search-icon-light.svg" v-else-if="!showSearchInput && darkMode" alt="">
                <img src="@/assets/images/icons/cross-icon.svg" alt="" v-else-if="showSearchInput && !darkMode" />
                <img src="@/assets/images/icons/cross-icon-light.svg" alt="" v-else />
              </li>
              <li class="list-item icon-list-item">
                <div class="dropdown">
                  <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    id="notificationsDropdown">
                    <img src="@/assets/images/icons/bell-icon.svg" v-show="!darkMode" alt="" />
                    <img src="@/assets/images/icons/bell-icon-light.svg" v-show="darkMode" alt="" />

                  </a>
                  <div class="dropdown-menu notifications" aria-labelledby="notificationsDropdown">
                    <span class="dropdown-menu-title">BİLDİRİMLERİN</span>
                    <ul>
                      <li v-for="(notification, index) in notifications" :key="index">
                        <img src="@/assets/images/icons/comment-icon.svg"
                          v-show="notification.type === 'comment' && !darkMode" alt="">
                        <img src="@/assets/images/icons/comment-icon-light.svg"
                          v-show="notification.type === 'comment' && darkMode" alt="">
                        <img src="@/assets/images/icons/thumb-up-icon.svg" v-show="notification.type === 'like'" alt="">
                        <img src="@/assets/images/icons/thumb-down-icon.svg" v-show="notification.type === 'dislike'"
                          alt="">

                        <div class="notification-content">
                          <p v-if="notification.type === 'comment'"> <b>@{{ notification.username }}</b> yorumuna yanıt
                            verdi</p>
                          <p v-else-if="notification.type === 'like'"> <b>@{{ notification.username }}</b> yorumunu
                            +1’ledi</p>
                          <p v-else> <b>@{{ notification.username }}</b> yorumunu -1’ledi</p>
                          <span>{{ notification.shareTime }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="list-item icon-list-item">
                <div class="dropdown user-dropdown">
                  <a class="" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    id="userDropdown">
                    <user-avatar image="user-avatar" />
                  </a>

                  <div class="dropdown-menu dropdown-menu-right user" aria-labelledby="userDropdown">
                    <div class="user-welcome-message-section">
                      <span class="dropdown-menu-title">HOŞGELDİN</span>
                      <a href="#" class="user-name">Mehmet Ali Öztekin</a>
                    </div>
                    <ul>
                      <li v-for="(option, index) in options" :key="index" @click="dropdownItemClicked(option)">
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
                </div>
              </li>
              <li class="list-item icon-list-item">
                <img src="@/assets/images/icons/menu-icon.svg" v-show="!darkMode" alt="" />
                <img src="@/assets/images/icons/menu-icon-light.svg" v-show="darkMode" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div class="navbar-wrapper mobile-menu-wrapper" v-else>
          <router-link to="/">
              <img class="logo" src="../../assets/images/logo.svg" alt="" />
          </router-link>
          <div class="flex _vc">
            <div class="dropdown">
              <a href="#" class="notifications-dropdown-button" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                id="notificationsDropdown">
                <img src="@/assets/images/icons/bell-icon.svg" v-show="!darkMode" alt="" />
                <img src="@/assets/images/icons/bell-icon-light.svg" v-show="darkMode" alt="" />

              </a>
              <div class="dropdown-menu dropdown-menu-right notifications" aria-labelledby="notificationsDropdown">
                <span class="dropdown-menu-title">BİLDİRİMLERİN</span>
                <ul>
                  <li v-for="(notification, index) in notifications" :key="index">
                    <img src="@/assets/images/icons/comment-icon.svg"
                      v-show="notification.type === 'comment' && !darkMode" alt="">
                    <img src="@/assets/images/icons/comment-icon-light.svg"
                      v-show="notification.type === 'comment' && darkMode" alt="">
                    <img src="@/assets/images/icons/thumb-up-icon.svg" v-show="notification.type === 'like'" alt="">
                    <img src="@/assets/images/icons/thumb-down-icon.svg" v-show="notification.type === 'dislike'"
                      alt="">

                    <div class="notification-content">
                      <p v-if="notification.type === 'comment'"> <b>@{{ notification.username }}</b> yorumuna yanıt
                        verdi</p>
                      <p v-else-if="notification.type === 'like'"> <b>@{{ notification.username }}</b> yorumunu
                        +1’ledi</p>
                      <p v-else> <b>@{{ notification.username }}</b> yorumunu -1’ledi</p>
                      <span>{{ notification.shareTime }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#" @click="menuShow">
              <img src="@/assets/images/icons/menu-icon.svg" alt="" v-show="showMobileMenu && !darkMode" />
              <img src="@/assets/images/icons/menu-icon-light.svg" alt="" v-show="showMobileMenu && darkMode" />

              <img src="@/assets/images/icons/cross-icon.svg" alt="" v-show="!showMobileMenu && !darkMode" />
              <img src="@/assets/images/icons/cross-icon-light.svg" alt="" v-show="!showMobileMenu && darkMode" />
            </a>
          </div>

        </div>
      </div>
    </div>
    <div class="mobile-menu" v-if="!showMobileMenu">
      <div class="">
        <form class="w-100" action="#">
          <div class="input-wrapper">
            <img src="@/assets/images/icons/search-icon-light-colored.svg" alt="" />
            <input type="text" placeholder="Webtekno'da arama yapın..." />
          </div>
        </form>
        <ul class="navbar-item-list-section">
          <li v-for="(navbarItem, index) in navbarItems" :key="index" :class="navbarItem.isActiveTab ? 'is-active' : ''"
            @click="changeTab(navbarItem.isActiveTab)">
            <navbar-item :navbar-item="navbarItem" />
          </li>
          <li>
            <div class="dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moreOptionsDropdown"
                class="flex _vc">
                <p class="item-text">Daha fazla</p>
                <img src="@/assets/images/icons/arrow-down-icon.svg" v-show="!darkMode" alt="" />
                <img src="@/assets/images/icons/arrow-down-icon-light.svg" v-show="darkMode" alt="" />
              </a>
              <div class="dropdown-menu more" aria-labelledby="moreOptionsDropdown">
                <ul>
                  <li>Liste</li>
                  <li>İnceleme</li>
                  <li>Nasıl yapılır?</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="user-section">
        <div class="mb-3">
          <span>HOŞGELDİN</span>
        </div>
        <div class="dropdown user-dropdown w-100">
          <a class="dropdown-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            id="userDropdown">
            <div class="flex _vc _sb ">
              <div class="flex _vc">
                <user-avatar image="user-avatar" />
                <p class="user-name">Mehmet Ali Öztekin</p>
              </div>
              <img src="@/assets/images/icons/chevron-down-icon.svg" class="dropdown-arrow" alt="">
            </div>
          </a>

          <div class="dropdown-menu dropdown-menu-right user" aria-labelledby="userDropdown">
            <div class="user-welcome-message-section">
              <span class="dropdown-menu-title">HOŞGELDİN</span>
              <a href="#" class="user-name">Mehmet Ali Öztekin</a>
            </div>
            <ul>
              <li v-for="(option, index) in options" :key="index">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navbarItem from "../molecules/NavbarItem";
  import userAvatar from "../atoms/UserAvatar";
  import $ from "jquery";

  export default {
    components: {
      navbarItem,
      userAvatar
    },
    data() {
      return {
        fixed: false,
        isMobile: document.documentElement.clientWidth < 924,
        showSearchInput: false,
        navbarItems: [{
            link: "/gundem",
            text: "Gündem",
            isActiveTab: false,
          },
          {
            link: "/haber",
            text: "Haber",
            isActiveTab: true,
          },
          {
            link: "/video",
            text: "Video",
            isActiveTab: false,
          },
          {
            link: "/kripto-para",
            text: "Kripto para",
            isActiveTab: false,
          },
          {
            link: "/mobil",
            text: "Mobil",
            isActiveTab: false,
          },
          {
            link: "/oyun",
            text: "Oyun",
            isActiveTab: false,
          },
        ],
        showMobileMenu: true,
        selectedTab: {
          isActiveTab: null,
        },
        notifications: [{
            icon: "comment-icon",
            username: 'malioztekin',
            text: "@malioztekin yorumuna yanıt verdi",
            shareTime: "36 dk önce",
            type: 'comment'
          },
          {
            icon: "thumb-up-icon",
            username: 'omeryilmazel',
            type: 'like',
            // text: "@omeryilmazel yorumunu +1’ledi",
            shareTime: "1 s önce",
          },
          {
            icon: "thumb-down-icon",
            // text: "@haldun yorumunu -1’ledi",
            username: 'haldun',
            type: 'dislike',
            shareTime: "dün",
          },
          {
            icon: "comment-icon",
            username: 'fatihkahveci',
            text: "",
            type: 'comment',
            shareTime: "evvelsi gün",
          },
        ],
        options: [{
            icon: "night-icon",
            text: "Gece modu",
            svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6217 11.1056C17.4581 11.0646 17.2946 11.1056 17.1514 11.2082C16.6198 11.6596 16.0064 12.029 15.3316 12.2752C14.6977 12.5214 14.0025 12.6446 13.2664 12.6446C11.6102 12.6446 10.0971 11.9674 9.01341 10.8799C7.92971 9.79241 7.25495 8.27401 7.25495 6.61197C7.25495 5.91433 7.37763 5.2372 7.5821 4.62163C7.80702 3.96503 8.13418 3.36998 8.56357 2.857C8.7476 2.63129 8.7067 2.30299 8.48178 2.11832C8.33865 2.01573 8.17507 1.97469 8.01149 2.01573C6.27348 2.48766 4.76038 3.53413 3.67668 4.92942C2.63387 6.30419 2 8.00726 2 9.87449C2 12.1111 2.89968 14.1424 4.37188 15.6198C5.84408 17.0972 7.86836 18 10.0971 18C11.9783 18 13.7163 17.3434 15.1067 16.2559C16.5176 15.1479 17.5399 13.5679 17.9693 11.7622C18.0715 11.4545 17.908 11.1672 17.6217 11.1056Z" fill="#8C8C8C"/></svg>',
            itemLabel: 'dark-mode'
          },
          {
            icon: "edit-icon",
            text: "Profilini düzenle",
            svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="#8C8C8C" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1392 9.99793C14.8237 9.99793 14.5679 10.2537 14.5679 10.5692V16.2819C14.5679 16.5974 14.3121 16.8532 13.9966 16.8532H3.71381C3.39829 16.8532 3.14253 16.5974 3.14253 16.2819V4.85651C3.14253 4.54099 3.39829 4.28523 3.71381 4.28523H10.569C10.8846 4.28523 11.1403 4.02946 11.1403 3.71395C11.1403 3.39843 10.8846 3.1427 10.569 3.1427H3.71381C2.7673 3.1427 2 3.91 2 4.85651V16.2819C2 17.2284 2.7673 17.9957 3.71381 17.9957H13.9967C14.9432 17.9957 15.7105 17.2284 15.7105 16.2819V10.5692C15.7105 10.2537 15.4547 9.99793 15.1392 9.99793Z" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3554 2.6408C16.9452 2.23056 16.3889 2.00019 15.8087 2.00019C15.2283 1.99853 14.6714 2.22936 14.2623 2.64117L6.73754 10.1653C6.67511 10.2282 6.62801 10.3047 6.59986 10.3887L5.45734 13.8163C5.35762 14.1156 5.51946 14.4391 5.81881 14.5388C5.87689 14.5582 5.9377 14.5681 5.99889 14.5681C6.06022 14.5681 6.12117 14.5582 6.17941 14.539L9.60703 13.3965C9.69121 13.3683 9.7677 13.321 9.83039 13.2582L17.3551 5.73346C18.2092 4.8795 18.2093 3.49486 17.3554 2.6408ZM16.5474 4.92623L9.12087 12.3527L6.90206 13.0937L7.6407 10.8777L15.0701 3.45121C15.4785 3.04358 16.1401 3.04425 16.5477 3.45269C16.7424 3.6478 16.8521 3.91193 16.853 4.18758C16.8537 4.4647 16.7437 4.73061 16.5474 4.92623Z" /> </svg>',
            itemLabel: ''
          },
          {
            icon: "add-bookmark-icon-dark-colored",
            text: "Kaydettiklerim",
            svg: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_2110:104)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.09998 14.4L7.50076 12.184L12.9 14.3994V3.80993C12.9 2.37127 11.6761 1.20001 10.1708 1.20001H4.83072C3.3262 1.20001 2.10689 2.37051 2.10689 3.80993L2.09998 14.4Z" stroke="#8c8c8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_2110:104"> <rect width="15" height="15" fill="#8c8c8c"/> </clipPath> </defs> </svg>',
            itemLabel: 'counter',
            itemLabelText: '16'
          },
          {
            icon: "heart-icon",
            text: "Tepkilerim",
            svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.44258 3.20001C3.99454 3.19786 2.00191 5.20544 2 7.67229C1.99666 11.7278 7.34619 16.8017 9.99223 16.8038C12.6322 16.8063 17.9964 11.7412 18 7.68561C18.002 5.21249 16.0128 3.20786 13.5646 3.20602C12.1429 3.20467 10.8316 3.88355 10.0021 5.0082C9.17459 3.88233 7.85842 3.20109 6.44258 3.20001Z" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
            itemLabel: 'counter',
            itemLabelText: '1.2K'
          },
          {
            icon: "comment-icon-light-colored",
            text: "Yorumlarım",
            svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73132 14.7998L3.76569 17.7654C3.26172 18.2694 2.40002 17.9125 2.40002 17.1997V4.39996C2.40002 3.0745 3.47452 2 4.79998 2H15.9998C17.3253 2 18.3998 3.0745 18.3998 4.39996V12.3998C18.3998 13.7253 17.3253 14.7998 15.9998 14.7998H6.73132Z" stroke="#8c8c8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
            itemLabel: 'counter',
            itemLabelText: '1'
          },
          {
            icon: "logout-icon",
            text: "Çıkış yap",
            svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.7621 17.5235H2.39999V2.40002H11.7621" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5.28065 10.3218H17.5235" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13.9226 6.71527L17.5234 10.3161L13.9226 13.9169" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
          },
        ],
        darkMode: false,
      };
    },
    methods: {
      dropdownItemClicked(option) {
        if (option.itemLabel === 'dark-mode') {
          this.modeToggle()
        }
      },
      handleScroll() {
        if (!this.isMobile) {
          this.fixed = window.scrollY > 40;
        }
      },
      menuShow() {
        this.showMobileMenu = !this.showMobileMenu;
      },
      dark() {
        document.querySelector("body").classList.add("dark-mode");
        this.darkMode = true;
        this.$emit("dark");
      },

      light() {
        document.querySelector("body").classList.remove("dark-mode");
        this.darkMode = false;
        this.$emit("light");
      },

      modeToggle() {
        if (
          this.darkMode ||
          document.querySelector("body").classList.contains("dark-mode")
        ) {
          this.light();
        } else {
          this.dark();
        }
      },
    },
    computed: {
      darkDark() {
        return this.darkMode && "darkmode-toggled";
      },
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    mounted() {
      $(document).on("click", ".user", function (e) {
        e.stopPropagation();
      });

      $(".user-dropdown").on("show.bs.dropdown", function () {
        $(".user-logo").css({
          "border-color": "#FFB400",
          "border-width": "2px"
        });
      });

      $(".user-dropdown").on("hide.bs.dropdown", function () {
        $(".user-logo").css({
          "border-color": "rgba(0, 0, 0, 0.2)",
          "border-width": "0.5px"
        });
      });
    },
  };
</script>

<style lang="scss">
@import "@/assets/scss/components/layouts/navbar";
  .item-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  .notification-text {
    display: inline-block;
  }
</style>