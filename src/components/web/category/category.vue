<template>
    <div class='com-category d-flex justify-space-between align-center'>
        <div class="category-title">{{title}}</div>
        <div class="content d-flex flex-grow-1 text-left">
            <div class="item pl-2 pr-2 pt-1 pb-1" 
                v-for="(item, index) in items" :key="index"
                :class="{'category-text-active': current==item.id}"
                @click="handleClick(item)">
                {{item.title}}
            </div>
        </div>
        <slot name="extend">
            <div class="extension">更多</div>
        </slot>
        
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '行业选择：'
            },
            items: {
                type: Array,
                default:()=>{
                    return [
                        {title:'全部', id: 0},
                        {title:'餐饮没事', id: 1},
                        {title:'教育培训', id: 2},
                        {title:'金融科技', id: 3},
                        {title:'运动健身', id: 4},
                        {title:'房地产', id: 5},
                        {title:'旅游出行', id: 6},
                        {title:'服饰美妆', id: 7},
                        {title:'医疗健康', id: 8},
                        {title:'公益环保', id: 9},
                        {title:'文体娱乐', id: 10},
                    ]
                }
            },
            current: {
                type: Number,
                default: 0
            }
        },
        data: function(){
            return {
                
            }
        },
        methods: {
            handleClick: function(item){
                this.$emit('categoryClick', item)
            }
        }
    }
</script>
<style lang='scss'>
    .com-category {
        @extend .font-size-14;
    }

</style>