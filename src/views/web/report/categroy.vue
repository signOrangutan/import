<template>
    <!-- 行业选择 -->
    <div class='category-page'>
        <div class="top-search">
            <ul class="search-box main-container">
                <li class="heder-title">找商业计划书，就上报告易</li>
                <li class="header-sub">精准对接 专业服务 认准报告易</li>
                <li class="search">
                    <input class="item-search" type="text" />
                    <div class="item-btn">搜索</div>
                </li>
                <li class="hot-tag">
                    <span class="item-tag">热门搜索：</span>
                    <span 
                        class="item-tag"
                        v-for="(tag, index) in hotTags" :key="index"
                    >{{tag.title}}</span>
                </li>
            </ul>
            <div class="bottom d-flex">
                <div class="start">今日生成商业计划书
                    <span class="num">7,482</span>份</div>
                <div class="end">累计生成商业计划书
                    <span class="num">2,367,421</span>份
                </div>
            </div>
        </div>
        <div class="container">
            <div class="main-container">
                <div class="main-type">
                    <div 
                        class="type-item" 
                        :class="{'selected': selectedMain==index}"
                        v-for="(main, index) in mainType" :key="index"
                        @click="handleFirst(main)"
                    >{{main.title}}</div>
                </div>
                <div class="second-type">
                    <div 
                        class="item" 
                        v-for="(type, index) in second" :key="index"
                        :class="{'selected': secondId==type.id}"
                        @click="handleSecond(type)"
                    >{{type.title}}</div>
                </div>
                <div class="third-type">
                    <div 
                        class="item" 
                        v-for="(type, index) in second" :key="index"
                        :class="{'selected': secondId==type.id}"
                        @click="handleSecond(type)"
                    >{{type.title}}</div>
                </div>
                <div class="last-type">
                    <div 
                        class="item" 
                        v-for="(type, index) in second" :key="index"
                        :class="{'selected': secondId==type.id}"
                        @click="handleSecond(type)"
                    >{{type.title}}</div>
                </div>
            </div>
        </div>
        <div class="types">
            <p class="header">
                <span class="icon-before"></span>
                <span class="content">主要行业</span>
                <span class="icon-after"></span>
            </p>
            <div class="cate-box main-container">
                <div 
                    class="item"
                    v-for="(cate,index) in cateType" :key="index" 
                >{{cate.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                hotTags:[
                    { title: '信息技术', id:1 },
                    { title: '金融', id:1 },
                    { title: '医药', id:1 },
                    { title: '生物', id:1 },
                    { title: '电子', id:1 },
                    { title: '设备', id:1 },
                    { title: '文化传媒', id:1 },
                    { title: '建筑', id:1 },
                    { title: '建材', id:1 },
                ],
                mainType: [
                    { title:'农业', id: 1 },
                    { title:'服务业', id: 1 },
                    { title:'智能产业', id: 1 },
                    { title:'新基建', id: 1 },
                    { title:'教育', id: 1 },
                    { title:'仓储物流', id: 1 },
                    { title:'娱乐产业', id: 1 },
                    { title:'电子商务', id: 1 },
                    { title:'房地产', id: 1 },
                    { title:'医疗康养', id: 1 },
                    { title:'食品制造', id: 1 },
                    { title:'旅游', id: 1 },
                ],
                second:[
                    {title: '酒店', id: 3},
                    {title: '餐饮', id: 4},
                    {title: '生活服务', id: 5},

                ],
                selectedMain: 1,
                secondId: 3,
                cateType:[
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                    {title:'电子设备', id: 7},
                ]
            }
        },
        methods: {
            handleFirst: function(main){
                this.selectedMain = main.id
            },
            handleSecond: function(type){
                this.secondId = type.id
            }
        }
    }
</script>
<style lang='scss'>
    .category-page {
        .top-search {
            margin-top: -50px;
            max-height: 488px;
            background: url('../../../assets/img/388.png') center/cover no-repeat;

            .search-box {
                padding-top: 80px;
                list-style-type: none;
                text-align: center;
                color: #F0EFF3;
                .heder-title {
                    font-size: 56px;
                    font-family: "Fontquan-XinYiGuanHeiTi";
                }
                .header-sub {
                    font-size: 18px;
                    font-weight: 500;
                }
                .search {
                    margin-top: 50px;
                    display: flex;
                    justify-content: center;
                    line-height: 2.5;
                    .item-search {
                        width: 70%;
                        background: #fff;
                        border-radius: 6px 0 0 6px;
                        outline: none;
                    }
                    .item-btn {
                        padding: 0 30px 0 54px;
                        background-color: $primary-color;
                        border-radius: 0 6px 6px 0;
                        font-size: 22px;
                        position: relative;
                        &::before{
                            position: absolute;
                            content: '';
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url('../../../assets/img/389.png') center/cover no-repeat;
                            top: 16px;
                            left: 20px;
                        }
                    }
                }

                .hot-tag {
                    font-size: 16px;
                    line-height: 3;
                    .item-tag {
                        &:not(:last-child) {
                            margin-right: 14px;
                        }
                    }
                }
            }
            .bottom {
                margin-top: 50px;
                background-color: rgba(#000, .2);
                color: #FFFFFF;
                padding: 23px 0;
                .start, .end {
                    flex: 1;
                    .num {
                        font-size: 36px;
                    }
                }
                .start {
                    text-align: right;
                    padding-right: 50px;
                    border-right: solid 1px #fff;
                }
                .end {
                    padding-left: 50px;
                }
            }
        }
        .container {
            background-color: #F3F5F7;
            .main-container {
                @extend .bg-white;
                margin: 80px auto;
                max-height: 600px;
                display: grid;
                grid-template-columns: 220px 220px 220px 1fr;

                .main-type {
                    background: url('../../../assets/img/392.png') center/cover no-repeat;
                    font-size: 18px;
                    padding: 20px 0;
                    font-weight: bold;
                    color: #fff;
                    line-height: 2.5;
                    .type-item {
                        padding-left: 50px;
                    }
                    .selected {
                        background: rgba(#fff, .3);
                    }
                }
                &>div:not(:first-child){
                    
                    padding: 30px 0;
                    font-size: 16px;
                    color: #333;
                    line-height: 3;
                    .item {
                        margin: 0 30px;
                        padding-left: 20px;
                    }
                    .selected {
                        color: #fff;
                        background: $primary-color;
                        border-radius: 6px;
                    }
                }
                &>div:nth-child(3) {
                    border-left: solid 2px #DCDCDC;
                    border-right: solid 2px #DCDCDC;
                }
                &>div:last-child {
                    .item {
                        width: 160px;
                    }
                }
            }
        }
        .types {
            text-align: center;
            .header {
                .icon-before,.icon-after {
                    display: inline-block;
                    width: 25px;
                    height: 16px;
                }
                .icon-before{
                    background: url('../../../assets/img/391.png') center/cover no-repeat;
                }
                .icon-after{
                    background: url('../../../assets/img/390.png') center/cover no-repeat;
                }
                .content {
                    font-size: 24px;
                    color: #333;
                    margin:0 13px;
                    font-weight: 500;
                }
            }
            .cate-box {
                display: grid;
                grid-template-columns: repeat(auto-fill, 110px);
                grid-gap: 30px 10px;
                font-size: 16px;
                line-height: 3;
                .item {
                    border-radius: 4px;
                    border: 2px solid $primary-color;
                }
            }
        }
    }
</style>