<template>
  <div class="container pt-4">
    <h3>Todos</h3>
    <div class="row " >
      <div v-for="todo in allTodos" :key="todo.id" class="col-md-4 col-lg-3 col-sm-6 mb-4" >
        <Todos-card :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodosCard from "./TodosCard.vue";
export default {
  components: { TodosCard },
  name: "Todos",

  methods: mapActions(["fetchTodos"]),
  computed: mapGetters(["allTodos"]),

  created() {
    this.fetchTodos();
  },
};
</script>
