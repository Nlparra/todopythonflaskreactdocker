// <script>
// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   },
//   methods: {
//     // Log the user in
//     login() {
//       this.$auth.loginWithRedirect();
//     },
//     // Log the user out
//     logout() {
//       this.$auth.logout({
//         returnTo: window.location.origin
//       });
//     }
//   }
// };
// </script>

<template>

<nav class="navbar-expand-lg navbar navbar-light bg-light">
  <div class="container-fluid">
       <a class="navbar-brand" href="#">
      <img src="../assets/rgilogo.png" alt="" width="60" height="50" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="nav navbar-nav">
         <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/About">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/List">Todo List Jinja</router-link>
        </li>
        <!-- THIS IS THE SIGN IN POP UP -->
          <li class="nav-item ml-5">
          <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
            Sign In
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Welcome to RGI Portal</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <span class="navbar-text">
      <a href="tel:+6782697754"><i class="fa-solid fa-phone"></i>678.269.7754</a>
    </span>
    </div>
  </div>
</nav>



</template>

<style>
.navbar-text{
  margin-left: 40px;
  margin-right: 10px;
}
.navbar-text a{
  text-decoration: none;
}
</style>