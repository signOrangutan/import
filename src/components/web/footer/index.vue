<template>
    <!-- 组件-页脚 -->
    <div class='com-footer'>
        <Nav class="footer-nav"></Nav> 
        <About></About>
        <Links></Links>
        <CopyRight></CopyRight>   
    </div>
</template>

<script>
    import Nav from '@/components/web/header/navigation'
    import Links from '@/components/web/footer/links'
    import CopyRight from '@/components/web/footer/copy_right'
    import About from '@/components/web/footer/about'
    export default {
        components:{
            Nav,
            Links,
            CopyRight,
            About
        },
        name:"Footer",
        data: function(){
            return {}
        }
    }
</script>
<style lang='scss'>
    .com-footer{
        width: inherit;
        background-color: $footer-bg-color;
        .footer-nav {
            margin: 0 auto;
        }
    }
</style>