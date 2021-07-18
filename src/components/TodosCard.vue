<template>
  <b-card
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 h-100"
  >
    <b-card-text>
      {{ todo.title }}
    </b-card-text>
    <div class="text-center">
      <b-button @click="deleteOne(todo.id)" href="#" variant="danger">
        Delete
      </b-button>
    </div>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TososCard",
  props: {
    todo: Object
  },
 methods: mapActions(["deleteOne"]),
};
</script>

<style scoped></style>
