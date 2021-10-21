export default{
    ADD_TODO(state,newName){
        state.todos.push({
            name: newName,
            completed:false
        })
    },
    EDIT_TODO(state, todo){
        var todos = state.todos
        todos.splice(todos.indexOf(todo), 1)
        state.todos = todos
    },
    REMOVE_TODO(state, todo){
        var todos = state.todos
        todos.splice(todos.indexOf(todo), 1)   
    },
    REMOVE_DONETODO(state,todo){
        var doneTodos = state.doneTodos;
        doneTodos.splice(doneTodos.indexOf(todo),1);
    },
    REMOVE_ALLTODOS(state){
        state.doneTodos.length = 0;
        state.doneTodos = []
    }, 
    COMPLETE_TODO(state,{todo,index}){
        todo.completed = true;
        state.doneTodos.push(todo);
        state.todos.splice(index,1)
    },
    DONE_TODOS(state,todo){
        if(todo.completed == true){
            state.doneTodos.push({
                name: state.newTodo,
                completed: true
            })
        }else{
            state.doneTodos = [];
        }
    },
    CLEAR_TODO(state){
        state.newTodo = '';
    },
    UPDATE_TODOS(state,value){
      state.todos = value;  
    },
    UPDATE_DONETODOS(state,value){
     state.doneTodos = value;   
    },
    MOVE_TOTODO(state,{todo,index}){
        todo.completed = false;
        state.todos.push(todo);
        state.doneTodos.splice(index,1);
    },  
}