<template>
    <div class='com-report-dialog'>
        <v-dialog
            v-model="dialog"
            :max-width="maxWidth"
            >
            <v-card>
                <p class="dialog-title mb-0 text-center">{{title}}</p>
                <slot>
                </slot>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        color="#F0F3F4"
                        style="font-size: 14px"
                        @click="handleConcel"
                    >
                        {{concelTxt}}
                    </v-btn>

                    <v-btn
                        style="font-size: 14px"
                        class="btn"
                        color="primary"
                        @click="handleConfirm"
                    >
                        {{confirmTxt}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        props:{
            dialog:{
                type: Boolean,
                default: false
            },
            maxWidth:{
                type: Number,
                default: 420
            },
            title: {
                type: String,
                default: ''
            },
            confirmTxt:{
                type: String,
                default: '确认'
            },
            concelTxt:{
                type: String,
                default: '取消'
            },
        },
        data: function(){
            return {

            }
        },
        methods: {
            handleConfirm: function(){
                this.$emit('confirm')
            },
            handleConcel: function(){
                this.$emit('concel')
            }
        }
    }
</script>
<style lang='scss'>
    .com-report-dialog {
        
    }
</style>