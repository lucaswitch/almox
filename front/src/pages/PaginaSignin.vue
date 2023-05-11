<template>
  <v-card
    class="mx-auto"
    max-width="344"
    title="Cadastre-se"
  >
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="Primeiro nome"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Sobrenome"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Senha"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      show1: false,
      form: false,
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
      signInPost() {
        axios
        .post('http://localhost:3000/sign-in', this.postData)
        .then((response) => console.log(response))
      }
    }

  }

</script>
