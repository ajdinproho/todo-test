export default{
    addTodo({commit},newName){
        commit('ADD_TODO',newName)
    },
    editTodo({commit}, todo){
        commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
        commit('REMOVE_TODO', todo)
    },
    removeDoneTodo({commit}, todo){
        commit('REMOVE_DONETODO',todo)
    },
    removeAllTodos({commit}){
        commit('REMOVE_ALLTODOS')
    },
    completeTodo({commit}, {todo,index}){
        commit('COMPLETE_TODO', {
            todo,
            index
        })
    },
    doneTodo({commit}, todo){
        commit('DONE_TODOS',todo)
    },
    updateTodos({commit}, value){
        commit('UPDATE_TODOS', value)
    },
    updateDoneTodos({commit},value){
        commit('UPDATE_DONETODOS',value)
    },
    clearTodo({commit}){
        commit('CLEAR_TODO')
    },
    moveToTodo({commit}, {todo,index}){
        commit('MOVE_TOTODO', {
            todo,
            index
        })
    }
}