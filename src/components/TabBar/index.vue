<template>
  <footer>
      <ul>
          <router-link @click.native="colorSwitch(index)" :to='tabPathList[index]' tag="li" v-for="(item,index) in tabList" :key="index">
                <p>{{item}}</p>
          </router-link>
      </ul>
  </footer>
</template>

<script>
export default {
    name: 'TabBar',
    data () {
        return {
            tabPathList: ['/movie','/cinema','/mine'],
            tabList: ['电影','影院','我的'],
            select: 0
        }
    },
    methods: {
        colorSwitch (index) {
            this.select = index;
            console.log(this.select);
        }
    }
}
</script>

<style lang="less">
footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #e6e6e6;
}
ul {
    list-style: none;

    li {
        float: left;
        width: 33.3%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap; 
    }
    
    // .active {
    //     color: #ef4238;
    // }
}
.active {
        color: #ef4238;
    }
</style>