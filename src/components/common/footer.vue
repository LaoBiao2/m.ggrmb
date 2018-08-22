<template>
    <div class="footer-box">
        <div class="footer">
            <span class="logo-span">
                <img src="/static/images/logo.png" alt="">
            </span>
            <p> Copyright 2018 © 金盛环球集团<br/>金盛金融有限公司 版权所有 不得转载</p>
        </div>
        <div class="footer-fix">
            <ul>
                <li class="li-1">
                    <a href="javascript:;" class="a-server">
                        <i></i>代理业务咨询</a>
                </li>
                <li class="li-2">
                    <a href="javascript:;" class="a-account">
                        <i></i>开立免费账户</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "vueFooter",
    data() {
        return {
            showId: 1
        }
    },
    methods: {
        showUl(i) {
            this.showId = i;
        }
    }
}
</script>

<style lang="scss">
.footer {
    padding: 0.5rem 0 0.7rem;
    margin-bottom: 0.98rem;
    background-color: #2a3052;
    text-align: center;
    .logo-span {
        width: 3.33rem;
        height: 0.62rem;
        overflow: hidden;
        display: block;
        margin: 0 auto 0.36rem;
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    p {
        font-size: 0.26rem;
        color: #919191;
        line-height: 0.48rem;
    }
}
.footer-fix {
    width: 100%;
    height: 0.98rem;
    // line-height: 0.36rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: #2a3052;
    padding: 0.3rem 0 0.34rem;
    box-sizing: border-box;
    border-top: 0.01rem solid #535c8c;
    ul {
        font-size: 0;
        li {
            width: 49.9%;
            display: inline-block;
            text-align: center;
            a {
                font-size: 0.3rem;
                line-height: 0.36rem;
                color: #fff;
                i {
                    width: 0.48rem;
                    height: 0.44rem;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 0.22rem;
                    background: url(/static/images/common_icon.png) 0 -0.69rem no-repeat;
                    background-size: 2.83rem 1.14rem;
                }
            }
        }
        .li-2 {
            border-left: 0.01rem solid #535c8c;
            a i {
                background-position-x: -0.69rem;
            }
        }
    }
}
</style>
