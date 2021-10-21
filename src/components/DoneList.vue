<template>
  <div class="flexbox-donelist">
    <div class="box-donelist-header">
      <p>To Do</p>
      <i
        class="material-icons"
        id="delete_sweeep"
        title="Delete all"
        @click="removeAllTodos"
      >
        delete_sweep</i>
    </div>
    <draggable
      :list="doneTodos"
      class="doneTodos-group"
      draggable=".item"
      group="a"
    >
      <div
        class="todos-group-item item"
        v-for="(todo,index) in doneTodos"
        :key="todo.name">
        <div class="done-todo-text">
              <input type="checkbox" class="checkbox" checked @click="moveToTodo(todo,index)"/> 
                <div class="todo-name">
                      {{ todo.name }}
                 </div>
                <i class="material-icons" id="delete_sweeep" @click="remove(todo)">delete</i>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  methods: {
    remove(todo) {
      this.$store.dispatch("removeDoneTodo", todo);
    },
    removeAllTodos() {
      this.$store.dispatch("removeAllTodos");
    },
    moveToTodo(todo,index){
      this.$store.dispatch('moveToTodo', {
        todo,
        index
      }); 
    }
  },
  computed: {
    doneTodos: {
      get() {
        return this.$store.getters.doneTodos;
      },
      set(value) {
        this.$store.commit("UPDATE_DONETODOS", value);
      },
    },
  },
};
</script>
<style>
.flexbox-donelist {
  border: 1px solid black;
  flex:1;
  max-width: 554px;
  background-color: #ffffff;
  padding: 20px 15px;
  margin: 10px 10px;
}
#delete_sweeep {
  cursor: pointer;
}
.box-donelist-header {
  font-size: 16px;
  font-family: Roboto;
  text-align: left;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #dedede;
}
.done-todo-text {
  font-size: 14px;
  font-family: Roboto;
  text-align: left;
  color: #222222;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  margin-top: 10px;
}
.done-todo-text:hover{
  background-color: #F1F1F1;
}

</style>