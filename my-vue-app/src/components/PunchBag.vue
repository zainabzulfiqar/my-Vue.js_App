<template src='./PunchBag.html'></template>

<script>

export default {
    name: 'PunchBag',
  props: {
    msg: String
  },
  data(){
    return{
        health:100,
        ended:false
    }
  },
  methods:{
      punch(){
          console.log('This should logged out to the console.....');
          this.health-=10;
          if(this.health<=0){
              this.ended=true;
          }
      },
      restart(){
          this.health=100;
          this.ended=false;
      }
  }
}
</script>
<style src='./PunchBag.css' scoped>
</style>