<template>
    <!-- 案例展示 -->
    <div class='com-sub-case'>
        <div class="case-header">案例展示</div>
        <div class="category-box">
            <div class="category">
                <div class="item" 
                    v-for="(item, index) of category" :key="index"
                    :class="{'active': selectId==item.id}"
                    @click="handleClick(item)"
                    >{{item.title}}</div>
                
            </div>
            <span class="more" @click="handleMore">查看更多&rarr;</span>
        </div>
        <div class="card-box">
            <case-item 
                v-for="(item, index) in caseList" :key="index"
                :item="item"
            >
            
            </case-item>
        </div>
        <v-btn color="primary">一键智能生成</v-btn>
    </div>
</template>

<script>
    import CaseItem from '@/components/web/case-item/case-item.vue'
    export default {
        components:{
            CaseItem
        },
        data: function(){
            return {
                selectId: 0,
                category: [
                    {title:'全部', id: 0},
                    {title:'餐饮美食', id: 1},
                    {title:'教育培训', id: 2},
                    {title:'金融科技', id: 3},
                    {title:'运动健身', id: 4},
                    {title:'房地产', id: 5},
                    {title:'旅游出行', id: 6},
                    {title:'服饰美妆', id: 7},
                    {title:'医疗健康', id: 8},
                    {title:'公益环保', id: 9},
                ],
                caseList: [
                    {src:'', title: '餐饮没事', id:1},
                    {src:'', title: '房地产', id:2},
                    {src:'', title: '金融科技', id:3},
                    {src:'', title: '旅游出行', id:4}
                ]
            }
        },
        methods:{
            handleClick: function(item){
                this.selectId = item.id
            },
            handleMore: function(){
                this.$router.push('/web/case')
            }
        }
    }
</script>
<style lang='scss'>
    .com-sub-case {
        text-align: center;
        padding-bottom: 50px;
        .case-header {
            margin-top: 50px;
            text-align: center;
            line-height: 2;
            font-size: 36px;
        }
        .category-box {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            font-size: 18px;
            justify-content: flex-end;
            align-content: center;

            .more {
                color: #666;
                width: 100px;
                justify-items: flex-end;
            }

            .category {
                display: flex;
                .item {
                    margin-right: 20px;
                    padding: 3px 6px;
                }
                .active {
                    color: #FC7E23;
                    background-color: #F8EBE6;
                    border-radius: 4px;
                }
            }
        }
        .card-box {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, 586px);
            grid-column-gap: 30px;
            grid-row-gap: 36px;
            margin-bottom: 50px;
        }
    }
</style>