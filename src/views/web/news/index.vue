<template>
    <!-- 行业资讯 -->
    <div class='news-page'>
        <div class="news-main mx-auto">
            <!-- 分类导航 -->
            <comCategory :current="current" @categoryClick="categoryClick"></comCategory>
            <router-view />
        </div>
    </div>
</template>

<script>
    import comCategory from '@/components/web/category/category.vue' 
    export default {
        components:{
            comCategory
        },
        data: function(){
            return {
                current: 0
            }
        },
        methods: {
            categoryClick: function(category){
                this.current = category.id
            }
        }
    }
</script>
<style lang='scss'>
    .news-page {
        @extend .content-bg;
        .news-main {
            @extend .max-container;
            
        }
    }
    
</style>