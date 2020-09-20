<template>
<v-main>
  <v-container
        fill-height
      >
        <v-row no-gutters
        >
          <v-col
            cols="12"
            align="center"
            justify="center"
          >
          <div class="py-12"></div>
            <v-card class="elevation-12 mx-auto" max-width="344">
              <v-toolbar
                color="purple"
                dark
                flat
              >
                <v-toolbar-title>Masuk</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field type="text" v-model="email" label="Email" prepend-icon="mdi-account"/>
                  <v-text-field type="password" v-model="password" label="Password" v-on:keyup.enter="signIn" prepend-icon="mdi-lock"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="signIn" color="purple" dark>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</v-main>
</template>

<script>
import { firebaseAuth } from '@/firebase/firebaseAuth'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    signIn () {
      firebaseAuth
        .signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
          // Handle Errors here.
          var errorMessage = error.message;

          window.alert("Error : " + errorMessage);

          // ...
        });

    }
  },
  watch: {
    user (user) {
      if (user) this.$router.replace('/admin')
    }
  },
}
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
