<template src='./formTemplate.html'></template>
<script>

export default {
    name: 'formTemplate',
  props: {
    //app-header:header,
    msg: String,
  },
  data() {
      return {
          blog:{
              title:"",
              content:"",
              catagories:[],
              author:"",
          },
          authors:['The Net Ninja','The Angular Avenger','The Vue Vindegir'],
          submitted:false,
          
          

      }
    }
    
}
</script>
<style src='./formTemplate.css' scoped>

</style>