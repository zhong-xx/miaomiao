<template>
  <div class="now-playing">
    <ul>
      <li>
        <div class="pic-show">
          <img :src="movielist.imgList[0]">
        </div>
        <div class="info-list">
          <h2>无名之辈</h2>
          <p>观众评 <span class="grade">9.2</span></p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn-mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic-show">
          <img :src="movielist.imgList[1]">
        </div>
        <div class="info-list">
          <h2>无名之辈</h2>
          <p>观众评 <span class="grade">9.2</span></p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn-mall">
          购票
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'NowPlaying',
  data () {
    return {
      movielist: {
        imgList: [require('@/assets/images/movie_1.jpg'),require('@/assets/images/movie_2.jpg')]
      }
    }
  }
}
</script>

<style lang="less">
.now-playing {
  flex: 1;

  ul {
    margin: 0 12px;
    height: 100%;

    li {
      display: flex;
      padding-bottom: 10px;
      margin-top: 12px;
      border-bottom: 1px #e6e6e6 solid;
      width: 100%;

      .pic-show {
        width: 64px;
        height: 90px;
        flex: none;

        img {
          width: 100%;
        }
      }

      .info-list {
        margin-left: 5px;
        flex: 1 0 0%;

        h2 {
          font-size: 16px;
        }
        p {
          font-size: 14px;
          color: #666;
        }
      }

      .btn-mall {
        width:47px;
        height:27px;
        background: #ef4238;
        border-radius: 5px;
        text-align: center;
        line-height: 27px;
        margin-left: 5px;
        flex: none;
        font-size: 12px;
        color: white;
      }
    }
  }

}
</style>