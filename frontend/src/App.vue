<template>
      <div id="app" class="container" style="padding-top: 100px">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <div class="row" v-if="entered">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header">Chatbox</div>
                      <div class="card-body">
                        <!-- messages will be here -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" v-else>
                  <div class="col-md-12">
                    <form method="post" @submit.prevent="enterChat">
                      <div class="form-group">
                        <div class='input-group'>
                          <input
                            type='text'
                            class="form-control"
                            placeholder="Enter your username"
                            v-model="username"
                          >
                          <div class='input-group-append'>
                            <button class='btn btn-primary' @click="enterChat">Enter</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'app',
      data() {
        return {
          username: '',
          message: '',
          entered: false,
        };
      },
      methods: {
        enterChat() {
          this.entered = !!this.username != '';
        },
      },
    };
    </script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
