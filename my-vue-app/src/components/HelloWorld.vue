<template src='./HelloWorld.html'></template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    
  },
  data(){
    return {
      age:0,
      x:0,
      y:0,
      link:"https://www.thenetninja.co.uk",
      error:false,
      success:false,
      //name:"asma",
      id:1,
      name:"ddd",
      characters:["Mario","Safari","Browser"],
      ninjas:[
        {id:1,name:"slkdhslj"},
        {id:2,name:"asma"},
        {id:3,name:"anam"},
        {id:4,name:"amna shakeel"},
        {id:5,name:"anas"}
      ]
    }
  },
  methods:{
    ageIncrement(inc){
      this.age=this.age+inc;
    },
    ageDecrement(dec){
      this.age=this.age-dec;
    },
    updateXY(event){
      this.x=event.offsetX;
      this.y=event.offsetY;

    },
    click(){
      alert("you click me");
    },
    deleteNinja(){
      console.log('delete button pressed');
      this.ninjas.pop();

    },
    addNinja(){
      const ninja={id:this.id,name:this.name}
      this.ninjas.push(ninja);
    },
     updateNinja(){
      
      //  while(i<this.ninjas.length)
      //  {
      //    if(ninjas[i].id===this.$refs.id.value)
      //    {
      //      ninjas[i].name=this.$refs.name.value;
      //      return;
      //    }
      //    i++;
      //  }
      const index=this.ninjas.find(ninja => ninja.id === this.id);
      index.name = this.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./HelloWorld.css' scoped>
</style>
