<template>
  <div class="main">
      <Header title="喵喵电影"/>
      <div class="content">
        <div class="movie-menu">
          <router-link to="/movie/city" tag="div" class="city">上海</router-link>
          <div class="hot-switch">
            <router-link :to="switchPathList[index]" tag="div" v-for="(item,index) in switchList" :key="index">{{item}}</router-link>
          </div>
          <router-link to="/movie/search" tag="div" class="search-entry">搜索</router-link>
        </div>
        <router-view></router-view>
      </div>
      <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'Movie',
  components: {
    Header,
    TabBar
  },
  data () {
    return {
      switchList: ['正在热映','即将上映'],
      switchPathList: ['/movie/nowPlaying','/movie/comingSoon'],
      select: 0
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,body,.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.movie-menu {
  height: 45px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  border-bottom: 1px solid #e6e6e6;

  .city {
    height: 100%;
    margin-left: 20px;
    line-height: 45px;
  }
  .hot-switch {
    display: flex;

    div {
      height: 100%;
      margin: 0 15px;
      color: #666;
      font-weight: bold;
      line-height: 45px;
    }

    

    
  }
  .search-entry {
    height: 100%;
    margin-right: 20px;
    line-height: 45px;
  }

  .active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
}

</style>