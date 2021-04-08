<template>
<!-- pc主页 -->
    <div class='web-home'>
        <Header>
            <Nav slot="content"></Nav>
        </Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/web/header'
    import Nav from '@/components/web/header/navigation'
    import Footer from '@/components/web/footer'
    export default {
        components:{
            Header,
            Nav,
            Footer
        },
        data: function(){
            return {}
        }
    }
</script>
<style lang='scss'>
    .web-home {
        overflow-x: auto;
    }
</style>