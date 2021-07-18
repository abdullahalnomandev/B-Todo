<template>
  <div class="container pt-4">
    <h5>Add Todo</h5>
    <form @submit="handleFormSubmit" action="">
      <div class="text-center">
        <input
          type="text"
          placeholder="Add Todo"
          class="form-control w-50 d-inline-block "
          v-model="title"
        />
        <input
          type="submit"
          value="Submit"
          class="btn-success px-3 py-2 rounded ms-2"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AddTodos",
  data() {
      return {
          title: null,
      }
  },
  methods:{
       ...mapActions(['addTodos']),
      handleFormSubmit(e){
          e.preventDefault();
         this.addTodos(this.title)
          this.title=''
          
      }
  }
};
</script>

<style lang="scss" scoped></style>
