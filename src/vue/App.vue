<template>
  <div>
    <Banner></Banner>
    <span>{{message}}</span>
  </div>
</template>

<script>
import Banner from './Banner'

export default {
  data(){
    return {
      message:"你好呀！",
    }
  },
  components:{
    Banner
  },
}
</script>

<style>

</style>