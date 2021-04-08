<template>
    <!-- 友情链接 -->
    <div class='com-links'>
        <div class="item">友情链接：</div>
        <div class="item"
            v-for="(link, index) of links" :key="index"
        >{{link.name}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Links',
        data: function(){
            return {
                links: [
                    {name: '知识付费系统', uri: ''},
                    {name: '直播授课系统', uri: ''},
                    {name: '网络高清直播系统', uri: ''},
                    {name: '付费直播平台', uri: ''},
                    {name: '网上讲课软件', uri: ''},
                    {name: '知识付费平台', uri: ''},
                ]
            }
        }
    }
</script>
<style lang='scss'>
    .com-links {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #666;
        border-top: 1px solid #E5E5E5;
        border-bottom: 1px solid #E5E5E5;
        line-height: 2.25;

        margin-bottom: 30px;
        .item {
            margin-right: 20px;
        }
    }
</style>
