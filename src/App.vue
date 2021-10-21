<template>
  <div id="app">
     <!-- <Login /> -->
    <Header/>
      <img class="logo2" :src="logo2">
    <div class="home-text">
      <p>Manage your to do list</p>
      <p>Click on checkbox or drag and drop to done</p>
    </div>
    <ToDoContent />
  </div> 
</template>

<script>
import Header from './components/Header.vue'
import ToDoContent from './components/ToDoContent.vue';
//import Login from './components/Login.vue'
export default {
  name: 'App',
  data(){
    return{
      logo2: require('./assets/logo2.svg'),
    };
  },
  components: {
    //Login,
    Header,
    ToDoContent,
  
  }
}
</script>

<style>
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
body{
background-color: #F1F1F1;
}
.home-text{
  margin-top:-22.7%;
  margin-left: 14.85%;
}
.home-text p:nth-child(1){
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 48px;
}
.home-text p:nth-child(2){
  font-family: Roboto, sans-serif;
  font-size: 16px;
}
.logo2{
  width:550px;
  height:509px;
  margin-left:800px;
  margin-top:-65px;
}
</style>
