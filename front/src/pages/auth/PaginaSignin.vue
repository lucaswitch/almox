<template>
  <v-sheet rounded>
    <h1 class="d-flex justify-center mb-10">Cadastre-se</h1>
    <v-card class="mx-auto px-6 py-8" style="background-color: #e8f4f4" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="signUp"
      >
      <v-text-field
          v-model="text"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Nome Completo"
          placeholder="João Silva"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
          placeholder="joaosilva@ceub.edu.br"
        ></v-text-field>

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
          @click ="signUp"
        >
          Entrar
        </v-btn>
      </v-form>
      <br>
      <p class="d-flex justify-center">Já possui uma conta?</p>
      <span class="d-flex justify-center">
        <router-link to="login">Faça seu login</router-link>
      </span>
    </v-card>
  </v-sheet>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      show1: false,
      form: false,
      email: null,
      text: null,
      password: null,
      loading: false,
      rules: {
          required: value => !!value || 'Campo obrigatório'
        },
    }),

    //Data for login
    loginData() {
      return {
        postData: {
          username: '',
          password:  ''
        }
      }
    },

    methods: {
      onSubmit () {
        if (!this.form) return
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Campo obrigatório'
      },
  
      //Login post
      signUp() {
        axios
        .post('http://34.151.221.81:81/sign-up', { username:this.email, password:this.password, full_name:this.text})
        .then(function (response) {
            if (response.status == 200) {
                window.location = "/login"
            } 
        }).catch(function(error){
          console.log('erros : ',error);
      }) 
      }
    }

  }

</script>
