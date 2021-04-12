<template>
    <!-- 组件-页脚 -->
    <div class='com-footer'>
        <div class="footer-container">
            <Nav class="nav"></Nav>
            <About class="about"></About>
            <Links class="links"></Links>
            <CopyRight></CopyRight>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/web/header/navigation'
import Links from '@/components/web/footer/links'
import CopyRight from '@/components/web/footer/copy_right'
import About from '@/components/web/footer/about'
export default {
  components: {
    Nav,
    Links,
    CopyRight,
    About
  },
  name: 'Footer',
  data: function () {
    return {}
  }
}
</script>
<style lang='scss'>
    .com-footer{
        background-color: $footer-bg-color;
        .footer-container {
            max-width: 1200px;
            margin:0 auto;
            
            .nav {
              margin-bottom: 30px;
              border-bottom: 1px solid #E5E5E5;
            }
            .links {
              margin-bottom: 10px;
            }
        }

    }
</style>
