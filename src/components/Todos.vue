<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  components: {
    TodoItem
  },
  name: 'Todos',
  props: ['todos']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
