<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        v-model="title"
        type="text"
        name="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: Math.random(),
        title: this.title,
        completed: false
      };

      //send parameter
      this.$emit('add-todo', newTodo);

      // clear input
      this.title = '';
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 5px;
}

input[type='submit'] {
  flex: 2;
}
</style>
