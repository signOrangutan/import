<template>
    <div class='com-nav'>
        <div class="nav-item"
            v-for="(nav,index) of navs" :key="index"
            :class="{active: active(nav)}"
            @click="handleClick(nav)"
        >
            {{nav.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      navs: [
        { name: '首页',  path: "/web"},
        { name: '报告生成',  path: "/web/report"},
        { name: '定制服务',  path: "/web/service" },
        { name: '投资人对接',  path: "/web/investor" },
        { name: '案例展示',  path: "/web/case" },
        { name: '评论反馈',  path: "/web/comment" },
        { name: '行业资讯',  path: "/web/news" },
        { name: '关于我们',  path: "/web/about"}
      ]
    }
  },
  computed:{
    active: function(){
      let {path} = this.$route
      
      return (item)=>{
        if(item.path =="/web" && path == '/web'){
          return true
        }        
          return item.path != '/web' && path.indexOf(item.path) > -1
        
      }
    }
  },
  methods: {
    handleClick: function (nav) {
      this.$router.push(nav.path)
    }
  }
}
</script>
<style lang='scss'>
    .com-nav {
        max-width: 1200px;
        display: flex;
        // align-items: center;
        font-size: 18px;
        line-height: 3.9;
        .nav-item {
            margin-right: $nav-gap;
        }
        .active {
            color: $nav-active-color;
        }
    }
</style>
