<template>
  <div>
    <Add-todos />
    <Filter-todo />
    <Todos />
  </div>
</template>

<script>
import AddTodos from "./components/AddTodos.vue";
import FilterTodo from "./components/FilterTodo.vue";
import Todos from "./components/Todos.vue";
export default {
  components: { Todos, AddTodos, FilterTodo },
  name: "APp",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  background-color: rgb(204, 192, 199);
  /* min-height: 100vh; */
}
</style>
