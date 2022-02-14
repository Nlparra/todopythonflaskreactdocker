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
    fetch("http://127.0.0.1:5000/")
      .then(response => response.text())
      .then(data => (this.Todo = data));
    // .then(data => (console.log(data)))
  },
    new_todo(content){
      fetch("http://127.0.0.1:5000/",{
    method:"POST",
    body:({
      content: content
    }),
    headers: {
				"Content-type": "text/html; charset=utf-8"
    }
    })
    }
}
</script>
