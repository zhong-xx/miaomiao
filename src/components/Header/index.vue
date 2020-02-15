<template>
  <header>
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: '喵喵电影'
        }
    }
}
</script>

<style lang="less">
header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(229, 72, 71);

    h1 {
        font-size: 16px;
        color: white;
        white-space: nowrap;
    }
    
    
}


</style>