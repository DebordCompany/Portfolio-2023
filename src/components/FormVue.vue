<script>
import emailjs from "@emailjs/browser";

export default {
    data() {
    return {
      
      exito: false,
      error: false,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_odyzzio",
          "template_fmr600k",
          this.$refs.form,
          "jfPd-XM05QVuSC5W9"
        )
        .then(
          (result) => {
            // alert(
            //   "has solicitado mesa en Las Vegas, contestaremos a tu respuesta en breve",
            //   result.text
            // );
            
            this.exito = !this.exito;
          },
          (error) => {
            this.error = !this.error;
          }
        );
      this.$refs.form.reset();
    },
  },
};
</script>

<template>
  <div class="form">
    <div class="form_text">Rellena el formulario y en breve te contactare.</div>
    <div class="form_container">
      <form class="form_container_inner" ref="form" @submit.prevent="sendEmail">
        <input
          class="form_container_inner_input"
          type="text"
          placeholder="NOMBRE"
          name="user_name"
        />
        <input
          class="form_container_inner_input"
          type="email"
          placeholder="EMAIL"
          name="user_email"
        />
        <input
          class="form_container_inner_input"
          type="text"
          placeholder="CONSULTA"
          name="message"
        />
        <input
          class="form_container_inner_input form_container_inner_input--submit"
          type="submit"
          value="ENVIAR"
          placeholder="ENVIAR"
        />
      </form>
    </div>
  </div>
  
  <div class="exito" v-if="exito">
    <div class="exito_content">
      <div class="exito_center">
        <p>Su mensaje se ha enviado correctamente</p>
        <button class="exito_button" @click="exito = !exito">Aceptar</button>
      </div>
    </div>
  </div>
  <div class="exito" v-if="error">
    <div class="exito_content">
      <div class="exito_center">
        <p>Su mensaje no se ha podido enviar</p>
        <button class="exito_button" @click="exito = !exito">Reintentar</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.form_container_inner {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.form_container_inner_input {
  padding: 0.5em;
  border: 1px solid var(--white-soft);
}

input::placeholder {
  color: var(--white-soft);
}
input{
  border-radius: 0px;
}
.form_container_inner_input--submit {
  padding: 0.5em;
  border: 1px solid var(--white-soft);
  background: var(--white-soft);
  color: var(--color-primary);
  width: fit-content;
  margin-top: var(--margin-section);
}

.exito_content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.539);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 30;
}
.exito_center {
  background: var(--color-background);
  color: var(--color-text);
  border: 2px solid var(--black);
  
  max-height: 300px;
  width: 80%;
  padding: 2em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  @include tablet() {
    max-width: 500px;
  }
}
.exito_button {
  background: var(--color-background-button);
  padding: 1em;
  
  color: var(--color-background);
}

</style>
