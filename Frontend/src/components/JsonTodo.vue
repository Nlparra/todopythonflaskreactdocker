<template >
<h1>hello world</h1>
</template>

<script>
export default {
  name: "get-request",
  data() {
    return {
      Task: null
    };
  },
  created() {
    // Simple GET request using fetch
    fetch("http://localhost:5000/json")
      .then(response => response.json())
    //   .then(data => (this.Todo = data));
    .then(data => (console.log(data)))
  }
}
</script>
