<template>
  <v-form class="px-3" @submit.prevent="postLabAppointment">
    <v-col v-if="status === null">
      <v-row>
        <v-col>
          <v-select
            v-model="lab_id"
            clearlable
            color="teal-darken-2"
            label="Laboratório"
            item-title="name"
            item-value="id"
            :items="labs"
            :error-messages="errors.lab_id ? [errors.lab_id] : ''"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="student_capacity"
            clearable
            color="teal-darken-2"
            label="Quantidade de alunos"
            :error-messages="
              errors.student_capacity ? [errors.student_capacity] : ''
            "
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="scheduled_at"
            v-mask="'##/##/####'"
            clearable
            color="teal-darken-2"
            label="Data da aula"
            prepend-inner-icon="mdi-calendar-range"
            :error-messages="errors?.scheduled_at ? [errors.scheduled_at] : ''"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="time"
            v-mask="'##:##'"
            clearable
            color="teal-darken-2"
            label="Horário"
            append-inner-icon="mdi-clock-time-eight"
            :error-messages="errors?.time ? [errors.time] : ''"
          />
        </v-col>
      </v-row>
      <p class="font-weight-bold">Materiais</p>
      <p>Selecione os materiais que serão utilizados na aula</p>
      <ul style="list-style: none">
        <li v-for="(material, i) in materials" :key="i">
          <v-row class="mt-2" style="align-items: center">
            <v-col cols="4">
              <v-select
                v-model="materials[i].id"
                clearlable
                color="teal-darken-2"
                label="Material"
                item-title="name"
                item-value="id"
                :items="mats"
                :error-messages="
                  errors?.[`materials[${i}].id`]
                    ? [errors[`materials[${i}].id`]]
                    : ''
                "
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="materials[i].quantity"
                clearable
                color="teal-darken-2"
                v-bind:label="'Quantidade ' + getMaterialMetric(material.id)"
                :error-messages="
                  errors?.[`materials[${i}].quantity`]
                    ? [errors[`materials[${i}].quantity`]]
                    : ''
                "
              />
            </v-col>
            <v-col cols="2">
              <v-btn
                prepend-icon="mdi-minus"
                variant="text"
                rounded="pill"
                color="teal-darken-2"
                @click="removeMaterial(i)"
                >Deletar
              </v-btn>
            </v-col>
          </v-row>
        </li>
      </ul>
      <v-btn
        prepend-icon="mdi-plus"
        variant="text"
        rounded="pill"
        color="teal-darken-2"
        @click="addMaterial"
        >Adicionar
      </v-btn>

      <v-textarea
        v-model="note"
        class="mt-5"
        clearable
        auto-grow
        color="teal-darken-2"
        label="Observações"
        :error-messages="errors.note ? [errors.note] : ''"
      />

      <v-btn
        class="mr-2"
        rounded="pill"
        color="teal-darken-2"
        @click="postLabAppointment"
        >Enviar
      </v-btn>
      <v-btn
        class="ml-2"
        variant="text"
        rounded="pill"
        color="teal-darken-2"
        router
        to="/agenda"
        >Cancelar
      </v-btn>
    </v-col>
    <v-col v-else-if="status === 'success'">
      <v-alert
        type="success"
        title="Tudo certo!"
        text="Você acaba de agendar o laboratório!"
      ></v-alert>
    </v-col>
    <v-col v-else-if="status === 'error'">
      <v-alert
        type="error"
        title="Ocorreu um problema"
        text="Não conseguimos estabelecer conexão com o servidor, tente novamente mais tarde."
      ></v-alert>
    </v-col>
  </v-form>
</template>

<script>
import { BASE_URL } from "@/contants";
import axios from "axios";
import { mask } from "vue-the-mask";
import { FormAgendaSchema } from "@/validators";
import moment from "moment";

export default {
  data() {
    return {
      status: null,
      errors: {},
      labs: [],
      mats: [],
      lab_id: "",
      student_capacity: null,
      scheduled_at: "",
      time: "",
      materials: [
        {
          id: null,
          name: null,
        },
      ],
      note: "",
    };
  },

  directives: { mask },

  mounted() {
    this.getLabs();
    this.getMaterials();
  },

  methods: {
    getMaterialMetric(id) {
      for (const material of this.mats) {
        if (material.id === id) {
          return material.metric;
        }
      }
      return "";
    },
    addMaterial() {
      this.materials.push({
        id: null,
        name: null,
      });
    },
    removeMaterial(index) {
      this.materials = this.materials.filter(function (material, i) {
        return i !== index;
      });
    },
    getLabs: function () {
      var vm = this;
      axios
        .get(`${BASE_URL}/labs`)
        .then((response) => {
          vm.labs = response.data;
        })
        .catch(function (error) {
          console.log("erros : ", error);
        });
    },

    getMaterials: function () {
      var vm = this;
      axios
        .get(`${BASE_URL}/materials`)
        .then((response) => {
          vm.mats = response.data;
        })
        .catch(function (error) {
          console.log("erros : ", error);
        });
    },

    async postLabAppointment() {
      const data = {
        lab_id: this.lab_id,
        student_capacity: this.student_capacity,
        scheduled_at: this.scheduled_at,
        time: this.time,
        materials: this.materials.map(function ({ name, id, quantity }) {
          return { name, id, quantity };
        }),
        note: this.note,
      };
      this.errors = {};
      try {
        await FormAgendaSchema.validate(data, { abortEarly: false });
      } catch (err) {
        if (err?.inner) {
          for (const { path, message } of err.inner) {
            this.errors[path] = message;
          }
        }
        return;
      }

      const scheduledAt = moment(
        data.scheduled_at + ` ${this.time}:00`,
        "DD/MM/YYYY HH:mm:ss"
      );

      try {
        await axios.post(`${BASE_URL}/appointments`, {
          ...data,
          scheduled_at: scheduledAt.unix(),
        });
        this.status = "success";
      } catch (err) {
        this.status = "error";
      }
    },
  },
};
</script>
