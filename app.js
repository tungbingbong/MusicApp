const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ---------Topic-----------
const zingHeader = $('.zing_header');
const topic = $('.zing_header-topic');
const modalTopic = $(".modal-topic");
const modal = $(".modal");
const listTheme = $$(".topic-theme");
const closeModal = $(".topic-header .icon-close");
const avatarImg = $('.zing_body-avatar a');
const individualCtn1 = $('.individual_ctn1');
const individualCtn2 = $('.individual_ctn2');
const individualCtn3 = $('.individual_ctn3');
const individualCtn4 = $('.individual_ctn4');
const individualCtn5 = $('.individual_ctn5');

// ---------Music----------
const listMusic = $('.individual_ctn2-right');
const listSlider = $('.individual_ctn2-left');
const audio = $('.audio audio');
const cdImg = $('.control-left-img img');
const cdTitle = $('.control-left-title h1');
const cdDes = $('.control-left-title small');
const controlCd = $('.control-left-img');
const playListSongRight = $('.playlist-song');
const playListRight = $('.list-song-body');

// ---------Icon-----------
const iconFavorite = $('.icon-favorite');
const iconPlay = $('.play');
const iconPauseMusic = $('.pause-music');
const iconPlayMusic = $('.play-music');
const iconLeft = $('.icon-control-left');
const iconRight = $('.icon-control-right');
const iconRepeat = $(".repeat");
const iconShuffle = $(".icon-shuffle");

// ---------Mobile---------
const iconPlay_mb = $(".play_mb");
const iconPauseMusic_mb = $(".pause-music-mb");
const iconPlayMusic_mb = $(".play-music-mb");
const iconLeft_mb = $(".icon-control-left-mb");
const iconRight_mb = $(".icon-control-right-mb");
const iconRepeat_mb = $(".repeat-mb");
const iconShuffle_mb = $(".icon-shuffle-mb");
const ZingControl_mb = $(".zing-controls-mb");

// ------------------------

const iconSelectionAll = $('.addPlaylist .checkbox-wrapper');
const btnAddPlaylist = $('.addPlaylist .btn');

//-------------------------

const individualSongList = $('.individual_ctn2-song-list');

const zingMenu = $('.zing_navbar-menu');
const individual = $('.individual');
const navbarItem = $$('.zing_navbar-item');
const discover = $('.discover');
const zingchart = $('.zingchartCtn');
const radioCtn = $('.RadioCtn');


const zingPlayList = $('.zing_playlist');
const infoSearch = $('.info_search');
const ZingSearch = $('.zing_search');
const playListCDF1 = $(".zing_playlist-img-rotate");
const playListCDF0 = $(".zing_playlist-img");

var arrPlaylist = [];
var search = 2;
var allPlaylist = false;
var isTheme = false;
var isShuffle = false;
var isRepeat = false;

var currentIndex = 0;
const app = {
  currentIndexPlaylist: 0,
  songSelection: 0,
  playSong: false,
  isCheckbox: false,
  isVolume: false,
  volumeNumber: 0,
  percent: 0,
  changeMusic: false,
  boolPlaylist: false,
  playListUS: false,
  zingSearch: false,
  isMenu: 0,

  // ======================
  indexDiscover: 0,

  // ----------------------
  isPlayList: true,
  isFavorite: true,

  config: JSON.parse(localStorage.getItem('keys')) || {},

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem('keys', JSON.stringify(this.config));
  },

  renderSlide: [
    { img: "./image/slider/1.jpeg" },
    { img: "./image/slider/2.jpeg" },
    { img: "./image/slider/3.jpeg" },
    { img: "./image/slider/4.jpeg" },
    { img: "./image/slider/5.jpeg" },
    { img: "./image/slider/6.jpeg" },
    { img: "./image/slider/7.jpeg" },
    { img: "./image/slider/8.jpeg" },
    { img: "./image/slider/9.jpeg" },
    { img: "./image/slider/10.jpeg" },
  ],

  songs: [
    // Vpop
    {
      title: "Ưng Quá Chừng",
      singer: "AMEE",
      type: "free",
      time: "2 hours ago",
      duration: "01:40",
      img: "./image/discover/ctn2/ungquachung_vpop.jpeg",
      pathSong: "./music/vpop/UngQuaChung.mp3",
    },
    {
      title: "Bí Mật Nhỏ",
      singer: "Bray (ft Hoang Ton, Bao Han Helia)",
      type: "free",
      time: "2 hours ago",
      duration: "03:53",
      img: "./image/discover/ctn2/BiMatNho_Vpop.jpeg",
      pathSong: "./music/vpop/BiMatNho.mp3",
    },
    {
      title: "Hãy Trao Cho Anh",
      singer: "Sơn Tùng MTP",
      type: "free",
      time: "2 hours ago",
      duration: "04:05",
      img: "./image/discover/ctn2/Haytraochoanh_vpop.jpeg",
      pathSong: "./music/vpop/HayTraoChoAnh.mp3",
    },
    {
      title: "Ghệ yêu dấu của em ơi",
      singer: "Tlinh (ft 2pillz, wokeup)",
      type: "free",
      time: "2 hours ago",
      duration: "02:58",
      img: "./image/discover/ctn2/gheiudaucuaemoi_vpop.jpeg",
      pathSong: "./music/vpop/GheIuDauCuaEmOi.mp3",
    },
    {
      title: "Nếu lúc đó",
      singer: "Tlinh (ft 2pillz)",
      type: "free",
      time: "2 hours ago",
      duration: "04:24",
      img: "./image/discover/ctn2/neulucdo_vpop.jpeg",
      pathSong: "./music/vpop/NeuLucDo.mp3",
    },
    {
      title: "Quả Phụ Tướng",
      singer: "Dung Hoàng Phạm",
      type: "free",
      time: "2 hours ago",
      duration: "03:04",
      img: "./image/discover/ctn2/Quaphutuong_vpop.jpeg",
      pathSong: "./music/vpop/QuaPhuTuong.mp3",
    },
    {
      title: "See Tình",
      singer: "Cover By V.Anh",
      type: "free",
      time: "2 hours ago",
      duration: "02:59",
      img: "./image/discover/ctn2/Seetinh_vpop.jpeg",
      pathSong: "./music/vpop/SeeTinh.mp3",
    },
    {
      title: "Tay to",
      singer: "RPT MCK",
      type: "free",
      time: "2 hours ago",
      duration: "02:45",
      img: "./image/discover/ctn2/Tayto_vpop.png",
      pathSong: "./music/vpop/TayTo.mp3",
    },

    // US-UK type VIP
    {
      title: "Flowers",
      singer: "Miley Cyrus",
      time: "2 days ago",
      img: "./image/discover/ctn2/mileycyrus_usuk.jpeg",
      pathSong: "./music/usuk/Flowers.mp3",
      type: "free",
      duration: "03:21",
    },
    {
      title: "Boys a liar Pt2",
      singer: "PinkPantheress & IceSpice",
      time: "1 days ago",
      img: "./image/discover/ctn2/IceSlice_usuk.jpeg",
      pathSong: "./music/usuk/BoysaliarPt2.mp3",
      type: "vip",
      duration: "02:11",
    },
    {
      title: "Calm Down",
      singer: "Rema & Selena Gomez",
      time: "1 days ago",
      img: "./image/discover/ctn2/Selena_usuk.jpeg",
      pathSong: "./music/usuk/CalmDown.mp3",
      type: "free",
      duration: "03:59",
    },
    {
      title: "Unholy",
      singer: "Sam Smith & Kim Petras",
      time: "1 days ago",
      img: "./image/discover/ctn2/unholy_usuk.jpeg",
      pathSong: "./music/usuk/Unholy.mp3",
      type: "vip",
      duration: "04:35",
    },
    {
      title: "Kill Bill",
      singer: "SZA",
      time: "1 days ago",
      img: "./image/discover/ctn2/Sza_usuk.jpeg",
      pathSong: "./music/usuk/KillBill.mp3",
      type: "vip",
      duration: "04:35",
    },

    // KPOP type free
    {
      title: "BAD BOY",
      singer: "Red Velvet",
      time: "1 days ago",
      img: "./image/discover/ctn2/RedVelvet_kpop.png",
      pathSong: "./music/kpop/badboy.mp3",
      type: "free",
      duration: "03:32",
    },
    {
      title: "Ditto",
      singer: "New Jeans",
      time: "1 days ago",
      img: "./image/discover/ctn2/newjeans_kpop.jpeg",
      pathSong: "./music/kpop/Ditto.mp3",
      type: "free",
      duration: "03:05",
    },
    {
      title: "Gone",
      singer: "ROSE - BLACKPINK",
      time: "1 days ago",
      img: "./image/discover/ctn2/rose_kpop.jpeg",
      pathSong: "./music/kpop/Gone.mp3",
      type: "free",
      duration: "03:27",
    },
    {
      title: "How You Like That",
      singer: "BLACKPINK",
      time: "1 days ago",
      img: "./image/discover/ctn2/BlackPink_kpop.jpeg",
      pathSong: "./music/kpop/HowYouLikeThat.mp3",
      type: "free",
      duration: "03:01",
    },
    {
      title: "Hype Boy",
      singer: "New Jeans",
      time: "1 days ago",
      img: "./image/discover/ctn2/newjeans_kpop.jpeg",
      pathSong: "./music/kpop/HypeBoy.mp3",
      type: "free",
      duration: "02:58",
    },
    {
      title: "Love Sick Girls",
      singer: "BLACKPINK",
      time: "1 days ago",
      img: "./image/discover/ctn2/BlackPink_kpop.jpeg",
      pathSong: "./music/kpop/LovesickGirls.mp3",
      type: "free",
      duration: "03:12",
    },
    {
      title: "Peek a Boo",
      singer: "Red Velvet",
      time: "1 days ago",
      img: "./image/discover/ctn2/RedVelvet_kpop.png",
      pathSong: "./music/kpop/PeekaBoo.mp3",
      type: "free",
      duration: "03:21",
    },
    {
      title: "Pink Venom",
      singer: "BLACKPINK",
      time: "1 days ago",
      img: "./image/discover/ctn2/BlackPink_kpop.jpeg",
      pathSong: "./music/kpop/PinkVenom.mp3",
      type: "free",
      duration: "03:07",
    },
    {
      title: "POP",
      singer: "NAYEON - TWICE",
      time: "1 days ago",
      img: "./image/discover/ctn2/Nayeon_kpop.jpeg",
      pathSong: "./music/kpop/Pop.mp3",
      type: "free",
      duration: "02:48",
    },
    {
      title: "Sexy Nukim",
      singer: "NUKIM (ft RM - BTS)",
      time: "1 days ago",
      img: "./image/discover/ctn2/RM_kpop.png",
      pathSong: "./music/kpop/SexyNukim.mp3",
      type: "free",
      duration: "03:49",
    },
    {
      title: "Shut Down",
      singer: "BLACKPINK",
      time: "1 days ago",
      img: "./image/discover/ctn2/BlackPink_kpop.jpeg",
      pathSong: "./music/kpop/ShutDown.mp3",
      type: "free",
      duration: "02:55",
    },
    {
      title: "Tomboy",
      singer: "G-IDLE",
      time: "1 days ago",
      img: "./image/discover/ctn2/Gidle_kpop.jpeg",
      pathSong: "./music/kpop/badboy.mp3",
      type: "free",
      duration: "02:54",
    },

    // VIP SONGS but free to download
    {
      title: "Into Your Arms",
      singer: "Witt Lowry ft. Ava Max",
      time: "1 days ago",
      img: "./image/discover/ctn2/Avamax_usuk.jpeg",
      pathSong: "./music/vip/IntoYourArms.mp3",
      type: "free",
      duration: "04:06",
    },
    {
      title: "Wavin' Flag",
      singer: "K'NAAN",
      time: "1 days ago",
      img: "./image/discover/ctn2/Knaan_usuk.jpeg",
      pathSong: "./music/vip/WavinFlag.mp3",
      type: "vip",
      duration: "04:06",
    },
    {
      title: "Waiting For You",
      singer: "MONO",
      time: "1 days ago",
      img: "./image/discover/ctn2/mono_vpop.jpeg",
      pathSong: "./music/vip/WaitingForYou.mp3",
      type: "free",
      duration: "04:06",
    },
  ],

  listSingers: [
    {
      Singer: "RM",
      Follower: "72 millions followers",
      img: "./image/listSinger/RM.jpeg",
    },
    {
      Singer: "Rose",
      Follower: "78 millions followers",
      img: "./image/listSinger/Rose.jpeg",
    },
    {
      Singer: "Red Velvet",
      Follower: "55 millions followers",
      img: "./image/listSinger/RedVelvet.jpeg",
    },
    {
      Singer: "Black Pink",
      Follower: "100 millions followers",
      img: "./image/listSinger/BlackPink.jpeg",
    },
    {
      Singer: "Nayeon",
      Follower: "75 millions followers",
      img: "./image/listSinger/Nayeon.jpeg",
    },
  ],

  selectionTheme: function() {
    let indexImg = 2;
    $(".topic-body").onclick = (e) => {
      if(e.target.closest(".topic-theme-img img") || 
         e.target.closest(".theme-apply")
      ) {
        const index = e.target.closest(".topic-theme").getAttribute("data-index") - 1;
        indexImg = index;
        search = index;
        $(".zing_header").style.background = `url("./background/backroundThemes/${index}.jpg") no-repeat center/cover`;
        $(".zing_header").style.boxShadow = `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`;
        $(".topic").style.background = `url(./background/modalThemes/modalTheme3/theme${index}.jpg) center/cover no-repeat`;
        infoSearch.style.background = `url(./background/modalThemes/modalTheme3/theme${index}.jpg) center/cover no-repeat`;
        $(".zing-controls-mb").style.background = `url(./background/modalThemes/modalTheme3/theme${index}.jpg) center/cover no-repeat`;
        $(".setting_list").style.background = `linear-gradient(0,rgba(225,225,225,0.1),rgba(225,225,225,0.2)), url("./background/modalThemes/modalTheme3/theme${index}.jpg") center/cover no-repeat`;
        if(index == 3 || index == 4 || index == 5 || index == 6 || index == 7) {
          isTheme = true;
          $(".background").style.backgroundImage = `url("./background/backroundThemes/${index}.jpg")`;
          $(".footer-mb").style.background = `linear-gradient(0 ,rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url("./background/backroundThemes/${index}.jpg")`;
          $(".zing_body-selector").classList.add("action-list-selection");
          $(".zing-controls").style.background = `linear-gradient(0 ,rgba(225,225,225,0.2),rgba(225,225,225,0.2)),url("./background/backroundThemes/${index}.jpg")no-repeat center/cover`;
          $$(".checkbox-wrapper ion-icon").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".color-main").forEach((item) => {
            item.style.color = "rgba(0, 0, 0, 0.8)";
          });
          $$(".zingchart-number").forEach((item, index) => {
            if (index > 2) {
              item.classList.remove("stroke-while");
              item.classList.add("stroke-black");
            }
          });
          $$(".color-small").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".song-item").forEach((item) => {
            item.classList.add("action-hover");
          });
          $$(".color-title").forEach((item) => {
            item.style.color = "black";
          });
          playListSongRight.style.background = `linear-gradient(0 ,rgba(225,225,225,0.05),rgba(225,225,225,0.1)),url("./background/backroundThemes/${index}.jpg") no-repeat center/cover`;
          $(".progress").style.background = "rgba(0, 0, 0, 0.1)";
          $(".volume-control").style.background = "rgba(0, 0, 0, 0.1)";
          $(".zing_sidebar").style.background = "rgba(0, 0, 0, 0.06)";
          $(".list-song-btn").style.background = "rgba(0, 0, 0, 0.1)";
          $$(".zing_right-item").forEach((item) => {
            item.style.background = `rgba(0, 0, 0, 0.1)`;
          });
          btnAddPlaylist.style.background = "rgba(0, 0, 0, 0.1)";
          $(".music-color-selection").style.background = "rgba(0, 0, 0, 0.1)";
          $(".sidebar-divide").style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
          $(".zing_navbar-addList").style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
          $(".individual_btn-all").style.background = "#FC427B";
          $(".individual_btn").style.background = "rgba(225, 225, 225, 225.05)";
          if (isRepeat) {
            iconRepeat.style.color = "#6c5ce7";
            iconRepeat_mb.style.color = "#6c5ce7";
          }
          if (isShuffle) {
            iconShuffle.style.color = "#6c5ce7";
            iconShuffle_mb.style.color = "#6c5ce7";
          }
        } else {
          indexImg = index;
          isTheme = false;
          $(".zing_body-selector").classList.remove("action-list-selection");
          $(".background").style.backgroundImage = `url("./background/backroundThemes/${index}.jpg")`;
          $(".footer-mb").style.background = `linear-gradient(0 ,rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url("./background/backroundThemes/${index}.jpg")`;
          $(".zing-controls").style.background = `linear-gradient(0 ,rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url("./background/backroundThemes/${index}.jpg")no-repeat center/cover`;
          playListSongRight.style.background = `linear-gradient(0 ,rgba(225,225,225,0.05),rgba(225,225,225,0.1)), url("./background/backroundThemes/${index}.jpg")no-repeat center/cover`;
          $$(".checkbox-wrapper ion-icon").forEach((item) => {
            item.style.color = "var(--color-small)";
          });
          $$(".color-main").forEach((item) => {
            item.style.color = "var(--color-white)";
          });
          $$(".zingchart-number").forEach((item, index) => {});
          $$(".color-small").forEach((item) => {
            item.style.color = "var(--color-small)";
          });
          $$(".song-item").forEach((item) => {
            item.classList.add("action-hover");
          });
          $$(".color-title").forEach((item) => {
            item.style.color = "white";
          });
          btnAddPlaylist.style.background = "rgba(225, 225, 225, 0.1)";
          $(".progress").style.background = "var(--color-small)";
          $(".volume-control").style.background = "var(--color-small)";
          $(".sidebar-divide").style.background = "var(--background-while)";
          $(".zing_sidebar").style.background = "var(--background-while)";
          $(".zing-controls").style.background = `linear-gradient(0 ,rgba(225,225,225,0.05),rgba(225,225,225,0.1)), url("./background/backroundThemes/${index}.jpg")no-repeat center/cover`;
          $(".zing_navbar-addList").style.borderBottom = "1px solid var(--color-small)";
          $(".individual_btn-all").style.background = "#5758BB";
          $(".individual_btn").style.background = "var(--background-btn)";
          $$(".zingchart-number").forEach((item, index) => {
            if (index > 2) {
              item.classList.add("stroke-while");
              item.classList.remove("stroke-black");
            }
          });
          if (index == 0) {
            $(".background").style.backgroundImage = `url("./background/backroundThemes/0.svg")`;
            $(".footer-mb").style.background = `linear-gradient(0 ,rgba(225,225,225,0.1),rgba(225,225,225,0.1)),url("./background/backroundThemes/0.svg")`;
            playListSongRight.style.background = `linear-gradient(0 ,rgba(225,225,225,0.05),rgba(225,225,225,0.1)),url("./background/backroundThemes/0.svg")no-repeat center/cover`;
            $(".zing-controls").style.background = `linear-gradient(0 ,rgba(225,225,225,0.05),rgba(225,225,225,0.1)),url("./background/backroundThemes/0.svg")no-repeat center/cover`;
          }
          if (isRepeat) {
            iconRepeat.style.color = "var(--color-pink)";
          }
          if (isShuffle) {
            iconShuffle.style.color = "var(--color-pink)";
          }
        }
      }

      if(e.target.closest(".topic-theme-img img")) {
        const index =e.target.closest(".topic-theme").getAttribute("data-index") - 1;
        indexImg = index;
        $(".zing_sidebar-mb").style.background = `url("./background/modalThemes/modalTheme3/theme${index}.jpg") center/cover no-repeat`;
      }
    };

    // Khi ngừơi dùng scroll trang web lên xuống
    $(".zing_main").onscroll = (e) => {
      let target = e.target.scrollTop;
      if(target <= 0) {
        zingHeader.style.background = "none";
        zingHeader.style.boxShadow = "none";
      } else if(target >= 0) {
        if(indexImg == 2) {
          zingHeader.style.background = `url("./background/backroundThemes/2.jpg")no-repeat center/cover`;
          zingHeader.style.boxShadow = `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`;
        } else {
          if(indexImg == 0) {
            zingHeader.style.background = `url("./background/backroundThemes/0.svg")no-repeat center/cover`;
            zingHeader.style.boxShadow = `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`;
          } else {
            zingHeader.style.background = `url("./background/backroundThemes/${indexImg}.jpg")no-repeat center/cover`;
            zingHeader.style.boxShadow = `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`;
          }
        }
      }
    };

    // Xử lý responsive với Ipad
    $(".expanded-right").onclick = () =>
    $(".zing_sidebar").classList.add("action-zing-sidebar");
    $(".expanded-left").onclick = () =>
    $(".zing_sidebar").classList.remove("action-zing-sidebar");
  },

  openModal: function() {
    topic.onclick = () => {
      modalTopic.classList.remove("hide");
      modal.classList.remove("hide");
    }
    modalTopic.onclick = (a) => {
      if (a.target == a.currentTarget) {
        modalTopic.classList.add("hide");
        modal.classList.add("hide");
      }
    };
    closeModal.onclick = () => {
      modalTopic.classList.add("hide");
      modal.classList.add("hide");
    };
  },

  // -------- xử lý thanh tìm kiếm ---------
  handleSearch: function (search) {
    const appId = $("#app");
    const _this = this;
    let htmls = [];

    appId.onclick = (e) => {
      const targetInfoSearch = e.target.closest('.info_search');
      const targetZingSearch = e.target.closest('.zing_search');
      const targetItem = e.target.closest('.suggest_body .item');

      if (targetInfoSearch || targetZingSearch) {
        infoSearch.classList.remove("hide");
        ZingSearch.classList.add("action-search");
        const targetBody = e.target.closest('.recently .body');

        $(".action-search.zing_search").style.background =
          `url(./background/modalThemes/modalTheme3)/theme${search}.jpg center/cover no-repeat`;
        if (targetBody) {
          const recentlyItem = e.target.closest('.recently-song-item');
          if (recentlyItem) {
            const index = e.target.closest('.recently-song-item').getAttribute('.data-index');
            currentIndex = index;
            _this.loadCurrentSong();
            const html = _this.songs.map((item, i) => {
              if(i == index) {
                return `
                        <li class="song-item zingchart-body-item zing-playList-item" data-index=${i}> 
                            <div class="checkbox-wrapper color-main "data-index=${i}>
                              <ion-icon class="checkBox-icon-music"name="musical-notes-outline"></ion-icon>
                              <div class="checkbox">
                                <input type="checkbox">
                              </div>
                            </div>
                            <div class="zingchart-body-ctn">
                              <div class="zingchart-body-left zing-playList-body-left">
                                <div class="individual_ctn2-song-item-img zing-playList-body-left-img">
                                  <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                                  <div class="individual_ctn2-song-item-icon" data-index=${i}>
                                  <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song icon-play-song-top">
                                  <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                              </div>
                              <div class="individual_ctn2-song-title zingchart">
                                <span class="color-title">${item.title}</span>
                                <small class="color-small">${item.singer.split(",").map
                                  ((i) => `<a class="singer color-small"href="">${i}</a>`)}
                                </small>
                              </div>
                            </div>
                            <div class="zingchart-body-main color-small c-0">
                              <span class="title">${item.title}</span>
                              <span class="singer">(singer)</span>
                            </div>
                            <div class="zingchart-body-right">
                              <div class="zingchart-body-right-icon">
                                <div class="zingchart-icon icon-mic color-title">
                                  <i class="fa-sharp fa-solid fa-microphone"></i>
                                </div>
                              <div class="icon-favorite color-small "data-index=${index}>
                                <div class="no-favorite zingchart-icon icon-tym action-hover">
                                  <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                  <ion-icon name="heart"></ion-icon>
                                </div>
                              </div>
                              <div class="zingchart-icon color-title c-0">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                              </div>
                            </div>
                            <span class="zingchart-song-time color-small">${item.duration}</span>
                          </div>
                         </div>
                      </li> 
                `;
              }
            });
            $(".zing_playlist-right-body").innerHTML = html.join("\n");
            zingPlayList.classList.remove("hide");
            $(".zing_result").classList.add("hide");
            playListCDF1.classList.add("action-rotate-play");
            playListCDF0.classList.add("action-rotate");
            playListCDF0.classList.add("action-play-music");
            individual.classList.add("hide");
            discover.classList.add("hide");
            zingchart.classList.add("hide");
            radioCtn.classList.add("hide");
            $(".zing_playlist-img-rotate img").src = 
            recentlyItem.querySelector(".individual_ctn2-song-item-img img").src;
            _this.boolPlaylist = true;
            individual.classList.add("hide");
            audio.play();
          }
        }
      } else {
        infoSearch.classList.add("hide");
        ZingSearch.classList.remove("action-search");
        $(".zing_search").style.backgroundColor = `var(--background-while)`;
        $(".zing_search").style.backgroundImage = "none";
      }

      if(targetItem) {
        infoSearch.classList.add("hide");
        ZingSearch.classList.remove("action-search");
        $(".zing_search").style.backgroundImage = "none";
        $(".zing_search").style.backgroundColor = `var(--background-while)`;
        _this.songs.map((item, index) => {
          if(targetItem.querySelector(".title").innerHTML == item.title) {
            $("zing_result-list").innerHTML = `
                        <div class="l-6 m-12 c-12">
                          <li class="song-item zingchart-body-item zing_result-list-item" data-index=${index}> 
                              <div class="zingchart-body-ctn">
                                <div class="zingchart-body-left zing_playList-body-left">
                                  <div class="individual_ctn2-song-item-img zing_result-body-left-img">
                                    <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                                    <div class="individual_ctn2-song-item-icon"data-index=${index}>
                                      <ion-icon name="play"></ion-icon>
                                    </div>
                                    <div class="icon-play-song icon-play-song-top ">
                                      <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                    </div>
                                  </div>
                                  <div class="individual_ctn2-song-title zingchart ">
                                    <span class="color-title">${item.title}</span>
                                    <small class="color-small">
                                      ${item.singer.split(",").map((i) =>
                                        `<a class="singer color-small"href="">${i}</a>`
                                      )}
                                    </small>
                                  </div>
                                </div>
                                <div class="zingchart-body-main color-small c-0 l-0">
                                  <span class="title">${item.title}</span>
                                  <span class="singer">(singer)</span>
                                </div>
                                <div class="zingchart-body-right">
                                  <div class="zingchart-body-right-icon">
                                      <div class="zingchart-icon icon-mic color-title">
                                          <i class="fa-sharp fa-solid fa-microphone"></i>
                                      </div>
                                      <div class="icon-favorite color-small" data-index=${index}>
                                          <div class="no-favorite zingchart-icon icon-tym action-hover">
                                              <ion-icon name="heart-outline"></ion-icon>
                                          </div>
                                          <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                              <ion-icon name="heart"></ion-icon>
                                          </div>
                                      </div>
                                      <div class="zingchart-icon color-title c-0">
                                          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                      </div>
                                  </div>
                                  <span class="zingchart-song-time color-small">${item.duration}</span>
                                </div>
                              </div>
                          </li> 
                      </div>
            `;
            $(".zing_result").classList.remove("hide");
            individual.classList.add("hide");
            discover.classList.add("hide");
            zingchart.classList.add("hide");
            radioCtn.classList.add("hide");
            zingPlayList.classList.add("hide");
          }
        });
      }

      if (!e.target.closest(".zing_sidebar")) {
        $(".zing_sidebar").classList.remove("action-zing-sidebar");
      }
    };

    $(".zing_result-list").ondblclick = (e) => {
        const target = e.target.closest(".zing_result-list-item");
        if(target) {
          const index = target.getAttribute("data-index");
          currentIndex = index ;
          _this.loadCurrentSong();
          const html = _this.songs.map((item, i) => {
            if(i == index) {
              return `
                      <li class="song-item zingchart-body-item zing-playList-item" data-index=${i}> 
                        <div class="checkbox-wrapper color-main "data-index=${i}>
                          <ion-icon class="checkBox-icon-music" name="musical-notes-outline"></ion-icon>
                          <div class="checkbox">
                            <input type="checkbox">
                          </div>
                        </div>
                        <div class="zingchart-body-ctn">
                          <div class="zingchart-body-left zing_playList-body-left">
                            <div class="individual_ctn2-song-item-img zing_playList-body-left-img">
                              <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                              <div class="individual_ctn2-song-item-icon" data-index=${i}>
                                <ion-icon name="play"></ion-icon>
                              </div>
                              <div class="icon-play-song icon-play-song-top ">
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                              </div>
                            </div>
                            <div class="individual_ctn2-song-title zingchart ">
                              <span class="color-title">${item.title}</span>
                              <small class="color-small">${item.singer}</small>
                            </div>
                          </div>
                          <div class="zingchart-body-main color-small c-0">
                              <span class="title">${item.title}</span>
                              <span class="singer">(singer)</span>
                          </div>
                          <div class="zingchart-body-right">
                              <div class="zingchart-body-right-icon">
                                <div class="zingchart-icon icon-mic color-title">
                                  <i class="fa-sharp fa-solid fa-microphone"></i>
                                </div>
                              <div class="icon-favorite color-small "data-index=${index}>
                                <div class="no-favorite zingchart-icon icon-tym action-hover">
                                  <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                  <ion-icon name="heart"></ion-icon>
                                </div>
                              </div>
                              <div class="zingchart-icon color-title c-0">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                              </div>
                          </div>
                          <span class="zingchart-song-time color-small">${item.duration}</span>
                        </div>
                      </div>
                  </li>`;
            }
          });
          $(".zing_playlist-right-body").innerHTML = html.join("\n");
          zingPlayList.classList.remove("hide");
          $(".zing_result").classList.add("hide");
          playListCDF1.classList.add("action-rotate-play");
          playListCDF0.classList.add("action-rotate");
          playListCDF0.classList.add("action-play-music");
          individual.classList.add("hide");
          discover.classList.add("hide");
          zingchart.classList.add("hide");
          radioCtn.classList.add("hide");
          $(".zing_playlist-img-rotate img").src = target.querySelector(
            ".individual_ctn2-song-item-img img"
          ).src;
          _this.boolPlaylist = true;
          individual.classList.add("hide");
          audio.play();
        }
    };
    
    let value = "";
    $(".zing_search input").onkeyup = (e) => {
      value = e.target.value;
      if(value === "") {
          infoSearch.classList.remove("show-Results");
      } else {
          infoSearch.classList.add("show-Results");
      }

      let dem = 0;
      const keywords = _this.songs.map((item) => {
          if(item.title.toUpperCase().includes(value.toUpperCase())) {
            dem++;
              return `
                      <li class="item">
                        <span class="color-small"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <span class="title color-main">${item.title}</span>
                      </li>
                    `;
          }
      });
      if(dem > 0) {
          $("keywords .suggest-body").innerHTML = keywords.join
      } else {
          infoSearch.classList.remove("show-Results");
      }

      const recently = _this.songs.map((item, index) => {
          if(item.title.toUpperCase().includes(value.toUpperCase())) {
            return `
                    <li class="song-item recently-song-item" data-index=${index}> 
                      <div class="individual_ctn2-song-item-img">
                        <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                        <div class="individual_ctn2-song-item-icon"data-index=${index}>
                          <ion-icon name="play"></ion-icon>
                        </div>
                        <div class="icon-play-song">
                          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                        </div>
                      </div>
                      <div class="individual_ctn2-song-title">
                        <span class="color-title">${item.title}</span>
                        <small class="color-small">
                          ${item.singer.split(",").map((i) => 
                            `<a class="singer color-small"href="">${i}</a>`
                          )}
                        </small>
                      </div>
                  </li>  
                  `;
          }
      });
      $(".show .recently .body").innerHTML = recently.join("\n");
      if(e.key == "Enter") {
        const lists = _this.songs.map((item, index) => {
          if(item.title.toUpperCase().includes(value.toUpperCase())) {
            return `
                    <div class="l-6 m-12 c-12">
                      <li class="song-item zingchart-body-item zing_result-list-item" data-index=${index}> 
                        <div class="zingchart-body-ctn">
                          <div class="zingchart-body-left zing-playList-body-left">
                            <div class="individual_ctn2-song-item-img zing_result-body-left-img">
                            <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                            <div class="individual_ctn2-song-item-icon" data-index=${index}>
                              <ion-icon name="play"></ion-icon>
                            </div>
                            <div class="icon-play-song icon-play-song-top ">
                              <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                            </div>
                          </div>
                          <div class="individual_ctn2-song-title zingchart">
                            <span class="color-title">${item.title}</span>
                            <small class="color-small">
                              ${item.singer.split(",").map((i) =>
                                `<a class="singer color-small"href="">${i}</a>`
                              )}
                            </small>
                          </div>
                        </div>
                        <div class="zingchart-body-main color-small c-0 l-0">
                          <span class="title">${item.title}</span>
                          <span class="singer">(singer)</span>
                        </div>
                        <div class="zingchart-body-right">
                          <div class="zingchart-body-right-icon">
                            <div class="zingchart-icon icon-mic color-title">
                              <i class="fa-sharp fa-solid fa-microphone"></i>
                            </div>
                            <div class="icon-favorite color-small "data-index=${index}>
                              <div class="no-favorite zingchart-icon icon-tym action-hover">
                                <ion-icon name="heart-outline"></ion-icon>
                              </div>
                              <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                <ion-icon name="heart"></ion-icon>
                              </div>
                            </div>
                            <div class="zingchart-icon color-title c-0">
                              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
                          </div>
                          <span class="zingchart-song-time color-small">${item.duration}</span>
                        </div>
                      </div>
                    </li> 
                  </div>    
                `;
          }
        });
        $(".zing_result-list").innerHTML = lists.join("");
        $(".zing_result").classList.remove("hide");
        $(".zing_playList").classList.add("hide");
        individual.classList.add("hide");
        discover.classList.add("hide");
        zingchart.classList.add("hide");
        radioCtn.classList.add("hide");
      }
    };
  },

  loadColorSearch: function(object) {
    object.forEach((item) => {
      const index = item.getAttribute("data-index");
      if(index == currentIndex) {
        item.classList.add("music-color");
        item.classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        item.classList.remove("action-play-music");
        item.classList.remove("action-pause-music");
      }
    });
  },
  // ------------- cá nhân -------------

  //------------- chuyển đổi hình ảnh -------------
  handleRenderSlide: function () {
    const html = this.renderSlide.map((item, index) => {
      return `<img src="${item.img}" alt="image" class="individual_ctn2-img 
                    ${index == 0
          ? "individual_ctn2-img-first"
          : index == 1
            ? "individual_ctn2-img-second"
            : index == 2
              ? "individual_ctn2-img-third"
              : index == 3
                ? "individual_ctn2-img-four"
                : "individual_ctn2-img-four"
        }">`;
    });

    listSlider.innerHTML = html.join("\n");
  },

  handleRenderSinger: function () {
    const html = this.listSingers.map((item) => {
      return `<div class="l-2-4 m-2-4 c-6">
                    <div class="individual_ctn5-item">
                      <div class="individual_ctn5-hover">
                        <div class="individual_ctn5-img">
                          <img src="${item.img}" alt="image-artists">
                          <div class="individual_ctn2-song-item-icon modal-icon-play">
                            <ion-icon name="play"></ion-icon>
                          </div>
                        </div>
                      </div>
                      <div class="individual_ctn5-info color-main">
                        <h1>${item.Singer}</h1>
                        <span class="color-small">${item.Follower}</span>
                        <button class="btn color-small">
                          <ion-icon name="shuffle-outline"></ion-icon>
                          Music Corner
                        </button>
                      </div>
                    </div>
                  </div>`;
    });
    $(".individual_ctn5-body").innerHTML = html.join("\n");
  },

  //------------- chuyển đổi hình ảnh -------------
  autoChangeImg: function () {
    let indexImgs = 1;
    const individualListImg = $$(".individual_ctn2-img");
    changeImg = function () {
      individualListImg.forEach((item, index) => {
        // individual-ctn2-img-second","individual-ctn2-img-first
        if (index == indexImgs) {
          item.classList.replace(
            "individual_ctn2-img-four",
            "individual_ctn2-img-first"
          );
          item.classList.replace(
            "individual_ctn2-img-second",
            "individual_ctn2-img-first"
          );
          item.classList.replace(
            "individual_ctn2-img-third",
            "individual_ctn2-img-second"
          );
        } else if (index == indexImgs + 1) {
          item.classList.replace(
            "individual_ctn2-img-four",
            "individual_ctn2-img-second"
          );
          item.classList.replace(
            "individual_ctn2-img-third",
            "individual_ctn2-img-second"
          );
          item.classList.replace(
            "individual_ctn2-img-four",
            "individual_ctn2-img-first"
          );
        } else if (index == indexImgs + 2) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual_ctn2-img-third"
          );
          item.classList.replace(
            "individual_ctn2-img-four",
            "individual_ctn2-img-first"
          );
        } else {
          item.classList.replace(
            "individual_ctn2-img-third",
            "individual_ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-second",
            "individual_ctn2-img-first"
          );
          item.classList.replace(
            "individual_ctn2-img-first",
            "individual_ctn2-img-four"
          );
        }
        if (index == individualListImg.length - 1) {
          individualListImg[0].classList.replace(
            "individual_ctn2-img-four",
            "individual_ctn2-img-third"
          );
          individualListImg[0].classList.replace(
            "individual_ctn2-img-third",
            "individual_ctn2-img-second"
          );
          individualListImg[1].classList.replace(
            "individual_ctn2-img-four",
            "individual_ctn2-img-third"
          );
        }
      });
      indexImgs++;
      if (indexImgs > individualListImg.length - 1) {
        indexImgs = 0;
      }
    };
    setInterval("changeImg()", 2000);
  },

  loadCurrentSong: function () {
    const _this = this;
    cdImg.src = _this.songs[currentIndex].img;
    cdTitle.innerText = _this.songs[currentIndex].title;
    cdDes.innerText = _this.songs[currentIndex].singer;
    audio.src = _this.songs[currentIndex].pathSong;
    $('.time-end').innerText = _this.songs[currentIndex].duration;

    //mobile
    $(".control-left-title-mb .content h1").innerText =
      this.songs[currentIndex].title;
    $(".control-left-title-mb .content small").innerText =
      this.songs[currentIndex].singer;
    $(".control-left-img-mb img").src = this.songs[currentIndex].img;
    $(".time-end-mb").innerText = this.songs[currentIndex].duration;
  },

  loadSongs: function (e) {
    const html = this.songs.map(function (item, index) {
      if (index < 28) {
        return `<li class="song-item individual_ctn2-song-item" data-index=${index}> 
                    <div class="checkbox-wrapper color-main " data-index=${index}>
                        <ion-icon ion-icon class="checkBox-icon-music" name="musical-notes-outline"></ion-icon>
                        <div class="checkbox">
                            <input type="checkbox">
                        </div>
                    </div>
                    <div class="individual_ctn2-song-item-img">
                        <img src="${item.img}" alt="image-song" class="individual_ctn2-song-img">
                        <div class="individual_ctn2-song-item-icon" data-index=${index}>
                            <ion-icon name="play"></ion-icon>
                        </div>
                        <div class="icon-play-song">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                        </div>
                    </div>
                    <div class="individual_ctn2-song-title">
                            <span class="color-title">${item.title}</span>
                            <small class="color-small">${item.singer.split(",").map((i) =>
          `<a class="singer color-small"href="">${i}</a>`)}
                            </small>
                    </div>
                    <div class="zingchart-body-main color-small c-0">
                            <span class="title">${item.title}</span>
                            <span class="singer">(singer)</span>
                    </div>
                    <div class="individual_ctn2-song-right color-main">
                        <div class="individual_ctn2-song-right-icon">
                            <div class="icon-video c-0 m-0">
                                <ion-icon name="videocam"></ion-icon>
                            </div>
                            <div class="icon-favorite color-small" data-index=${index}>
                                <div class="no-favorite icon action-hover">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </div>
                                <div class="yes-favorite icon action-hover">
                                    <ion-icon name="heart"></ion-icon>
                                </div>
                            </div>
                        </div>
                        <div class="time">
                            <div class="song-time">
                              ${item.duration}
                            </div>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                    </div>
                </li>`
      }
    });

    individualSongList.innerHTML = html.join("\n");

  },

  loadPlaylistSongs: function () {
    const _this = this;
    if (_this.playListUS) {
      const html = this.songs.map((item, index) => {
        if (index > 10) {
          return `
              <li class="song-item zingchart-body-item zing-playList-item" data-index=${index}> 
                <div class="checkbox-wrapper color-main" data-index=${index}>
                    <ion-icon class="checkBox-icon-music" name="musical-notes-outline"></ion-icon>
                    <div class="checkbox">
                      <input type="checkbox">
                    </div>
                </div>
                <div class="zingchart-body-ctn">
                  <div class="zingchart-body-left zing-playList-body-left">
                    <div class="individual_ctn2-song-item-img zing-playList-body-left-img">
                      <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                      <div class="individual_ctn2-song-item-icon" data-index=${index}>
                         <ion-icon name="play"></ion-icon>
                      </div>
                      <div class="icon-play-song icon-play-song-top">
                         <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                      </div>
                    </div>
                    <div class="individual_ctn2-song-title zingchart">
                      <span class="color-title">${item.title}</span>
                      <small class="color-small">
                          ${item.singer.split(",").map((i) =>
            `<a class="singer color-small" href=" ">${i}</a>`
          )}
                      </small>
                    </div>
                  </div>
                  <div class="zingchart-body-main color-small c-0">
                    <span class="title">${item.title}</span>
                    <span class="singer">(singer)</span>
                  </div>
                  <div class="zingchart-body-right">
                    <div class="zingchart-body-right-icon">
                      <div class="zingchart-icon icon-mic color-title">
                         <i class="fa-sharp fa-solid fa-microphone"></i>
                      </div>
                      <div class="icon-favorite color-small "data-index=${index}>
                        <div class="no-favorite zingchart-icon icon-tym action-hover">
                          <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="yes-favorite zingchart-icon icon-tym action-hover">
                          <ion-icon name="heart"></ion-icon>
                        </div>
                      </div>
                      <div class="zingchart-icon color-title c-0">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                      </div>
                    </div>
                    <span class="zingchart-song-time color-small">${item.duration}</span>
                  </div>
                </div>
            </li>`;
        }
      });
      $('.zing_playlist-right-body').innerHTML = html.join("\n");
    } else {
      const html = this.songs.map((item, index) => {
        if (index > 12) {
          return `
            <li class="song-item zingchart-body-item zing-playList-item" data-index=${index}> 
              <div class="checkbox-wrapper color-main "data-index=${index}>
                  <ion-icon class="checkBox-icon-music" name="musical-notes-outline"></ion-icon>
                  <div class="checkbox">
                    <input type="checkbox">
                  </div>
              </div>
              <div class="zingchart-body-ctn">
                <div class="zingchart-body-left zing-playList-body-left">
                  <div class="individual_ctn2-song-item-img zing-playList-body-left-img">
                    <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                    <div class="individual_ctn2-song-item-icon" data-index=${index}>
                       <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="icon-play-song icon-play-song-top">
                       <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                    </div>
                  </div>
                  <div class="individual_ctn2-song-title zingchart">
                    <span class="color-title">${item.title}</span>
                    <small class="color-small">
                        ${item.singer.split(",").map((i) =>
            `<a class="singer color-small" href=" ">${i}</a>`
          )}
                    </small>
                  </div>
                </div>
                <div class="zingchart-body-main color-small c-0">
                  <span class="title">${item.title}</span>
                  <span class="singer">(singer)</span>
                </div>
                <div class="zingchart-body-right">
                  <div class="zingchart-body-right-icon">
                    <div class="zingchart-icon icon-mic color-title">
                       <i class="fa-sharp fa-solid fa-microphone"></i>
                    </div>
                    <div class="icon-favorite color-small "data-index=${index}>
                      <div class="no-favorite zingchart-icon icon-tym action-hover">
                        <ion-icon name="heart-outline"></ion-icon>
                      </div>
                      <div class="yes-favorite zingchart-icon icon-tym action-hover">
                        <ion-icon name="heart"></ion-icon>
                      </div>
                    </div>
                    <div class="zingchart-icon color-title icon-ellipsis c-0">
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                  </div>
                  <span class="zingchart-song-time color-small">${item.duration}</span>
                </div>
              </div>
          </li>`;
        }
      });
      $('.zing_playlist-right-body').innerHTML = html.join("\n");
    }
    _this.loadInterested();
  },

  loadSongRight: function() {
    const _this = this;
    $(".playlist-content").classList.remove("hide");
    $(".playlist-content-end").classList.add("hide");
    $(".playlist-content span").style.color = "white";
    _this.songs.forEach((item , index) => {
      if(index <= currentIndex) {
        const html = _this.songs.map((item, index) => {
          return index <= currentIndex && index <= 28
            ? `<li class="song-item song-item-right ${audio.play() && index == currentIndex 
                ? "music-color-playlist" : ""} " data-index=${index}> 
                  <div class="individual_ctn2-song-item-img ${audio.play() && index == currentIndex 
                    ? "action-play-music" : "" } ">
                        <img src="${item.img}" alt="" class="individual-ctn2-song-img">
                        <div class="individual_ctn2-song-item-icon color-main">
                            <ion-icon name="play"></ion-icon>
                        </div>
                        <div class="icon-play-song">
                          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                        </div>
                  </div>
                  <div class="individual_ctn2-song-title color-main">
                    <span class="color-title">${item.title}</span>
                    <small class="color-small">${item.singer}</small>
                  </div>
              </li>` : "";
        });
        $(".list-song-body-top").innerHTML = html.join("\n");
      } else {
        const html = _this.songs.map(function (item, index) {
          return index > currentIndex && index <= 22
            ? `<li class="song-item song-item-right" data-index=${index}> 
                  <div class="individual_ctn2-song-item-img">
                    <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                    <div class="individual-ctn2-song-item-icon color-main">
                      <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="icon-play-song ${audio.play() && index == currentIndex
                      ? "action-play-music" : ""}">
                      <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                    </div>
                  </div>
                  <div class="individual_ctn2-song-title color-main">
                    <span class="color-main">${item.title}</span>
                    <small class="color-small">${item.singer}</small>
                  </div>
                </li>`
            : "";
        });
        $(".list-song-body-bottom").innerHTML = html.join("\n");
      }
    });
    if(currentIndex === 28) {
      $(".playlist-content").classList.add("hide");
      $(".playlist-content-end").classList.remove("hide");
      $(".list-song-body-bottom").innerHTML = "";
    }
  },

  loadPlayListTop_bottom: function() {
    const _this = this;
    $(".playlist-content").classList.add("hide");
    arrPlaylist.sort((a,b) => a - b);
    var arrPlay = new Set(arrPlaylist);
    var arr_Playlist = [...arrPlay];
    var number_Playlist = 0;
    arr_Playlist.forEach((item, index) => {
      number_Playlist = index;
      if(item <= currentIndex) {
        const html = arr_Playlist.map((item) => {
          return item < currentIndex ?
              `<li class="song-item song-item-right ${audio.play() && item == currentIndex
                  ? "music-color-playlist" : ""}" data-index=${item}> 
                  <div class="individual_ctn2-song-item-img ${audio.play() && item == currentIndex
                    ? "action-play-music" : ""}">
                    <img src="${_this.songs[item].img}" alt="" class="individual_ctn2-song-img">
                    <div class="individual_ctn2-song-item-icon color-main">
                      <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="icon-play-song ">
                      <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                    </div>
                  </div>
                  <div class="individual_ctn2-song-title color-main">
                    <span class="color-main">${_this.songs[item].title}</span>
                    <small class="color-small">${_this.songs[item].singer}</small>
                  </div>
              </li>`  : "";
        });
        $(".list-song-body-top").innerHTML = html.join("\n");
      }
      if(item > currentIndex) {
        const html = arr_Playlist.map((item) => {
          return item < currentIndex ?
              `<li class="song-item song-item-right ${audio.play() && item == currentIndex
                  ? "music-color-playlist" : ""}" data-index=${item}> 
                  <div class="individual_ctn2-song-item-img ${audio.play() && item == currentIndex
                    ? "action-play-music" : ""}">
                    <img src="${_this.songs[item].img}" alt="" class="individual_ctn2-song-img">
                    <div class="individual_ctn2-song-item-icon color-main">
                      <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="icon-play-song ">
                      <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                    </div>
                  </div>
                  <div class="individual_ctn2-song-title color-main">
                    <span class="color-main">${_this.songs[item].title}</span>
                    <small class="color-small">${_this.songs[item].singer}</small>
                  </div>
              </li>`  : "";
        });
        $(".list-song-body-bottom").innerHTML = html.join("\n");
      }
    });
    if(number_Playlist > 0 && _this.playSong == true) {
      $(".playlist-content").classList.remove("hide");
    }
  },

  handelPlayListSong: function() {
    const _this= this;
    $(".zing_playlist-right").ondblclick = (e) => {
      const target = e.target.closest("zing-playList-item");
      _this.boolPlaylist = true;
      if(target) {
        currentIndex = target.getAttribute("data-index");
        _this.loadCurrentSong();
        _this.loadColorPlaylistSong();
        playListCDF1.classList.add("action-rotate-play");
        playListCDF0.classList.add("action-rotate");
        playListCDF0.classList.add("action-play-music");
        $(".zing_playlist-btn").classList.add("action-playlist-btn");
        $("zing_playlist-img-rotate img").src = target.querySelector("zing-playList-body-left-img img").src;
        audio.play();
        _this.boolPlaylist = true;
      }
      if(e.target.closest("icon-favorite")) {
        let isBool = true;
        e.target.closest("icon-favorite").classList.toggle("action-favorite");
        let index = Number(e.target.closest("icon-favorite").getAttribute("data-index"));
      }
    };
    $(".zing_playlist-icon-play").onclick = () => audio.pause();
    $(".zing_playlist-icon-pause").onclick = () => audio.play();
      
    $(".individual_ctn3").onclick = (e) => {
      const target = e.target.closest("individual_ctn3-item");
      if(e.target.closest(".individual_ctn3-modal") || target) {
        _this.playListUS = true;
        _this.loadPlaylistSongs();
        zingPlayList.classList.remove("hide");
        $(".zing_result").classList.add("hide");
        individual.classList.add("hide");
        $(".zing_playlist-img-rotate img").src = target.querySelector(".individual_ctn3-item-img img").src;
      }
    };

    $(".discover-ctn3-body").onclick = (e) => {
      const target = e.target.closest(".discover-ctn3-item");
      if (target) {
        _this.playListUS = false;
        _this.loadPlaylistSongs();
        zingPlayList.classList.remove("hide");
        $(".zing_result").classList.add("hide");
        discover.classList.add("hide");
        $(".zing_playlist-img-rotate img").src = target.querySelector(".discover-ctn3-img img").src;
      }
    };

    $(".discover-ctn4-body").onclick = (e) => {
      const target = e.target.closest(".discover-ctn3-item");
      if (target) {
        _this.playListUS = false;
        _this.loadPlaylistSongs();
        zingPlayList.classList.remove("hide");
        $(".zing_result").classList.add("hide");
        discover.classList.add("hide");
        $(".zing_playlist-img-rotate img").src = target.querySelector(".discover-ctn3-img img").src;
      }
    };

    // ----- Xử lý button -----
    $(".zing_playlist-btn").onclick = () => {
      _this.boolPlaylist = !_this.boolPlaylist;
      this.classList.toggle("action-playlist-btn", _this.boolPlaylist);
      if (_this.boolPlaylist) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  },

  colorMusic_PlayList: function() {
    $$(".song-item-right").forEach((item) => {
      let index = item.getAttribute("data-index");
      if(index == currentIndex) {
        item.classList.add("music-color-playlist");
        item.classList.add("action-hover");
        item
          .querySelector(".individual_ctn2-song-item-img")
          .classList.add("action-play-music");
      } else {
        item.classList.remove("music-color-playlist");
        item.classList.remove("action-hover");
        item
          .querySelector(".individual_ctn2-song-item-img")
          .classList.remove("action-pause-music");
        item
          .querySelector(".individual_ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
    });
  },

  loadInterested: function () {
    const interested = this.songs.map((item, index) => {
      if (index < 10 && index != currentIndex) {
        return `
               <li class="song-item zingchart-body-item zing-playList-item" data-index=${index}> 
                  <div class="checkbox-wrapper color-main" data-index=${index}>
                    <ion-icon class="checkBox-icon-music" name="musical-notes-outline"></ion-icon>
                    <div class="checkbox">
                      <input type="checkbox">
                    </div>
                  </div>
                 <div class="zingchart-body-ctn">
                   <div class="zingchart-body-left zing-playList-body-left">
                    <div class="individual_ctn2-song-item-img zing-playList-body-left-img">
                       <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                       <div class="individual_ctn2-song-item-icon" data-index=${index}>
                          <ion-icon name="play"></ion-icon>
                       </div>
                     <div class="icon-play-song icon-play-song-top">
                          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                       </div>
              </div>
              <div class="individual_ctn2-song-title zingchart">
                <span class="color-title">${item.title}</span>
                <small class="color-small">${item.singer.split(",").map((i) =>
                          `<a class="singer color-small" href=" ">${i}</a>`
                      )}
                </small>
              </div>
            </div>
            <div class="zingchart-body-main color-small c-0">
              <span class="title">${item.title}</span>
              <span class="singer">(singer)</span>
            </div>
            <div class="zingchart-body-right">
              <div class="zingchart-body-right-icon">
                <div class="zingchart-icon icon-mic color-title">
                   <i class="fa-sharp fa-solid fa-microphone"></i>
                </div>
                <div class="icon-favorite color-small "data-index=${index}>
                  <div class="no-favorite zingchart-icon icon-tym action-hover">
                    <ion-icon name="heart-outline"></ion-icon>
                  </div>
                  <div class="yes-favorite zingchart-icon icon-tym action-hover">
                    <ion-icon name="heart"></ion-icon>
                  </div>
                </div>
                <div class="zingchart-icon color-title c-0">
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
              </div>
              <span class="zingchart-song-time color-small">${item.duration}</span>
            </div>
          </div>
      </li>`
      }
    });
      $('.interested .body').innerHTML = interested.join("\n");
  },

  handleMusic: function() {
    const _this = this;
    const listSongs = $$('.individual_ctn2-song-item');
    const animationImg = cdImg.animate(
      { transform: "rotate(360deg)" },
      {
        duration: 10000, // thời gian chạy
        iteration: Infinity, // loop vòng chạy không giới hạn
      }
      );

    animationImg.pause();

    const animationImg_mb = $(".control-left-img-mb").animate(
      { transform: "rotate(360deg)" },
      {
        duration: 10000, //thời gian chạy
        iterations: Infinity, //chạy không giới hạn
      }
    );

    animationImg_mb.pause();

    // Load song khi user click vào bài hát
    listSongs.forEach((item, index) => {
      item.ondblclick = () => {
        animationImg.play();
        currentIndex = index;
        _this.loadCurrentSong();
        audio.play();
        _this.deleteColorMusic = false;
        _this.boolPlaylist = false;
        _this.changeMusic = true;

        $('.zing_navbar-addList').style.height = 30 + 'vh';

        $$(".the-song-include.free").forEach((item) => {
          item.classList.remove("music-color-selection");
          item
            .querySelector(".the-song-include-img.free ")
            .classList.remove("action-play-music");
        });
      };

      item.onclick = function () {
        _this.songSelection = index;
        _this.colorMusicSelection();
      };
    });

    listSongs.forEach((item, index) => {
      if (!index == currentIndex) {
        item.querySelector(".individual_ctn2-song-item-img")
            .classList.remove(".action-play-music");
        item.querySelector(".individual_ctn2-song-item-img")
            .classList.remove(".action-pause-music");
      }
      _this.deleteColorMusic = false;
    });

    individualSongList.onclick = (e) => {
      const target = e.target.closest(".individual_ctn2-song-item-img");
      if(target) {
        if(e.target.closest(".icon-play-song")) {
          _this.changeMusic = true;
          audio.pause();
        }
        if(e.target.closest(".individual_ctn2-song-item-icon")) {
          let index = Number(
            e.target
            .closest(".individual_ctn2-song-item-icon")
            .getAttribute("data-index"));
          currentIndex = index;
          _this.loadCurrentSong();
          _this.changeMusic = true;
          audio.play();
          _this.deleteColorMusic = false;
        } 
      } else if (e.target.closest(".individual_ctn2-song-right")) {
        if(e.target.closest(".icon-favorite")) {
           e.target
            .closest(".icon-favorite")
            .classList.toggle("action-favorite");
          Number(e.target.closest(".icon-favorite").getAttribute("data-index"));
        }
      }

      const checkbox_wrapper = e.target.closest(".checkbox-wrapper");
      const checkbox = e.target.closest(".checkbox");
      if(checkbox || checkbox_wrapper) {
        if(_this.isCheckbox) {
          checkbox.classList.remove("action-checkbox");
          checkBoxSelection = checkbox_wrapper.getAttribute("data-index");
          $$(".individual_ctn2-song-item")[checkBoxSelection].classList.remove("music-color-selection-Checkbox");
          checkbox_wrapper.classList.remove("checkBox-color-action");
          _this.isCheckbox = !_this.isCheckbox;
          allPlaylist = false;
        } else {
          checkbox.classList.add("action-checkbox");
          checkBoxSelection = checkbox_wrapper.getAttribute("data-index");
          arrPlayList.push(checkBoxSelection);
          $$(".individual_ctn2-song-item")[checkBoxSelection].classList.add("music-color-selection-Checkbox");
          checkbox_wrapper.classList.add("checkBox-color-action");
          _this.isCheckBox = !_this.isCheckBox;
          allPlayList = false;
        }

        let LengthSelection = $$(
          ".individual_ctn2-song-item.music-color-selection-Checkbox"
        ).length;

        if (LengthSelection == 0) {
          $(".individual_ctn1-header-left").classList.remove(
            "action-add-playlist"
          );
        } else {
          $(".individual_ctn1-header-left").classList.add(
            "action-add-playlist"
          );
        }
        
        if ($$(".action-checkbox").length <= _this.songs.length) {
          $(".addPlayList .checkbox-wrapper .checkbox").classList.remove(
            "action-checkbox"
          );
        }
        arrPlaylist.sort((a,b) => a - b);
      } 
    };

    // Xử lý hành vi click vào các icon
    iconPauseMusic.onclick = () => {
      audio.pause();
    }

    iconPlayMusic.onclick = () => {
      audio.play();
    }

    iconLeft.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = _this.songs.length - 1;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
    };

    iconRight.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex++;
        if (currentIndex > _this.songs.length - 1) {
          currentIndex = 0;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
      _this.deleteColorMusic = false;
    };

    iconRepeat.onclick = () => {
      isRepeat = !isRepeat;
      _this.setConfig("isRepeat", isRepeat);
      iconRepeat.classList.toggle("action-controls", isRepeat);
      iconRepeat_mb.classList.toggle("action-controls", isRepeat);

      if (isRepeat) {
        if (isTheme == false) {
          iconRepeat.style.color = "var(--color-pink)";
        } else {
          iconRepeat.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconRepeat.style.color = "white";
        } else {
          iconRepeat.style.color = "black";
        }
      }
    };

    iconShuffle.onclick = () => {
      isShuffle = !isShuffle;
      _this.setConfig("isShuffle", isShuffle);
      iconShuffle.classList.toggle("action-controls", isShuffle);
      if (isShuffle) {
        if (isTheme == false) {
          iconShuffle.style.color = "var(--color-pink)";
        } else {
          iconShuffle.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconShuffle.style.color = "white";
        } else {
          iconShuffle.style.color = "black";
        }
      }
    };

    // Xử lý hành vi click vào các icon mobile
    iconPauseMusic_mb.onclick = function () {
      audio.pause();
    };

    iconPlayMusic_mb.onclick = function () {
      audio.play();
    };

    iconLeft_mb.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = _this.songs.length - 1;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
    };

    iconRight_mb.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex++;
        if (currentIndex > _this.songs.length - 1) {
          currentIndex = 0;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
      _this.deleteColorMusic = false;
    };

    iconRepeat_mb.onclick = function () {
      isRepeat = !isRepeat;
      this.classList.toggle("action-controls", isRepeat);
      if (isRepeat) {
        if (isTheme == false) {
          iconRepeat.style.color = "var(--color-pink)";
        } else {
          iconRepeat.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconRepeat.style.color = "white";
        } else {
          iconRepeat.style.color = "black";
        }
      }
    };

    iconShuffle_mb.onclick = function () {
      isShuffle = !isShuffle;
      this.classList.toggle("action-controls", isShuffle);
      if (isShuffle) {
        if (isTheme == false) {
          iconShuffle.style.color = "var(--color-pink)";
        } else {
          iconShuffle.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconShuffle.style.color = "white";
        } else {
          iconShuffle.style.color = "black";
        }
      }
    };

    // Xử lý lắng nghe hành vi của audio
    audio.onpause = () => {
      animationImg.pause();
      animationImg_mb.pause();

      $$("zing_result-list-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if(index == currentIndex) {
          item.classList.add("action-pause-music");
          item.classList.remove("action-play-music");
        }
      });
      $$(".recently-song-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if(index == currentIndex) {
          item.classList.add("action-pause-music");
          item.classList.remove("action-play-music");
        }
      });
      if(_this.boolPlaylist) {
        $(".zing_playlist-btn").classList.remove("action-playlist-btn");
      }
      controlCd.style.marginLeft = 0;
      iconPlay.classList.remove("action-play-icon");
      iconPlay_mb.classList.remove("action-play-icon");
      $$(".individual_ctn2-song-item").forEach((item, index) => {
        if (index != currentIndex) {
          item.classList.remove("action-play-music");
          item.classList.remove("action-pause-music");
        }
      });
      $$(".song-item-right").forEach((item) => {
        const index = item.getAttribute("data-index");
        if(index == currentIndex) {
          item.querySelector(".individual_ctn2-song-item-img")
              .classList.remove("action-play-music");
          item.querySelector(".individual_ctn2-song-item-img")
              .classList.add("action-pause-music");
        }
      });
      $$(".zing_playlist-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual_ctn2-song-item-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".individual_ctn2-song-item-img")
            .classList.add("action-pause-music");
        }
      });
      $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
        if (index == currentIndex) {
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.add(
            "action-pause-music"
          );
        }
      });
      $$(".the-song-include.free").forEach((item) => {
        let index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".the-song-include-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".the-song-include-img")
            .classList.add("action-pause-music");
        }
      });

      if(_this.changeMusic) {
        listSongs[currentIndex]
          .querySelector(".individual_ctn2-song-item-img")
          .classList.add("action-pause-music");
        listSongs[currentIndex]
          .querySelector(".individual_ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
      _this.playSong = false;
      playListCDF1.classList.remove("action-rotate-play");
      playListCDF1.classList.add("action-rotate-pause");
      playListCDF0.classList.remove("action-rotate");
      playListCDF0.classList.remove("action-play-music");
    };

    audio.onplay = () => {
      animationImg.play();
      animationImg_mb.play();

      if(_this.boolPlaylist) {
        $(".zing_playlist-btn").classList.add("action-playlist-btn");
      } else {
        $(".zing_playlist-btn").classList.remove("action-playlist-btn");
      }
      $(".zing_body").style.paddingBottom = "90px";
      $(".zing_playlist").style.marginBottom = "50px";
      $(".zing-controls").classList.remove("hide");
      $(".expanded").style.bottom = "90px";
      $(".zing_navbar-addList").style.height = 30 + "vh";
      controlCd.style.marginLeft = 10 + "px";
      iconPlay.classList.add("action-play-icon");
      iconPlay_mb.classList.add("action-play-icon");
      _this.colorMusic_PlayList();
      _this.colorMusic();
      $$(".song-item-right").forEach((item) => {
        if (index == currentIndex) {
          item
            .querySelector(".individual_ctn2-song-item-img")
            .classList.add("action-play-music");
          item
            .querySelector(".individual_ctn2-song-item-img")
            .classList.remove("action-pause-music");
        }
      });
      _this.loadPlayListTop_bottom();
      _this.loadColorPlaylistSong();
      _this.loadColorMusicDiscover();
      _this.scrollToActiveSong(".music-color");
      // -------- Top 100 ---------- 
      $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
        if (index == currentIndex) {
          item.classList.add("music-color");
          $$(".zingchart-body-left-song-item-img")[index].classList.add(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-pause-music"
          );
        }
      });
      if(allPlaylist) {
        _this.loadSongRight();
        allPlaylist == false;
      } else {
        _this.loadPlayListTop_bottom();
      }
      $$(".the-song-include.free").forEach((item) => {
        let index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".the-song-include-img")
            .classList.add("action-play-music");
          item
            .querySelector(".the-song-include-img")
            .classList.remove("action-pause-music");
        }
      });
      if(_this.changeMusic) {
        listSongs[currentIndex]
          .querySelector(".individual_ctn2-song-item-img")
          .classList.add("action-play-music");
        listSongs[currentIndex]
          .querySelector(".individual_ctn2-song-item-img")
          .classList.remove("action-pause-music");
      }
      _this.loadColorZingchart();
      _this.loadColorSearch($$(".zing-result-list-item"));
      _this.loadColorSearch($$(".recently-song-item"));
      _this.playSong = true;
    };

    // -------- Xử lý việc tua nhạc ----------
    $(".progress").onclick = (e) => {
      const progressTimeline = $(".progress");
      const progress = progressTimeline.clientWidth;
      const currentTimeClick = e.offsetX;
      const newTime = (currentTimeClick / progress) * 100;
      $(".progressCurrent").style.width = newTime + "%";
      audio.play();
      // có phần trăm rồi thì tính ra thời gian
      audio.currentTime =(newTime * audio.duration) / 100;
      
    }

    //mobile
    $(".progress-mb").onclick = function (e) {
      const progress = this.clientWidth;
      const currentTimeClick = e.offsetX;
      const newTime = (currentTimeClick / progress) * 100;
      $(".progressCurrent-mb").style.width = newTime + "%";
      audio.play();
      // có phần trăm rồi thì tính ra thời gian
      audio.currentTime = (newTime * audio.duration) / 100;
    };
    // auto play nhạc
    audio.ontimeupdate = () => {
      $(".progressCurrent").style.width = (audio.currentTime * 100) / audio.duration + "%";
      $(".progressCurrent-mb").style.width = (audio.currentTime * 100) / audio.duration + "%";
      let minute = Math.floor(audio.currentTime / 60);
      if(minute < 10) {
        $(".minute-mb").innerText = "0" + minute;
        $(".minute").innerText = "0" + minute;
      } else {
        $(".minute-mb").innerText = minute;
        $(".minute").innerText = minute;
      }
      let second = Math.floor(audio.currentTime - minute * 60);
      if (second < 10) {
        $(".second-mb").innerText = "0" + second;
        $(".second").innerText = "0" + second;
      } else {
        $(".second-mb").innerText = second;
        $(".second").innerText = second;
      }
    }
    // Khi kết thúc bài hát
    audio.onended = () => {
      if(isRepeat == true) {
        audio.play();
      } else {
        if(_this.changeMusic == false) {
          currentIndex = 1;
        }
        iconRight.click();
      }
    }
    // Chỉnh âm thanh volume
    const volumeControl = $(".volume-control");
    const volumePause = $(".volume-pause");
    const volumePlay = $(".volume-play");

    volumePlay.onclick = function () {
      $(".volume").classList.add("action-volume");
      audio.volume = 0;
      $(".volume-control-play").style.width = 0 + "%";
    };

    volumePause.onclick = function () {
      $(".volume").classList.remove("action-volume");
      $(".volume-control-play").style.width = _this.percent;
      audio.volume = _this.volumeNumber;
    };

    volumeControl.onclick = (e) => {
      
      console.log(this);
       _this.percent = (e.offsetX * 100) / volumeControl.clientWidth + "%";
       const changeVolume = $(".volume-control-play");
       changeVolume.style.width = _this.percent;
      _this.volumeNumber = (e.offsetX * 100) / volumeControl.clientWidth / 100;
      audio.volume = _this.volumeNumber;
    }

    $(".control-left-title-mb").onclick = () => {
      ZingControl_mb.classList.remove("zing-controls-mb-open");
      $(".zing-controls").classList.remove("hide");
    }
    $(".zing-controls").onclick = (e) => {
      if
      (
        !(
          e.target.closest(".repeat") || e.target.closest(".icon-control-right")
        ) 
      ) 
      {
        ZingControl_mb.classList.add("zing-controls-mb-open");
      }
    }

    // ----------------- Chọn tick all checkbox để thêm hết vào Playlist-----------
    iconSelectionAll.onclick = () => {
      if(allPlaylist) {
        this.querySelector(".checkbox").classList.remove("action-checkbox");
        $$(".individual_ctn2-song-item").forEach((item) => {
          item.classList.add("music-color-selection-Checkbox");
          item
          .querySelector(".checkbox-wrapper")
          .classList.add("checkBox-color-action");
          item
          .querySelector(".checkbox-wrapper .checkbox")
          .add("action-checkbox");
        });
        allPlayList = !allPlayList;
      } else {
        this.querySelector(".checkbox").classList.add("action-checkbox");
        $$(".individual_ctn2-song-item").forEach((item) => {
          item.classList.add("music-color-selection-Checkbox");
          item
            .querySelector(".checkbox-wrapper")
            .classList.add("checkBox-color-action");
          item
            .querySelector(".checkbox-wrapper .checkbox")
            .classList.add("action-checkbox");
        });
        allPlayList = !allPlayList;
      }
    };

    btnAddPlaylist.onclick = () => {
      _this.changeMusic = true;
      _this.activePlaylist();
      playListSongRight.classList.remove("playlist-song-exit");
      playListSongRight.classList.add("playlist-song-open");
      $$(".individual_ctn2-song-item.music-color-selection-Checkbox").forEach((item)=>{
        item
            .querySelector(".checkbox-wrapper")
            .classList.remove("checkBox-color-action");
          item
            .querySelector(".checkbox-wrapper .checkbox")
            .classList.remove("action-checkbox");
          item.classList.remove("music-color-selection-Checkbox");
          item.classList.remove("music-color-selection");
          if (allPlayList) {
            _this.loadSongRight();
          } else {
            _this.loadPlayListTop_bottom();
          }
      });
      alert("Have been added to playlist!");
      playListRight.onclick = function (e) {
        const target = e.target.closest(".song-item-right");
        if (target) {
          if (e.target.closest(".icon-play-song")) {
            target
              .querySelector(".individual_ctn2-song-item-img")
              .classList.remove("action-play-music");
            target
              .querySelector(".individual_ctn2-song-item-img")
              .classList.add("action-pause-music");
            _this.changeMusic = true;
            audio.pause();
          }
          if (e.target.closest(".individual_ctn2-song-item-icon")) {
            target
              .querySelector(".individual_ctn2-song-item-img")
              .classList.add("action-play-music");
            target
              .querySelector(".individual_ctn2-song-item-img")
              .classList.remove("action-pause-music");
            currentIndex = Number(target.getAttribute("data-index"));
            _this.loadCurrentSong();
            _this.changeMusic = true;
            audio.play();
          }
        }
      };
    };

    // -------------- Xử lý xoá danh sách --------- 
    $(".option-delete-playlist").onclick = () => {
      $(".delete-playlist").classList.toggle("hide");
    }

    $(".delete-playlist").onclick = () => {
      $(".list-empty").classList.remove("hide");
      $(".playlist-content").classList.add("hide");
      $(".playlist-content-end").classList.add("hide");
      $(".song-item-right").forEach((item) => {
        item.remove();
      })
      arrPlaylist = [];
      $(".playlist-content span").innerText = "";
      alert("Delete Successful !!!");
    };
  },

  random: function() {
    let rand = Math.floor(Math.random() * this.songs.length - 1);
    currentIndex = rand;
  },

  actionPlayList: function() {
    $(".playlist-content span").innerText = "Next";
    $(".list-empty").classList.add("hide");
    $(".playlist-content").classList.remove("hide");
    $(".individual_ctn1-header-left").classList.remove("action-add-playlist");
    $(".addPlayList .checkbox-wrapper .checkbox").classList.remove("action-checkbox");
  },

  scrollToActiveSong: function (e) {
    setTimeout(() => {
      $(".song-item").scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 300);
  },

  colorMusic: function() {
    $$(".individual_ctn2-song-item").forEach((item, index) => {
      if (index == currentIndex) {
        item.classList.add("music-color");
        item
          .querySelector(".individual_ctn2-song-item-img")
          .classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        item
          .querySelector(".individual_ctn2-song-item-img")
          .classList.remove("action-pause-music");
        item
          .querySelector(".individual_ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
    });
  },

  colorMusicSelection: function() {
    $$(".song-item.individual_ctn2-song-item").forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == this.songSelection) {
        item.classList.add("music-color-selection");
      } else {
        item.classList.remove("music-color-selection");
      }
    });
  },

  // ---------- Xử lý cá nhân --------
  handleEvent: function() {
    // ------------- lựa chọn menu -------------
    $$(".zing_body-selector .list .item").forEach((item, index) => {
      item.onclick = () => {
        if(index < 4) {
          if(isTheme == true) {
            $(".item.zing-body-selector-bgr").classList.remove("zing-body-selector-bgr");
            $(".zing-body-selector-bgr").style.background = "var(--color-white);";
            item.classList.add("zing-body-selector-bgr");
          } else {
            $(".item.zing-body-selector-bgr").classList.remove("zing-body-selector-bgr");
            $(".zing-body-selector-bgr").style.background = "rgba(0, 0, 0, 0.3)";
            item.classList.add("zing-body-selector-bgr");
          }
        }

        if(index == 2) {
          individualCtn3.classList.remove("hide");
          individualCtn2.classList.add("hide");
          individualCtn4.classList.remove("hide");
          individualCtn5.classList.add("hide");
          individualCtn1.classList.add("hide");
        }

        if(index == 3) {
          individualCtn4.classList.add("hide");
          individualCtn2.classList.add("hide");
          individualCtn3.classList.add("hide");
          individualCtn5.classList.remove("hide");
          individualCtn1.classList.add("hide");
        }
        $(".zing_body").style.paddingBottom = "100px";
      };
    });

    $(".zing_header-settings").onclick = function () {
      $(".setting_list").classList.toggle("hide");
    };

    // Xử lý hiện danh sách playlist
    $(".list-song").onclick = () => {
      if (this.isPlayList == false) {
        playListSongRight.classList.remove("playlist-song-open");
        playListSongRight.classList.add("playlist-song-exit");
        this.isPlayList = true;
      } else if (this.isPlayList == true) {
        playListSongRight.classList.add("playlist-song-open");
        playListSongRight.classList.remove("playlist-song-exit");
        this.isPlayList = false;
      }
    }

    // Xử lý close playlist mobile
    $(".playlist-song .icon-close").onclick = () => {
      playListSongRight.classList.remove("playlist-song-open");
      playListSongRight.classList.add("playlist-song-exit");
    }

    // Xử lý open playlist mobile
    $(".playList").onclick = function () {
      playListSongRight.classList.add("playlist-song-open");
      playListSongRight.classList.remove("playlist-song-exit");
    };

    // Xử lý khi ngừơi dùng ấn icon tym
    iconFavorite.onclick = function () {
      this.isFavorite = !this.isFavorite;
      this.classList.toggle("action-favorite", this.isFavorite);
    };
  },

  eventMenu: function() {
    if(this.isMenu == 0) {
      individual.classList.remove("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      zingPlayList.classList.add("hide");
      radioCtn.classList.add("hide");
      $(".info_search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if(this.isMenu == 1) {
      individual.classList.add("hide");
      discover.classList.remove("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      zingPlayList.classList.add("hide");
      radioCtn.classList.add("hide");
      $(".info_search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if(this.isMenu == 2) {
      individual.classList.add("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.remove("hide");
      zingPlayList.classList.add("hide");
      radioCtn.classList.add("hide");
      $(".info_search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if(this.isMenu == 3) {
      individual.classList.add("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      zingPlayList.classList.add("hide");
      radioCtn.classList.remove("hide");
      $(".info_search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else {
      alert("Function does not support now, please select others:v");
    }
  },

  handleMenu: function() {
    // ============ xử lý tác vụ của menu sidebar =========
    const _this = this;
    zingMenu.onclick = (e) => {
      $(".zing_result").classList.add("hide");
      $(".zing_search input").value = "";
      const target = e.target.closest(".zing_navbar-item");
      const index = target.getAttribute("data-index");
      $$(".zing_navbar-item.action-song").forEach((item) => {
        item.classList.remove("action-song");
      });
      _this.isMenu = index;
      _this.eventMenu();
    };
    $(".footer-mb").onclick = (e) => {
      $(".zing_result").classList.add("hide");
      $(".zing_search input").value = "";
      const target = e.target.closest(".zing-navbar-item-mb");
      const index = target.getAttribute("data-index");
      $$(".zing-navbar-item-mb.action-song").forEach((item) => {
        item.classList.remove("action-song");
      });
      _this.isMenu = index;
      _this.eventMenu();
    }
  },

  startPrivate: function () {
    this.handleRenderSlide();
    this.autoChangeImg();
    this.handleRenderSinger();
    this.handleEvent();
    this.handelPlayListSong();
  },

  // * ----------- Xử lý discover -----------
  discover1: [
    { img: "./image/discover/ctn1/0.jpg" },
    { img: "./image/discover/ctn1/1.jpg" },
    { img: "./image/discover/ctn1/2.jpg" },
    { img: "./image/discover/ctn1/3.jpg" },
    { img: "./image/discover/ctn1/4.jpg" },
    { img: "./image/discover/ctn1/5.jpg" },
    { img: "./image/discover/ctn1/6.jpg" },
    { img: "./image/discover/ctn1/7.jpg" },
    { img: "./image/discover/ctn1/8.jpg" },
  ],

  discover3: [
    { 
      img: "./image/discover/ctn3/1.webp",
      title: "Rose's Love Again Story",
      content: "Let's look back at the stories behind the album with Rose",
    },
    { 
      img: "./image/discover/ctn3/2.webp",
      title: "Sing Along US-UK",
      content: "Sing along to these easy-to-remember European and American songs",
    },
    { 
      img: "./image/discover/ctn3/3.webp",
      title: "Love In The Way",
      content: "Bleu,Nicki Minaj",
    },
    { 
      img: "./image/discover/ctn3/4.webp",
      title: "Vietnamese Pop Ballad Highlights",
      content: "Nayeon and the \"most tearful\" Vietnamese Ballads",
    },
  ],

  discover4: [
    {
      img: "./image/discover/ctn4/1.webp",
      title: "V-Pop 9/2022",
      content: "Vương Anh Tú,Sơn Tùng MTP",
    },
    {
      img: "./image/discover/ctn4/2.webp",
      title: "US-UK 9/2022",
      content: "Elton John,Britney Spears,Carly Rae Jepsen",
    },
    {
      img: "./image/discover/ctn4/3.webp",
      title: "K-Pop 9/2022",
      content: "BLACKPINK,IVE,ONEUS",
    },
    {
      img: "./image/discover/ctn4/4.webp",
      title: "C-Pop 9/2022",
      content: "Trần Lập Nông,周深 / Châu Thâm,Christopher Wu",
    },
  ],

  discover5: [
    {
      header: [
        { img: "./image/discover/ctn5/header/1.jpg" },
        { img: "./image/discover/ctn5/header/2.jpg" },
        { img: "./image/discover/ctn5/header/3.jpg" },
      ],
    },
    {
      body: [
        { img: "./image/discover/ctn5/body/0.png" },
        { img: "./image/discover/ctn5/body/1.png" },
        { img: "./image/discover/ctn5/body/2.png" },
        { img: "./image/discover/ctn5/body/3.png" },
        { img: "./image/discover/ctn5/body/4.png" },
        { img: "./image/discover/ctn5/body/5.png" },
        { img: "./image/discover/ctn5/body/6.png" },
      ],
    },
  ],

  listLiveStream: [
    {
      img: "./image/discover/ctn6/0.webp",
      title: "XONE Radio",
      view: "210k listening",
      img2: "./image/discover/ctn6/f0.webp",
    },
    {
      img: "./image/discover/ctn6/1.webp",
      title: "V-POP",
      view: "1k listening",
      img2: "./image/discover/ctn6/f1.webp",
    },
    {
      img: "./image/discover/ctn6/2.webp",
      title: "Chạm",
      view: "2k listening",
      img2: "./image/discover/ctn6/f2.webp",
    },
    {
      img: "./image/discover/ctn6/3.webp",
      title: "On Air",
      view: "320k listening",
      img2: "./image/discover/ctn6/f3.webp",
    },
    {
      img: "./image/discover/ctn6/4.webp",
      title: "Bolero",
      view: "10k listening",
      img2: "./image/discover/ctn6/f4.webp",
    },
    {
      img: "./image/discover/ctn6/5.webp",
      title: "US-UK",
      view: "2.1m listening",
      img2: "./image/discover/ctn6/f5.webp",
    },
    {
      img: "./image/discover/ctn6/0.webp",
      title: "XONE Radio",
      view: "210k listening",
      img2: "./image/discover/ctn6/f0.webp",
    },
    {
      img: "./image/discover/ctn6/1.webp",
      title: "V-POP",
      view: "1k listening",
      img2: "./image/discover/ctn6/f1.webp",
    },
    {
      img: "./image/discover/ctn6/2.webp",
      title: "Chạm",
      view: "2k listening",
      img2: "./image/discover/ctn6/f2.webp",
    },
    {
      img: "./image/discover/ctn6/3.webp",
      title: "On Air",
      view: "320k listening",
      img2: "./image/discover/ctn6/f3.webp",
    },
    {
      img: "./image/discover/ctn6/4.webp",
      title: "Bolero",
      view: "10k listening",
      img2: "./image/discover/ctn6/f4.webp",
    },
    {
      img: "./image/discover/ctn6/5.webp",
      title: "US-UK",
      view: "2.1m listening",
      img2: "./image/discover/ctn6/f5.webp",
    },
  ],

  handleDiscover1: function() {
    const html = this.discover1.map((item, index) => {
      return `
                <div class="discover-ctn1-img
                  ${
                    index == 0
                      ? "discover-ctn1-img-first"
                      : index == 1
                      ? "discover-ctn1-img-second"
                      : index == 2
                      ? "discover-ctn1-img-third"
                      : "discover-ctn1-img-four"
                  }">
                  <img src="${item.img}" alt="">
                </div>
              `;
    });
    const html2 = this.discover1.map((item, index) => {
      return `
            <img class="img ${
                index == 0
                  ? "discover-ctn1-mb-first"
                  : index == 1
                  ? "discover-ctn1-mb-second"
                  : "discover-ctn1-mb-third"
              }"
              " src="${item.img}" alt="">
            `;
    });
    $(".discover-ctn1-mb-img").innerHTML = html2.join("\n");
    $(".discover-ctn1-list-img").innerHTML = html.join("\n");
  },

  handleDiscover2: function() {
   const _this = this;
   const html = _this.songs.map((item, index) => {
    if(index > 0 && index <= 28) {
      return `
              <div class="l-4 m-6 c-12 m-pro-6">
                <div class="the-song">
                  <div class="the-song-include ${item.type}" data-index=${index}>
                    <div class="the-song-include-left">
                      <div class="the-song-include-img  ${item.type}" data-index=${index}>
                        <img src="${item.img}" class="the-song-img discover-ctn2-img" alt="">
                        <div class="the-song-icon-play">
                          <ion-icon name="play"></ion-icon>
                        </div>
                        <div class="icon-play-song">
                          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                        </div>
                      </div>
                      <div class="the-song-info discover-ctn2-info">
                        <div class="song-name">
                          <h1 class="songs color-main">${item.title}</h1>
                          <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg" alt="">
                        </div>
                        <span class="singer color-small">${item.singer}</span>
                        <span class="time color-small">${item.time}</span>
                      </div>
                    </div>
                    <div class="item icon action-hover color-main">
                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                  </div>
                </div>   
             </div> 
            `;
    }
   });
   const album = _this.songs.map((item, index) => {
    if(index > 12 && index <=28) {
      return `
              <div class="l-4 m-6 c-12 m-pro-6">
                <div class="the-song discover-ctn2-album-song">
                  <div class="the-song-include discover-ctn2-album-include" data-index="${index}">
                      <div class="the-song-include-left">
                        <div class="the-song-include-img discover-ctn2-album-include-img">
                          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png" alt="" class="discover-ctn2-cd">
                          <div class="discover-ctn2-album-img">
                            <img src="${item.img}" class="the-song-img" alt="">
                            <div class="the-song-icon-play discover-ctn2-album-icon">
                              <ion-icon name="play"></ion-icon>
                            </div>
                          </div>
                        </div>

                        <div class="the-song-info discover-ctn2-info discover-ctn2-album-info">
                          <div class="song-name">
                            <h1 class="songs color-main">${item.title}</h1>
                          </div>
                          <span class="singer color-small">${item.singer}</span>
                          <span class="time color-small">${item.time}</span>
                        </div>
                      </div>
                      <div class="item icon action-hover color-main">
                          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                      </div>
                  </div>
                </div>   
              </div> 
            `;
    }
   });

   $(".discover-ctn2-body").innerHTML = html.join("\n");
   $(".discover-ctn2-album").innerHTML = album.join("\n");

   $(".discover-ctn2-btn").onclick = (e) => {
    const target = e.target;
    const album = $(".btn-discover2-album");
    const songs = $(".btn-discover2-songs");
    if(target.closest(".btn-discover2-songs")) {
      $(".discover-ctn2-body").classList.remove("hide");
      album.classList.remove("action-btn");
      $(".discover-ctn2-album").classList.add("hide");
      songs.classList.add("action-btn");
    } else if(target.closest(".btn-discover2-album")) {
      $(".discover-ctn2-body").classList.add("hide");
      album.classList.add("action-btn");
      $(".discover-ctn2-album").classList.remove("hide");
      songs.classList.remove("action-btn");
    }
   };
  },

  handleDiscover3_4: function(songs, object) {
    const html = songs.map((item) => {
      return `<li class="l-3 m-4 c-6">
                <div class="individual_ctn3-item discover-ctn3-item">
                  <div class="individual_ctn3-consist">
                    <div class="individual_ctn3-hover">
                      <div class="individual_ctn3-item-img discover-ctn3-img">
                        <img src="${item.img}" alt="">
                        <div class="individual_ctn3-modal">
                          <div class="individual_ctn3-favorite action-favorite">
                            <i class="fa-solid fa-heart"></i>
                          </div>
                          <div class="individual_ctn3-play">
                            <i class="fa-solid fa-play"></i>
                          </div>
                          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                      </div>
                    </div>
                    <h1 class="individual_ctn3-item-title discover-ctn3-item-title color-main">
                      ${item.title}
                    </h1>
                    <div class="individual_ctn3-item-name discover-ctn3-item-des">
                      <small class="color-small">
                        ${item.content}
                      </small>
                    </div>
                 </div>
               </div>
             </li> 
            `;
    });
    object.innerHTML = html.join("\n");
  },

  handleDiscover5: function() {
    const _this = this;
    const header = _this.discover5[0].header.map((item) => {
      return `
              <li class="l-4 m-4">
                <div class="discover-ctn5-img">
                    <img src="${item.img}" alt="">
                </div>
              </li> 
            `;
    });
    const body = _this.discover5[1].body.map((item) => {
      return `
              <div class="discover-ctn5-singer-img l-2-4 m-3">
                <img src="${item.img}"alt="">
              </div>
            `;
    });
    $(".discover-ctn5-header").innerHTML = header.join("\n");
    $(".discover-ctn5-list-singer").innerHTML = body.join("\n");
  },

  handleLiveStream: function(list, object, number) {
    const html = list.map((item, index) => {
      if(index <= number) {
        return `
                <div class="l-2 m-3 c-4">
                  <div class="individual_ctn5-item discover-ctn6-item">
                    <div class="individual_ctn5-hover individual_ctn6-hover">
                      <div class="individual_ctn5-img discover-ctn6-img">
                        <img src="${item.img}" alt="">
                        <div class="individual_ctn2-song-item-icon modal-icon-play">
                          <ion-icon name="play"></ion-icon>
                        </div>
                      </div>
                      <div class="discover-ctn6-img-small">
                        <img src="${item.img2}" alt="">
                      </div>
                    </div>
                    <div class="individual_ctn5-info discover-ctn6-info color-main">
                      <h1>${item.title}</h1>
                      <span class="color-small">${item.view}</span>
                    </div>
                  </div>
                </div>
              `;
      }
    });
    object.innerHTML = html.join("\n");
  },

  handleDiscover: function() {
    const _this = this;
    const listImg_discover = $$(".discover-ctn1-img");
    changeDiscover = function() {
      // Handle với web
      listImg_discover.forEach((item, index) => {
        if(index == _this.indexDiscover) {
          item.classList.replace(
            "discover-ctn1-img-second",
            "discover-ctn1-img-first"
          );
        } else if(index == _this.indexDiscover + 1) {
          item.classList.replace(
            "discover-ctn1-img-third",
            "discover-ctn1-img-second"
          );
        } else if(index == _this.indexDiscover + 2) {
          item.classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        } else {
          item.classList.replace(
            "discover-ctn1-img-first",
            "discover-ctn1-img-four"
          );
        }

        if(_this.indexDiscover == listImg_discover.length - 1) {
          listImg_discover[0].classList.replace(
            "discover-ctn1-img-third",
            "discover-ctn1-img-second"
          );
          listImg_discover[1].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        } else if(_this.indexDiscover == listImg_discover.length - 2) {
          listImg_discover[0].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        }
        
        if(_this.indexDiscover == listImg_discover.length) {
          listImg_discover[0].classList.replace(
            "discover-ctn1-img-second",
            "discover-ctn1-img-first"
          );
          listImg_discover[0].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-first"
          );
          listImg_discover[1].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-second"
          );
          listImg_discover[1].classList.replace(
            "discover-ctn1-img-third",
            "discover-ctn1-img-second"
          );
          listImg_discover[2].classList.replace(
            "discover-ctn1-img-four",
            "discover-ctn1-img-third"
          );
        }
      });

      // Handle với mobile
      const listImg_disCover_mb = $$(".discover-ctn1-mb-img .img");
      changeDiscover_mb = function () {
        listImg_disCover_mb.forEach((item, index) => {
          if (index == _this.indexDiscover - 1) {
            item.classList.replace(
              "discover-ctn1-mb-second",
              "discover-ctn1-mb-first"
            );
          } else if (index == _this.indexDiscover) {
            item.classList.replace(
              "discover-ctn1-mb-third",
              "discover-ctn1-mb-second"
            );
          } else {
            item.classList.replace(
              "discover-ctn1-mb-first",
              "discover-ctn1-mb-third"
            );
          }
        });
        if (_this.indexDiscover == listImg_discover.length) {
          listImg_disCover_mb[0].classList.replace(
            "discover-ctn1-mb-third",
            "discover-ctn1-mb-second"
          );
        } else if (_this.indexDiscover == listImg_disCover_mb.length + 1) {
          listImg_disCover_mb[0].classList.replace(
            "discover-ctn1-mb-second",
            "discover-ctn1-img-first"
          );
          listImg_disCover_mb[1].classList.replace(
            "discover-ctn1-mb-third",
            "discover-ctn1-mb-second"
          );
        }
        if (_this.indexDiscover >= listImg_disCover_mb.length) {
          _this.indexDiscover = 0;
        }
      };
    }
    $(".discover-ctn1-left").onclick = () => {
      _this.indexDiscover++;
      changeDiscover();
    }
    $(".discover-ctn1-right").onclick = () => {
      _this.indexDiscover++;
      changeDiscover();
    }

    autoChangeDiscover = function() {
      _this.indexDiscover++;
      changeDiscover();
      changeDiscover_mb();
      setTimeout("autoChangeDiscover()", 4000);
    }
    autoChangeDiscover();

    $(".discover-ctn2-body").onclick = function (e) {
      const target = e.target.closest(".the-song-include-img.free");
      if (target) {
        let index = target.getAttribute("data-index");
        if (e.target.closest(".the-song-icon-play")) {
          currentIndex = index;
          _this.loadColorMusicDiscover();
          _this.loadCurrentSong();
          audio.play();
          target.classList.add("action-play-music");
          target.classList.remove("action-pause-music");
        } else if (e.target.closest(".icon-play-song")) {
          audio.pause();
          target.classList.remove("action-play-music");
          target.classList.add("action-pause-music");
        }
      } else if (e.target.closest(".the-song-include-img.vip")) {
        if (e.target.closest(".the-song-icon-play")) {
          $(".modal-vip").classList.remove("hide");
          modal.classList.remove("hide");
        }
      }
    };

    // ------------ click Songs VIP ----------
    $$(".the-song-include.vip").forEach((item) => {
      item.ondblclick = () => {
        $(".modal-vip").classList.remove("hide");
        modal.classList.remove("hide");
      }
    })

    $$(".the-song-include.free").forEach((item) => {
      item.ondblclick = () => {
        currentIndex = item.getAttribute("data-index");
        _this.loadCurrentSong();
        _this.loadColorMusicDiscover();
        audio.play();
        _this.changeMusic = false;
        _this.boolPlaylist = false;
      };
    });

    // ------- thoát modal --------
    $(".modal-vip").onclick = (e) => {
      if(e.target.closest(".vip-ctn")) {
        if(e.target.closest(".vip-ctn-icon")) {
          $(".modal-vip").classList.add("hide");
          modal.classList.add("hide");
        }
      } else {
        $(".modal-vip").classList.add("hide");
        modal.classList.add("hide");
      }
    }
  },

  loadColorMusicDiscover: function() {
    $$(".the-song-include.free").forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == currentIndex) {
        item
          .querySelector(".the-song-include-img")
          .classList.add("action-play-music");
        item.classList.add("music-color-selection");
      } else {
        item.classList.remove("music-color-selection");
        item
          .querySelector(".the-song-include-img")
          .classList.remove("action-play-music");
        item
          .querySelector(".the-song-include-img")
          .classList.remove("action-pause-music");
      }
    });
  },

  startDiscoverCtn: function() {
    this.handleDiscover1();
    this.handleDiscover2();
    this.handleDiscover3_4(this.discover3, $(".discover-ctn3-body"));
    this.handleDiscover3_4(this.discover4, $(".discover-ctn4-body"));
    this.handleDiscover5();
    this.handleLiveStream(this.listLiveStream, $(".discover-ctn6-body"), 5);
    this.handleDiscover();
  },

  // ============== Xử lý thao tác Zingchart ==========

  zingChartTop100: function() {
    const _this = this;
    const html = _this.songs.map((item, index) => {
      return `
              <li class="song-item zingchart-body-item" data-index=${index}> 
                <h1 class="zingchart-number
                        ${
                          index == 0
                            ? "zingchart-body-no1"
                            : index == 1
                            ? "zingchart-body-no2"
                            : index == 2
                            ? "zingchart-body-no3"
                            : ""
                        }">${index + 1}
                </h1>
                <h1 class="zingchart-body-icon color-small">
                  <i class="fa-solid fa-minus"></i>
                </h1>
                <div class="zingchart-body-ctn">
                  <div class="zingchart-body-left">
                    <div class="individual_ctn2-song-item-img zingchart-body-left-song-item-img">
                      <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                      <div class="individual_ctn2-song-item-icon" data-index=${index}>
                        <ion-icon name="play"></ion-icon>
                      </div>
                      <div class="icon-play-song icon-play-song-top ">
                        <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                      </div>
                    </div>
                    <div class="individual_ctn2-song-title zingchart">
                      <span class="color-title">${item.title}</span>
                      <small class="color-small">
                        ${item.singer.split(",").map((i) =>
                          `<a class="singer color-small"href="">${i}</a>`
                        )}
                      </small>
                    </div>
                  </div>
                  <div class="zingchart-body-main color-small c-0">
                    <span class="title">${item.title}</span>
                    <span class="singer">(singer)</span>
                  </div>
                  <div class="zingchart-body-right">
                    <div class="zingchart-body-right-icon">
                      <div class="zingchart-icon icon-mic color-title">
                        <i class="fa-sharp fa-solid fa-microphone"></i>
                      </div>
                      <div class="icon-favorite color-small "data-index=${index}>
                        <div class="no-favorite zingchart-icon icon-tym action-hover">
                          <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="yes-favorite zingchart-icon icon-tym action-hover">
                          <ion-icon name="heart"></ion-icon>
                        </div>
                      </div>
                      <div class="zingchart-icon color-title c-0">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                      </div>
                    </div>
                    <span class="zingchart-song-time color-small">
                      ${item.duration}
                    </span>
                  </div>
                </div>
              </li> 
          `;
    });
    $(".zingchart-body-list").innerHTML = html.join("\n");
  },

  zingchartHeight: true,

  loadZingchartFooter: function(objects, start, end) {
    let i = 1;
    const html = this.songs.map((item, index) => {
      if(index >= start && index <= end) {
        return `
                <li class="song-item zingchart-body-item zingchart-footer-item" data-index=${index}> 
                  <h1 class="zingchart-number 
                      ${
                        index == start
                          ? "zingchart-body-no1"
                          : index == start + 1
                          ? "zingchart-body-no2"
                          : index == start + 2
                          ? "zingchart-body-no3"
                          : ""
                      }">${i++}
                  </h1>
                  <h1 class="zingchart-body-icon color-small">
                    <i class="fa-solid fa-minus"></i>
                  </h1>
                  <div class="zingchart-body-ctn">
                    <div class="zingchart-body-left zingchart-footer--body-left">
                      <div class="individual_ctn2-song-item-img">
                        <img src="${item.img}" alt="" class="individual_ctn2-song-img">
                        <div class="individual_ctn2-song-item-icon"data-index=${index}>
                          <ion-icon name="play"></ion-icon>
                        </div>
                        <div class="icon-play-song">
                          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                        </div>
                      </div>
                      <div class="individual_ctn2-song-title zingchart-footer-title">
                        <span class="color-title">${item.title}</span>
                        <small class="color-small">
                          ${item.singer.split(",").map((i) =>
                            `<a class="singer color-small"href="">${i}</a>`
                          )}
                        </small>
                      </div>
                    </div>
                    <div class="zingchart-body-right">
                      <div class="zingchart-body-right-icon">
                        <div class="zingchart-icon zingchart-footer-icon icon-mic color-title">
                          <i class="fa-sharp fa-solid fa-microphone"></i>
                        </div>
                        <div class="zingchart-icon  zingchart-footer-icon color-title ">
                          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </div>
                      </div>
                      <span class="zingchart-song-time color-small">
                        ${item.duration}
                      </span>
                    </div>
                  </div>
                </li>
              `;
      };
    });
    objects.innerHTML = html.join("\n");
  },

  handleEventZingchart: function() {
    const _this = this;
    const zingchartBody = $(".zingchart-body-list");
    const zingchartBodyList = $$(".zingchart-body-list .zingchart-body-item");

    // -------- Hiển thị top 100 ----------
    $(".btn-top-100").onclick = () => {
      _this.zingchartHeight = !_this.zingchartHeight;
      $(".zingchart-body-list-height").classList.toggle("zingchart-height", _this.zingchartHeight);
      if(_this.zingchartHeight) {
        this.innerText = "See Top 100";
      } else {
        this.innerText = "See less";
      }
    }

    zingchartBodyList.forEach((item, index) => {
      item.ondblclick = function () {
        currentIndex = index;
        _this.loadCurrentSong();
        _this.loadColorZingchart();
        _this.deleteColorMusic = false;
        _this.boolPlaylist = false;
        audio.play();
      };
    });

    zingchartBody.onclick = (e) => {
      const iconPlay = e.target.closest(".icon-play-song");
      const iconPause = e.target.closest(".individual_ctn2-song-item-icon");
      if(iconPlay) {
        audio.pause();
      } else if(iconPause) {
        let index = Number(
          e.target
          .closest(".individual_ctn2-song-item-icon")
          .getAttribute("data-index")
        );
        currentIndex = index;
        _this.loadCurrentSong();
        -this.loadColorZingchart();
        audio.play();
        _this.deleteColorMusic = false;
      } else if(e.target.closest(".icon-favorite")) {
        let isBool = true;
        e.target.closest(".icon-favorite").classList.toggle("action-favorite");
        let index = Number(
          e.target.closest(".icon-favorite").getAttribute("data-index")
        );
      }
      zingchartBodyList.forEach((item, index) => {
        if(index != currentIndex) {
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-pause-music"
          );
        }
      })
    }
  },

  loadColorZingchart: function() {
    $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
      if (index == currentIndex) {
        item.classList.add("music-color");
        $$(".zingchart-body-left-song-item-img")[index].classList.add(
          "action-play-music"
        );
      } else {
        item.classList.remove("music-color");
        $$(".zingchart-body-left-song-item-img")[index].classList.remove(
          "action-play-music"
        );
      }
    });
  },

  loadColorPlaylistSong: function() {
    $$(".zing-playList-item").forEach((item, i) => {
      const index = item.getAttribute("data-index");
      if (index == currentIndex) {
        item.classList.add("music-color");
        $$(".zing-playList-body-left-img")[i].classList.add(
          "action-play-music"
        );
        playListCDF1.classList.add("action-rotate-play");
        playListCDF1.classList.remove("action-rotate-pause");
        playListCDF0.classList.add("action-rotate");
        playListCDF0.classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        $$(".zing-playList-body-left-img")[i].classList.remove(
          "action-play-music"
        );
        $$(".zing-playList-body-left-img")[i].classList.remove(
          "action-pause-music"
        );
      }
    });
  },

  startZingchart: function() {
    this.zingChartTop100();
    this.loadZingchartFooter(
      $(".zingchart-footer-ctn1 .zingchart-footer-list"),
      0,
      5
    );
    this.loadZingchartFooter(
      $(".zingchart-footer-ctn2 .zingchart-footer-list"),
      9,
      14
    );
    this.loadZingchartFooter(
      $(".zingchart-footer-ctn3 .zingchart-footer-list"),
      14,
      19
    );
  },

  // ------- Radio -------

  schedule: [
    {
      img: "./image/scChedule/f3.webp",
      content: `Quẩy "cháy phố" cùng EDM`,
      time: "09:00 - 10:00",
    },
    {
      img: "./image/scChedule/f4.webp",
      content: `Empowered Muse Podcast`,
      time: "10:00 - 11:00",
    },
    {
      img: "./image/scChedule/f5.webp",
      content: `Đắp chăn nằm nghe Tun kể`,
      time: "11:00 - 12:00",
    },
    {
      img: "./image/scChedule/1.webp",
      content: `Âm nhạc 24 giờ`,
      time: "12:00 - 13:00",
    },
    {
      img: "./image/scChedule/2.webp",
      content: `Nite XONE - Healing with music`,
      time: "13:00 - 14:00",
    },
    {
      img: "./image/scChedule/3.webp",
      content: `Nhạc Việt nổi bật`,
      time: "15:00 - 16:00",
    },
    {
      img: "./image/scChedule/4.webp",
      content: `BREAKFAST XONE`,
      time: "17:00 - 18:00",
    },
    {
      img: "./image/scChedule/5.webp",
      content: `You call, XONE Play`,
      time: "19:00 - 20:00",
    },
    {
      img: "./image/scChedule/f1.webp",
      content: `Âm nhạc hot hit thế hệ 8X 9X`,
      time: "21:00 - 22:00",
    },
    {
      img: "./image/scChedule/f2.webp",
      content: `DIY MUSIC STATION`,
      time: "23:00 - 24:00",
    },
  ],

  radioImg: [
    {
      img: "./image/radio/1.webp",
      title: "How2Money x Doctor",
    },
    {
      img: "./image/radio/2.webp",
      title: "Hustle Muscle",
    },
    {
      img: "./image/radio/3.webp",
      title: "The Garage ",
    },
    {
      img: "./image/radio/4.webp",
      title: "The Jobs",
    },
  ],

  numberRadioCtn: 0,

  loadSchedule: function(object, list , start, end) {
    const html = list.map((item, index) => {
      if(index >= start && index <= end) {
        return `
              <div class="item">
                <img src="${item.img}" alt="">
                <div class="content">
                  <h1 class="title color-title">${item.content}</h1>
                  <span class="time color-small">${item.time}</span>
                </div>
              </div>
            `;
      }
    });
    const time = list.map((item, index) => {
      return `
              <div class="point color-main">
                ${index == 0 ? "" : index + 12 + ":00"}
              </div>
            `;
    });
    $(".time-line").innerHTML = time.join("\n");
    object.innerHTML = html.join("\n");
  },

  renderRadio: function(object, list) {
    const html = list.map((item) => {
      return `
              <li class="l-3 c-6">
                <div class="individual_ctn3-item discover-ctn3-item">
                  <div class="individual_ctn3-consist RadioCtn-title">
                    <div class="individual_ctn3-hover">
                      <div class="individual_ctn3-item-img discover-ctn3-img">
                        <img src="${item.img}" alt="">
                      </div>
                    </div>
                    <h1 class="individual_ctn3-item-title color-main">
                      ${item.title}
                    </h1>
                  </div>
                </div>
              </li> 
            `;
    });
    object.innerHTML = html.join("\n");
  },

  handleRadio: function() {
    const _this = this;
    $(".RadioCtn-ctn1-right").onclick = () => {
      $(".RadioCtn-ctn1").classList.add("action-change");
    };
    $(".RadioCtn-ctn1-left").onclick = () => {
      $(".RadioCtn-ctn1").classList.remove("action-change");
    };

    const iconRight = $(".RadioCtn-ctn2-right .icon.icon-right");
    const iconLeft = $(".RadioCtn-ctn2-right .icon.icon-left");

    iconRight.onclick = () => {
      this.numberRadioCtn++;
      if (this.numberRadioCtn >= this.schedule.length / 5) {
        iconRight.classList.add("hide");
      }
      if (this.numberRadioCtn >= 1) {
        iconLeft.classList.remove("hide");
      }
      $(".RadioCtn-ctn2-right .total").style.transform = `translateX(-${
        _this.numberRadioCtn * 100
      }%)`;
    };

    iconLeft.onclick = () => {
      this.numberRadioCtn--;
      if (this.numberRadioCtn <= 0) {
        iconLeft.classList.add("hide");
      }
      if (this.numberRadioCtn < this.schedule.length / 5) {
        iconRight.classList.remove("hide");
      }
      $(".RadioCtn-ctn2-right .total").style.transform = 
        `translateX(-${_this.numberRadioCtn * 100 }%)`;
    }
  },

  startRadio: function() {
    this.handleLiveStream(this.listLiveStream, $(".RadioCtn-ctn1-body"),this.listLiveStream.length);
    this.loadSchedule($(".programs"), this.schedule, 0, 5);
    this.loadSchedule($(".programs-bottom"), this.schedule, 5, 10);
    this.renderRadio($(".RadioCtn-ctn4 .body .list"), this.radioImg);
    this.handleRadio();
  },

  handleTheme: function() {
    // ---------Themes--------
    this.handleRenderSlide();
    this.openModal();
    this.selectionTheme();
    // --------Menu-----------
    this.handleMenu();
  },

  loadConfig: function () {
    isShuffle = this.config.isShuffle;
    isRepeat = this.config.isRepeat;
    iconShuffle.classList.toggle('.action-controls', isShuffle);
    iconRepeat.classList.toggle('.action-controls', isRepeat);
    iconShuffle_mb.classList.toggle("action-controls", isShuffle);
    iconRepeat_mb.classList.toggle("action-controls", isRepeat);
  },

  start: function () {
    // Load config
    this.loadConfig();
    // Xử lý render ra giao diện phần main screen bài hát
    this.loadSongs();
    // Render bài hát hiện tại
    this.loadCurrentSong();
    // Render giao diện Playlist
    this.loadPlaylistSongs();
    // Xử lý tác vụ để nhạc loading
    this.handleMusic();
    // Xử lý thanh Search 
    this.handleSearch();
    // Xử lý tác vụ với chuyển theme
    this.handleTheme();
    // ---------- Individual --------
    this.startPrivate();
    // ---------- Explore ----------
    this.startDiscoverCtn();
    // --------- Zingchart ---------
    this.startZingchart();
    // --------- Radio -----------
    this.startRadio();
  }
}

app.start();




