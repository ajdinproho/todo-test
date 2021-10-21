<template>
        <div class="flexbox-todolist">
            <div class="box-header">
                <p>To Do</p> 
                <i class="material-icons" id="add-box" @click="addTodo" title="Add todo">add_box</i>
             </div><br/>
                <input v-model="newTodo" v-on:keyup.enter="addTodo" v-if="displayInput" ref="inputF" class="input-todo">
            <draggable
            id="first"
            :list="todos"
            class="todos-group"
            draggable=".item"
            group="a">
            <div class="todos-group-item item" v-for="(todo, index) in todos" :key="todo.name">
                <div class="todo-text">  
                    <input type="checkbox" class="checkbox" @click="complete(todo,index)"> 
                    <div @click="edit(todo)" class="todo-name">
                        {{todo.name}}
                    </div>
                    <div> 
                        <i class="material-icons" id="delete" title="Remove" @click="remove(todo)">delete</i>
                    </div>
                </div>
            </div>            
            </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
    export default{ 
        data(){
            return{
                newTodo: '',
                displayInput:false,
            }
        },
        components:{
            draggable,
        },  
        methods: {    
            addTodo(){
                this.displayInput = true;
                if(this.displayInput && this.newTodo !== ''){
                    this.$store.dispatch('addTodo', this.newTodo)
                    this.newTodo = '';
                    this.displayInput = false;
                    return;
                } 
                this.displayInput = true;
                 this.$nextTick(() =>{
                    this.$refs.inputF.focus()
                })
            },
            edit(todo){
                this.displayInput = true;
                this.newTodo = todo.name;
                this.$store.dispatch('editTodo', todo);
                this.$nextTick(() =>{
                    this.$refs.inputF.focus()
                })
            },
            complete(todo,index){
                this.$store.dispatch('completeTodo',{
                    todo,
                    index
                })
            },
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            },
        },
        computed: {
           todos:{
                get(){
                return this.$store.getters.todos
                },
                set(value){
                    this.$store.commit('UPDATE_TODOS',value)
                }
            }
        },
        
    }
</script>
<style>
.flexbox-todolist{
    border:1px solid black;
    flex:1;
    max-width:554px;
    background-color: #FFFFFF;
    padding: 20px 15px;
    margin: 10px 10px;
}
.box-header{
    font-size:16px;
    font-family: Roboto, sans-serif;
    text-align: left;
    font-weight: bold;
    display:flex;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid #DEDEDE;
}
#add-box{
    cursor:pointer;
}
#delete{
    cursor:pointer;
}
.input-todo{
    flex:1;
    width:480px;
    margin-left:20px;
    border:none;
    height:20px;
    outline: 0;
    font-size: 14px;
    font-family: Roboto, sans-serif;
}
.input-todo:hover{
    background-color: #F1F1F1;
}
.checkbox{
    width:24px;
    height:24px;
    opacity:0.6000000238418579;
    background-color: #222222;
    margin-right: 10px;
}
.todo-text{
    font-size:14px;
    font-family: Roboto, sans-serif;
    text-align: left;
    color:#222222;
    display: flex;
    align-items:center;
    padding: 5px 15px;
}
.todo-text:hover{
    background-color: #F1F1F1;
    cursor:pointer;
}
.todo-name{
    flex:1;
}
</style>