<template >
<div v-html="Todo">
</div>
</template>

<script>
export default {
  name: "get-request",
  data() {
    return {
      Todo: null
    };
  },
  created() {
    // Simple GET request using fetch
    fetch("http://localhost:5000")
      .then(response => response.text())
      .then(data => (this.Todo = data));
    // .then(data => (console.log(data)))
  }
}
</script>
