<template>
    <!-- 行业资讯列表 -->
    <div class='sub-page-list max-container mx-auto'>
        <div class="list-content">
            <v-card v-for="(news, index) in list" :key="index">
                <v-img
                height="227"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-title class="item-title d-inline-block text-truncate">电商立法要明确的问题：电商该归哪里问题收集</v-card-title>
                <v-card-text>
                    <div class="item-info">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>
                <v-card-actions>
                    <span @click="handleDetail" class="more">MORE &rarr;</span>
                </v-card-actions>
            </v-card>
        </div>
        
        
        <v-pagination
            v-model="page"
            :length="6"
        ></v-pagination>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                list: [{},{},{},{},{}],
                page: 1
            }
        },
        methods: {
            handleDetail: function(){
                this.$router.push({name:'p_news_info'})
            }
        }
    }
</script>
<style lang='scss'>
    .sub-page-list {
        .list-content {
            display: grid;
            grid-template-columns: repeat(3, 32%);
            grid-column-gap: 23px;
            grid-row-gap: 25px;

            .item-title {
                max-width: 100%;
                font-size: 20px;
                color: #333;
                font-weight: 500;
                line-height: 1.4;
            }
            .v-card__text {
                .item-info {
                    font-size: 14px;
                    font-weight: 500;
                    
                    color: #666;
                    line-height: 1.2;
                }
            }
            .v-card__actions {
                margin-bottom: 50px;
                .more {
                    color: #666;
                    font-size: 13px;
                    line-height: 1.8;
                }
            }
        }
        
    }
</style>