<template>
    <!-- 案例展示 -->
    <div class='case-page'>

        <p class="mb-0 bg-color mx-auto">搜索匡</p>
        <main class="case-main max-container mx-auto">
            <comCategory :current="current" @categoryClick="categoryClick"></comCategory>
            <div class="case-container">
                <case-item class="case-item mb-7"
                    v-for="(item,index) in list" :key="index"
                ></case-item>
            </div>
            <div class="pagination text-center">
                <v-pagination
                    v-model="page"
                    :length="6"
                ></v-pagination>
            </div>
        </main>
    </div>
</template>

<script>
    import caseItem from '@/components/web/case-item/case-item.vue'
    import comCategory from '@/components/web/category/category.vue'
    export default {
        components:{
            caseItem,
            comCategory
        },
        data: function(){
            return {
                category:[
                    {title:'全部', id:0},
                    {title:'餐饮美食', id:1},
                    {title:'教育培训', id:1}
                ],
                current: 0,
                page: 1,
                list:[{},{},{},{}]
            }
        },
        methods:{
            categoryClick: function(item){
                this.current = item.id
            }
        }
    }
</script>
<style lang='scss'>
    .case-page {
        .bg-color {
            background-color: #F5F5F8;
        }
        .case-main {
            background-color: #fff;
            
            .case-container {
                display: grid;
                grid-template-columns: repeat(2, 48%);
                grid-column-gap: 27px;
                grid-row-gap: 36px;
                .case-item {
                    &:nth-child(odd) {
                        margin-right: 27px;
                    }
                }
            }
            .pagination {
                margin-top: 60px;
                margin-bottom: 60px;
            }
        }
    }
</style>