<template>
    <!-- 业内资讯 -->
    <div class='com-new-cell'>
        <div class="cell-tab">
            <div class="tabs">
                <span class="item" :class="{'active': current==0}" @click="handleClick(0)">行业资讯</span>
                <span class="item" :class="{'active': current==1}" @click="handleClick(1)">最新新闻</span>
            </div>
            <span class="more" @click="handleMore">查看更多 &rarr;</span>
        </div>
        <div class="news-list">
            <div class="item" v-for="(item, index) in [{},{},{},{},{},{}]" :key="index">
                <span class="date">12:49</span>
                <span class="contxt">报告易张小龙：为什么说HR SaaS是人</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                current: 0
            }
        },
        methods: {
            handleMore: function(){
                console.log('>>>>')
            },
            handleClick: function(index){
                this.current = index
            }
        }
    }
</script>
<style lang='scss'>
    .com-new-cell {
        margin-top: 50px;
        .cell-tab {
            max-width: 1200px;
            margin: 0 auto;
            color: #666;
            font-size: 24px;
            display: flex;
            justify-content: space-between;

            .item {
                display: inline-block;
                margin-right: 30px;
            }
            .active {
                color: #FC7E23;
                border-bottom: 2px solid #FC7E23;
            }
            .more {
                font-size: 20px;
                line-height: 1.2;
            }
        }
        .news-list {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            .item {
                font-size: 16px;
                color: #666;
                line-height: 1.5;
                margin-right: 25px;
                margin-top: 30px;
                .date {
                    display: inline-block;
                    border-right: 2px solid #E3E4E6;
                    padding-right: 20px;
                    margin-right: 30px;
                    
                }
            }
        }
    }
</style>