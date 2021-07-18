
<template>
    <div class="container pt-5">
        <h5>Filter</h5>
    <select @change="filterTodos($event)" class="form-select form-control w-25 ">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="200">5</option>
    </select>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name:'FilterTodo',
        methods: mapState(['filterTodos'])
    }
</script>

<style lang="scss" scoped>

</style>