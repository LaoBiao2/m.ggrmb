<template>
    <div class="download content-top">
        <div class="banner">
            <span class="title-span"></span>
            <div class="banner-content" :class="{showP: showId}">
                <p :data-content=downloadC>{{downloadC}}
                    <a href="javascript:;" @click="up()">收起</a>
                </p>
                <a href="javascript:;" @click="more()">查看更多</a>
            </div>
            <div class="img-box">
                <img src="/static/images/download/banner_img.png" alt="">
            </div>
            <div class="btn-box">
                <a href="javascript:;" class="iphone-a">
                    <i></i>iPhone</a>
                <a href="javascript:;" class="android-a">
                    <i></i>Android</a>
            </div>
            <div class="btn-box2">
                <i class="p-i"></i>
                <b>MT4操作指引：</b>
                <a href="javascript:;">
                    <i class="btn-down"></i>
                    iOS苹果
                </a>
                <a href="javascript:;">
                    <i class="btn-down"></i>
                    Android安卓
                </a>
            </div>
        </div>
        <div class="box b1">
            <div class="b1-list">
                <div class="item item1">
                    <div class="item-box">
                        <i></i>
                        <div class="txt">
                            <b>高效执行力</b>
                            <p>迅捷高效提升盈利频率</p>
                        </div>
                    </div>
                </div>
                <div class="item item2">
                    <div class="item-box">
                        <i></i>
                        <div class="txt">
                            <b>高效执行力</b>
                            <p>迅捷高效提升盈利频率</p>
                        </div>
                    </div>
                </div>
                <div class="item item3">
                    <div class="item-box">
                        <i></i>
                        <div class="txt">
                            <b>高效执行力</b>
                            <p>迅捷高效提升盈利频率</p>
                        </div>
                    </div>
                </div>
                <div class="item item4">
                    <div class="item-box">
                        <i></i>
                        <div class="txt">
                            <b>高效执行力</b>
                            <p>迅捷高效提升盈利频率</p>
                        </div>
                    </div>
                </div>
                <div class="item item5">
                    <div class="item-box">
                        <i></i>
                        <div class="txt">
                            <b>高效执行力</b>
                            <p>迅捷高效提升盈利频率</p>
                        </div>
                    </div>
                </div>
                <div class="item item6">
                    <div class="item-box">
                        <i></i>
                        <div class="txt">
                            <b>高效执行力</b>
                            <p>迅捷高效提升盈利频率</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    name: 'Download',
    data() {
        return {
            showId: true,
            downloadC: 'MT4是一款国际上最受欢迎的投资看盘交易平台，集行情图表、 技术分析和交易操作三大功能于一身，可进行下单、平仓、限价单、 止损、止赢、查看报表及分析数据等不同操作。功能俱全，方便看盘， 便于了解市场资金流向。客户亦能通过设置止损价和获利价， 不用每分每秒监控市况，亦能确保在第一时间保障最大利润。 目前全球已超过70%的经济公司，选择使用MT4交易软件。 金盛金银（GGPM）MT4平台同时提供MT4桌面版、MT4 IOS版及MT4 adroid版。',
        }
    },
    methods: {
        more() {
            this.showId = false;
        },
        up() {
            this.showId = true;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.download {
    line-height: 1;
    text-align: center;
    .banner {
        padding-top: 0.54rem;
        background: url(/static/images/download/banner_bg.jpg) no-repeat top;
        background-size: cover;
        .title-span {
            width: 3.63rem;
            height: 0.67rem;
            display: block;
            margin: 0 auto 0.42rem;
            background: url(/static/images/download/mt4logo.png) no-repeat
                center;
            background-size: contain;
        }
        .banner-content {
            width: 6.6rem;
            display: block;
            margin: 0 auto;
            line-height: 0.6rem;
            font-size: 0.3rem;
            p {
                text-align: justify;
                color: #666;
                a {
                    color: #e98024;
                    float: right;
                    display: inline-block;
                }
            }
            a {
                display: none;
            }
        }
        .showP {
            position: relative;
            height: 1.66rem;
            p {
                height: 0;
                overflow: hidden;
                a {
                    display: none;
                }
            }
            p:before {
                content: attr(data-content);
                height: 1.06rem;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                position: absolute;
                left: 0;
                top: 0;
                background: url(/static/images/download/banner_bg.jpg) no-repeat
                    top;
                background-size: 7.5rem 12.56rem;
                z-index: 2;
            }
            p:after {
                content: attr(data-content);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                overflow: hidden;
                -webkit-line-clamp: 3;
                padding-right: 1.4rem;
                position: absolute;
                left: 0;
                top: 0;
                text-indent: -3rem;
            }
            a {
                color: #e98024;
                display: inline-block;
                position: absolute;
                right: 0;
                top: 1.2rem;
            }
        }
        .img-box {
            width: 4.39rem;
            height: 7.5rem;
            display: block;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .btn-box {
            font-size: 0;
            margin-bottom: .5rem;
            a {
                width: 3.16rem;
                height: 0.9rem;
                line-height: 0.9rem;
                border-radius: 0.1rem;
                background-color: #1e2835;
                font-size: 0.28rem;
                color: #fff;
                display: inline-block;
                i {
                    width: .39rem;
                    height: .49rem;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: .43rem;
                    background: url(/static/images/download/download_icon.png) 0 -1.53rem;
                    background-size: 10.33rem 2.02rem;
                }
            }
            .android-a {
                background-color: #2e8836;
                margin-left: 0.34rem;
                i {
                    width: .42rem;
                    margin-right: .25rem;
                    background-position-x: -.89rem;
                }
            }
        }
        .btn-box2 {
            i {
                display: inline-block;
                margin-right: .1rem;
            }
            .p-i {
                width: .34rem;
                height: .4rem;
                margin-right: .12rem;
                background: url(/static/images/download/download_icon.png) -1.83rem -1.58rem no-repeat;
                    background-size: 10.33rem 2.02rem;
            }
            b {
                font-size: .3rem;
                color: #333;
            }
            a {
                font-size: .26rem;
                line-height: .4rem;
                color: #333;
                .btn-down {
                    width: .22rem;
                    height: .22rem;
                    background: url(/static/images/download/download_icon.png) -2.79rem -1.67rem no-repeat;
                    background-size: 10.33rem 2.02rem;
                }
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
