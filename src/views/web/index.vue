<template>
<!-- pc主页 -->
    <div class='web-home'>
        <Header>
            <Nav 
              class="nav" 
              slot="content"
              v-if="!isReport"
              ></Nav>
            <ReportHeader 
              slot="content"
              v-else
              ></ReportHeader>
        </Header>
        <router-view />
        <Footer v-if="!isReport"></Footer>
    </div>
</template>

<script>
import Header from '@/components/web/header'
import Nav from '@/components/web/header/navigation'
import Footer from '@/components/web/footer'
import ReportHeader from '@/components/web/header/reportHeader'
export default {
  components: {
    Header,
    Nav,
    Footer,
    ReportHeader
  },
  computed: {
    isReport: function(){
      let { path } = this.$route
      return path.indexOf('/web/report/') > -1
    }
  },
  data: function () {
    return {}
  }
}
</script>
<style lang='scss'>
    .web-home {
      overflow-x: auto;
    }
</style>
