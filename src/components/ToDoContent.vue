<template>
    <div class="flexbox">
        <ToDoList />
        <DoneList />     
    </div> 
    
</template>
<script>
import ToDoList from '../components/ToDoList.vue'
import DoneList from '../components/DoneList.vue'
export default {
    name:'ToDoContent',
    components:{
        ToDoList,
        DoneList
    },
}
</script>
<style>
.flexbox{
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 75px;
}
</style>