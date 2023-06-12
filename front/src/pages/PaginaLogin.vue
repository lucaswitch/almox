<template>
  <v-sheet rounded>
    <h1 class="d-flex justify-center mb-10">Login</h1>
    <v-card class="mx-auto px-6 py-8" style="background-color: #e8f4f4" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="logInPost"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
          placeholder="joaosilva@ceub.edu.br"
        ></v-text-field>

        <p v-if="formIsValid = false">Por favor coloque um email válido!</p>

        <v-text-field
        v-model="password"
            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            @click:append-inner="show1 = !show1"
            clearable=""
        ></v-text-field>

        <br>


        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click ="logInPost"
        >
          Entrar
        </v-btn>
      </v-form>
      <br>
      <p class="d-flex justify-center">Não possui conta?</p>
      <span class="d-flex justify-center">
        <router-link to="signin">Crie uma conta</router-link>
      </span>
    </v-card>
  </v-sheet>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      show1: false,
      form: true,
      email: null,
      password: null,
      loading: false,
      rules: {
          required: value => !!value || 'Campo obrigatório'
        },
    }),

    //Data for login
    loginData() {
      return {
        email: '',
        password: '',
        formIsValid: true,
        mode: 'login'
      }
    },

    methods: {
      //Login post
      logInPost() {
        axios
        .post('http://34.151.221.81/sign-in', { username:this.email, password:this.password})
        .then((response) => console.log(response))
      }
    }

  }

</script>
