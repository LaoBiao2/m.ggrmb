<template>
    <div class="header-box">
        <div class="header">
            <div class="content clearfix">
                <div class="header-box">
                    <div class="logo"><img src="/static/images/logo.png" alt=""></div>
                    <a href="javascript:;" class="a-menu" @click="openMenu()"></a>
                    <div class="menu menu-content" :class="{active:menuId}">
                        <a href="javascript:;" class="a-register">注册
                            <i @click="closeMenu()"></i>
                        </a>
                        <ul class="menu-ul">
                            <li v-for="(val, index) in items" v-bind:key="index" :class="{on: index == selected}">
                                <a class="fir-a" @click="showMenuS(index)">{{val.name}}
                                    <i v-if="val.secmenu != ''"></i>
                                </a>
                                <div class="sec-menu" v-if="val.secmenu != ''">
                                    <span v-for="(val2, index2) in val.secmenu" v-bind:key="index2">
                                        <router-link :to="val2.securl">{{val2.secname}}
                                        </router-link>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="menu menu-bg" :class="{active:menuId}" @click="closeMenu()" @touchstart="closeMenu()"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vueHeader",
    data() {
        return {
            menuId: false,
            selected: 0,
            items: [{
                url: '/',
                name: '首页',
                secmenu: []
            }, {
                url: '/about',
                name: '关于金盛',
                secmenu: [{
                    securl: '/about/introduce',
                    secname: '品牌介绍'
                }, {
                    securl: '/about/protocol',
                    secname: '协议声明'
                }, {
                    securl: '/about/notice',
                    secname: '网站公告'
                }, {
                    securl: '/about/invest',
                    secname: '投资保障'
                }]
            }, {
                url: '/research',
                name: '研究中心',
                secmenu: [{
                    securl: '/research/news1',
                    secname: '行情分析'
                }, {
                    securl: '/research/news2',
                    secname: '实盘策略'
                }, {
                    securl: '/research/news3',
                    secname: '金银课堂'
                }, {
                    securl: '/research/news4',
                    secname: '市场动态'
                }]
            }, {
                url: '/product',
                name: '交易规则',
                secmenu: [{
                    securl: '/product/introduce',
                    secname: '产品介绍'
                }, {
                    securl: '/product/rule',
                    secname: '金银规则'
                }, {
                    securl: '/product/term',
                    secname: '交易术语'
                }]
            }, {
                url: '/download',
                name: '平台下载',
                secmenu: [{
                    securl: '/download',
                    secname: '真实开户'
                }, {
                    securl: '/download',
                    secname: '模拟开户'
                }, {
                    securl: '/download',
                    secname: '软件下载'
                }]
            }, {
                url: '/product',
                name: '代理申请',
                secmenu: []
            },]
        }
    },
    mounted() {
        // window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        openMenu() {
            this.menuId = true;
        },
        closeMenu() {
            this.menuId = false;
        },
        showMenuS(i) {
            if (this.selected == i) {
                this.selected = 0;
            } else {
                this.selected = i;
            }
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 1.26rem;
    line-height: 1.26rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    border-bottom: 0.06rem solid #e98024;
    background-color: #2a3052;
    .header-box {
        height: 1.26rem;
        .logo {
            width: 3.27rem;
            height: 0.62rem;
            margin: 0.32rem;
            float: left;
            img {
                width: 100%;
                display: block;
            }
        }
        a.a-menu {
            width: 0.4rem;
            height: 0.34rem;
            float: right;
            display: block;
            color: #fff;
            background: url(/static/images/common_icon.png) 0 0 no-repeat;
            background-size: 2.83rem 1.14rem;
            margin: 0.46rem 0.6rem;
        }
        .menu-content {
            // display: none;
            position: fixed;
            top: 0;
            right: 0;
            width: 5.5rem;
            height: 100%;
            overflow: hidden;
            z-index: 101;
            background-color: #161c40;
            transform: translateX(100%);
            transition: all 0.3s;
            a.a-register {
                height: 1.3rem;
                display: block;
                line-height: 1.3rem;
                font-size: 0.3rem;
                color: #fff;
                border-bottom: 0.02rem solid #666;
                padding: 0 0.3rem 0 0.5rem;
                box-sizing: border-box;
                i {
                    width: 0.28rem;
                    height: 0.28rem;
                    display: block;
                    float: right;
                    background: url(/static/images/common_icon.png) -0.68rem -0.03rem
                        no-repeat;
                    background-size: 2.83rem 1.14rem;
                    margin-top: 0.5rem;
                }
            }
            ul {
                height: 90%;
                overflow: scroll;
                li {
                    line-height: 1.26rem;
                    display: block;
                    a.fir-a {
                        color: #fff;
                        height: 1.26rem;
                        line-height: 1.26rem;
                        font-size: 0.3rem;
                        padding: 0 0.5rem;
                        display: flex;
                        align-content: center;
                        justify-content: space-between;
                        i {
                            width: 0.17rem;
                            height: 0.32rem;
                            display: inline-block;
                            margin-top: 0.4rem;
                            background: url(/static/images/common_icon.png) -1.97rem -0.01rem
                                no-repeat;
                            background-size: 2.83rem 1.14rem;
                            transition: all 0.3s;
                        }
                    }
                    .sec-menu {
                        width: 100%;
                        // height: 0;
                        max-height: 0;
                        overflow: hidden;
                        background-color: #2a3052;
                        transition: all 0.5s;
                        span {
                            display: block;
                            a {
                                display: block;
                                font-size: 0.3rem;
                                line-height: 1.26rem;
                                cursor: pointer;
                                color: #fff;
                                padding-left: 0.5rem;
                            }
                        }
                    }
                }
                li.on {
                    a.fir-a {
                        i {
                            transform: rotate(90deg);
                            -ms-transform: rotate(90deg);
                            -webkit-transform: rotate(90deg);
                        }
                    }
                    .sec-menu {
                        // max-height: max-content;
                        max-height: 6.3rem;
                        // display: block;
                    }
                }
            }
        }
        .menu-content.active {
            transform: translateX(0);
        }
        .menu-bg {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            background-color: rgba($color: #000, $alpha: 0.5);
        }
        .menu-bg.active {
            display: block;
        }
    }
}
</style>
