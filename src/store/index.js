import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setAllTodos", res.data);
  },

  async addTodos({ commit },title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos",{title,completed:false});
    commit("newTodos", res.data);
  },

  async deleteOne({commit},id){

    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('deleteTodo',id)
  },

  async filterTodos({commit},e){

        //Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
      commit('setAllTodos',res.data)
  }

};

const mutations = {
  setAllTodos: (state, todos) => (state.todos = todos),
  newTodos: (state, todos) => state.todos.unshift(todos),
  deleteTodo:(state,id) =>state.todos= state.todos.filter( (todo) => todo.id !== id)
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
