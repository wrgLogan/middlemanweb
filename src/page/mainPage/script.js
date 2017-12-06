import MainHeader from '@/components/MainHeader.vue'

export default {
    components: {
        MainHeader
    },
    mounted() {

    },
    methods: {
        onScroll() {
            var banners = document.getElementsByClassName('banner');
            var $main = document.getElementById('main');
            console.log(banners);
            var scrollTop = $main.scrollTop;
            var bannerHeight = banners[0].offsetHeight;
            var windowHeight = document.body.offsetHeight;

            for (var banner of banners) {
                console.log(banner.offsetTop - scrollTop - 66 );
                if ((banner.offsetTop - scrollTop + 166 ) < windowHeight) {
                    banner.setAttribute('active', '');
                }
            }
        }
    }
}