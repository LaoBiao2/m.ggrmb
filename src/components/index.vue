<template>
    <div class="index content-top">
        <div class="banner">
            <h2>金盛贵金属代理平台</h2>
            <p>选择金盛GGFSG 您事业的转折点</p>
            <div class="btn-box">
                <a href="javascript:;" class="servie-a">代理业务咨询</a>
                <a href="javascript:;" class="account-a">开立免费账户</a>
            </div>
        </div>
        <div class="box b1">
            <h4>我们的优势</h4>
            <div class="b1-swiper">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="slider">
                                <i></i>
                                <b>实力雄厚</b>
                                <span>FSP&FSA<br/>双重监管</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slider">
                                <i></i>
                                <b>强大平台</b>
                                <span>MT4交易平台<br/>支持多种客户端</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slider">
                                <i></i>
                                <b>成本特低</b>
                                <span>只需100美元<br/>即可交易</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slider">
                                <i></i>
                                <b>特快存取</b>
                                <span>特快网上存取<br/>2小时到账</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slider">
                                <i></i>
                                <b>投资保障</b>
                                <span>银行资金监管<br/>保障财富安全</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="slider">
                                <i></i>
                                <b>专业客服</b>
                                <span>24小时专业客服<br/>快速解决</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev swiper-button"></div>
                    <div class="swiper-button-next swiper-button"></div>
                </div>
            </div>
        </div>
        <div class="box b2">
            <h4>行情资讯</h4>
            <ul class="nav-box">
                <li v-for="(nav, index) in navs" v-bind:key="index" @click="choseTab(index)" :class="{active:index == navId}">{{nav.nname}}</li>
            </ul>
            <div class="nav-tab-c">
                <ul class="tab-box" v-for="(tab, i) in tabs" v-bind:key="i" v-if="i == navId">
                    <li v-for="(tab2, i2) in tab" v-bind:key="i2">
                        <a href="javascript:;" class="clearfix">
                            <div class="left-box">
                                <span class="title-span">{{tab2.title}}</span>
                                <p>{{tab2.content}}</p>
                                <span class="date-span">{{tab2.date}}</span>
                            </div>
                            <div class="img-box">
                                <img :src=tab2.imgUrl alt="" srcset="">
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="more-box">
                    <a href="javascript:;">查看更多</a>
                </div>
            </div>

        </div>
        <div class="box b3">
            <h4>MT4平台优势</h4>
            <span>国际主流 覆盖全球90%交易量</span>
            <div class="b3-content clearfix">
                <div class="left-box">
                    <ul class="ul-1">
                        <li>
                            <i></i>功能齐全
                        </li>
                        <li>
                            <i></i>操作简单
                        </li>
                        <li>
                            <i></i>下单灵活
                        </li>
                    </ul>
                    <ul class="ul-2">
                        <li class="li-1">
                            <a href="javascript:;">
                                <i></i>iPhone</a>
                        </li>
                        <li class="li-2">
                            <a href="javascript:;">
                                <i></i>Android</a>
                        </li>
                    </ul>
                </div>
                <div class="img-box">
                    <img src="/static/images/index/b3_img.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    name: 'Index',
    data() {
        return {
            navId: 0,
            navs: [{
                nId: 1,
                nname: '行情分析'
            }, {
                nId: 2,
                nname: '市场动态'
            }, {
                nId: 3,
                nname: '实盘策略'
            }, {
                nId: 4,
                nname: '金银课堂'
            },],
            tabs: [
                [{
                    title: '111欧洲移民：工作之余的轻···',
                    content: '在加拿大和美国不断提高门槛不情况下，欧洲移民越来越受到的关注。想要洲移民越的越到···',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img1.jpg'
                }, {
                    title: '加拿大又要“搞事情”',
                    content: '加拿大是出了名的福利优渥，最近加拿大政府又开始发放福利从2017年12月',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img2.jpg'
                }, {
                    title: '购房移民西班牙，为孩子···',
                    content: '据数据统计，移民西班牙的客户中，大部分是为了子女接受西班牙优质的教',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img3.jpg'
                }], [{
                    title: '222欧洲移民：工作之余的轻···',
                    content: '在加拿大和美国不断提高门槛不情况下，欧洲移民越来越受到的关注。想要洲移民越的越到···',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img1.jpg'
                }, {
                    title: '加拿大又要“搞事情”',
                    content: '加拿大是出了名的福利优渥，最近加拿大政府又开始发放福利从2017年12月',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img2.jpg'
                }, {
                    title: '购房移民西班牙，为孩子···',
                    content: '据数据统计，移民西班牙的客户中，大部分是为了子女接受西班牙优质的教',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img3.jpg'
                }], [{
                    title: '333欧洲移民：工作之余的轻···',
                    content: '在加拿大和美国不断提高门槛不情况下，欧洲移民越来越受到的关注。想要洲移民越的越到···',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img1.jpg'
                }, {
                    title: '加拿大又要“搞事情”',
                    content: '加拿大是出了名的福利优渥，最近加拿大政府又开始发放福利从2017年12月',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img2.jpg'
                }, {
                    title: '购房移民西班牙，为孩子···',
                    content: '据数据统计，移民西班牙的客户中，大部分是为了子女接受西班牙优质的教',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img3.jpg'
                }], [{
                    title: '444欧洲移民：工作之余的轻···',
                    content: '在加拿大和美国不断提高门槛不情况下，欧洲移民越来越受到的关注。想要洲移民越的越到···',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img1.jpg'
                }, {
                    title: '加拿大又要“搞事情”',
                    content: '加拿大是出了名的福利优渥，最近加拿大政府又开始发放福利从2017年12月',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img2.jpg'
                }, {
                    title: '购房移民西班牙，为孩子···',
                    content: '据数据统计，移民西班牙的客户中，大部分是为了子女接受西班牙优质的教',
                    date: '2018-07-25',
                    imgUrl: '/static/images/index/img3.jpg'
                }]
            ]
        }
    },
    mounted() {
        var b1Swiper = new Swiper('.b1-swiper .swiper-container', {
            loopedSlides: 6,
            loop: true,
            centeredSlides: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
        })
    },
    methods: {
        choseTab(index) {
            this.navId = index;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index {
    line-height: 1;
    text-align: center;
    .banner {
        padding: 1.7rem 0 1.2rem;
        background: url(/static/images/banner_img.png) no-repeat center;
        background-size: contain;
        h2 {
            font-size: 0.66rem;
            color: #2a3052;
            margin-bottom: 0.92rem;
        }
        p {
            font-size: 0.32rem;
            color: #333;
            margin-bottom: 1.28rem;
        }
        .btn-box {
            font-size: 0;
            a {
                width: 3rem;
                height: 0.8rem;
                line-height: 0.8rem;
                border-radius: 0.05rem;
                background-color: #2a3052;
                font-size: 0.3rem;
                color: #fff;
                display: inline-block;
            }
            .account-a {
                background-color: #e98024;
                margin-left: 0.48rem;
            }
        }
    }
    .box {
        width: 100%;
        display: block;
        margin: 0 auto;
        h4 {
            color: #e98024;
            font-size: 0.36rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
        }
        span {
            display: block;
        }
    }
    .b1 {
        width: 7.1rem;
        margin: 0 auto 0.35rem;
        .b1-swiper {
            width: 100%;
            i {
                width: 0.82rem;
                height: 0.82rem;
                display: block;
                margin: 0.15rem auto 0.7rem;
                background: url(/static/images/index/index_icon.png) 0 0
                    no-repeat;
                background-size: 9.02rem 2.28rem;
            }
            b {
                font-size: 0.36rem;
                color: #333;
                display: block;
            }
            span {
                display: block;
                line-height: 0.52rem;
                font-size: 0.28rem;
                color: #333;
            }
            .swiper-container {
                padding-bottom: 1rem;
                .slider {
                    width: 4.76rem;
                    display: block;
                    margin: 0 auto;
                }
                .swiper-button {
                    width: 0.86rem;
                    height: 0.86rem;
                    background: url(/static/images/index/index_icon.png) 0 -1.42rem
                        no-repeat;
                    background-size: 9.02rem 2.28rem;
                }
                .swiper-button-next {
                    background-position-x: -1.53rem;
                }
            }
        }
    }
    .b2 {
        ul.nav-box {
            width: 7.1rem;
            margin: 0 auto;
            font-size: 0;
            padding-bottom: 0.35rem;
            border-bottom: 0.02rem solid #eee;
            li {
                width: 25%;
                display: inline-block;
                font-size: 0.3rem;
                color: #333;
            }
            li.active {
                color: #2a3052;
                font-weight: bold;
            }
        }
        ul.tab-box {
            li {
                border-top: 0.1rem solid #fafafa;
                box-sizing: border-box;
                a {
                    width: 7.1rem;
                    padding: 0.14rem 0 0.14rem 0.16rem;
                    display: block;
                    margin: 0 auto;
                    .left-box {
                        text-align: left;
                        float: left;
                        width: 3.73rem;
                        span {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .title-span {
                            font-size: 0.3rem;
                            color: #333;
                            line-height: 0.6rem;
                        }
                        p {
                            font-weight: 500;
                            font-size: 0.26rem;
                            color: #666;
                            line-height: 0.36rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                        }
                        .date-span {
                            font-size: 0.26rem;
                            color: #b6b5b5;
                            line-height: 1;
                            margin-top: 0.15rem;
                        }
                    }
                    .img-box {
                        width: 2.86rem;
                        height: 2.18rem;
                        overflow: hidden;
                        float: right;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            li:first-child {
                border-top: none;
            }
        }
        .more-box {
            a {
                width: 2.8rem;
                height: 0.66rem;
                line-height: 0.66rem;
                display: block;
                margin: 0.32rem auto 0.46rem;
                font-size: 0.28rem;
                color: #999;
                background-color: #f2f2f2;
                border-radius: 0.05rem;
            }
        }
    }
    .b3 {
        background-color: #f2f2f2;
        padding-top: 0.7rem;
        h4 {
            margin-bottom: 0.4rem;
        }
        span {
            font-size: 0.26rem;
            color: #333;
        }
        .b3-content {
            width: 6.28rem;
            display: block;
            margin: 0.54rem auto 0;
            .left-box {
                float: left;
                ul.ul-1 {
                    text-align: left;
                    li {
                        line-height: 0.7rem;
                        font-size: 0.28rem;
                        color: #5e5e5e;
                        i {
                            width: 0.08rem;
                            height: 0.08rem;
                            border-radius: 50%;
                            margin-right: 0.14rem;
                            margin-top: 0.3rem;
                            background-color: #2e8836;
                            float: left;
                        }
                    }
                }
                ul.ul-2 {
                    li {
                        a {
                            width: 2.2rem;
                            height: 0.62rem;
                            line-height: 0.62rem;
                            border-radius: 0.05rem;
                            background-color: #1e2835;
                            display: block;
                            font-size: 0.2rem;
                            color: #fff;
                            i {
                                width: 0.27rem;
                                height: 0.33rem;
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 0.3rem;
                                background: url(/static/images/index/index_icon.png) -3.35rem -1.69rem
                                    no-repeat;
                                background-size: 9.02rem 2.28rem;
                            }
                        }
                        margin-top: 0.26rem;
                    }
                    .li-2 {
                        a {
                            background-color: #2e8836;
                            i {
                                width: 0.3rem;
                                height: 0.34rem;
                                margin-right: 0.18rem;
                                background-position-x: -4.87rem;
                            }
                        }
                    }
                }
            }
            .img-box {
                width: 3.82rem;
                height: 4.31rem;
                overflow: hidden;
                float: right;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>

<style lang="scss">
.b1 {
    .swiper-pagination {
        .swiper-pagination-bullet {
            width: 0.4rem;
            height: 0.04rem;
            border-radius: 0;
            background-color: #d1d1d1;
            opacity: 1;
        }
        .swiper-pagination-bullet-active {
            background: #2a3052;
        }
    }
}
</style>