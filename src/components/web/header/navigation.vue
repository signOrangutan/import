<template>
    <div class='com-nav'>
        <div class="nav-item" 
            v-for="(nav,index) of navs" :key="index"
            :class="{active: nav.select}"
            @click="handleClick(nav)"
        >
            {{nav.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        data: function(){
            return {
                navs: [
                    {name: '首页', select: false},
                    {name: '报告生成', select: false},
                    {name: '定制服务', select: false},
                    {name: '投资人对接', select: false},
                    {name: '案例展示', select: false},
                    {name: '评论反馈', select: false},
                    {name: '行业资讯', select: false},
                    {name: '关于我们', select: false}
                ]
            }
        },
        methods: {
            handleClick: function(nav){
                
                this.navs.map(item=>{
                    
                    if(item.name == nav.name){
                        item.select = !item.select
                    } else {
                        item.select = false
                    }
                })
            }
        }
    }
</script>
<style lang='scss'>
    .com-nav {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-items: center;
        align-items: center;

        .nav-item {
            margin-right: $nav-gap;
        }
        .active {
            color: $nav-active-color;
        }
    }
</style>