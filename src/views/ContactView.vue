<script setup lang="ts">
import ButtonComponent from "@/components/buttons/ButtonComponent.vue";
import { ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const message = ref("");

type ButtonStatus = "waiting" | "success" | "error" | "none";
const formStatus = ref<ButtonStatus>("none");

function sendEmail(): void {
  formStatus.value = "waiting";
  emailjs
    .send(
      "service_oztye7t",
      "template_967nxtw",
      {
        from_name: name.value,
        from_email: email.value,
        reply_to: email.value,
        message: message.value,
      },
      "C4c_KaDXK0NO8sb_M"
    )
    .then(
      (result: any) => {
        console.log("Email sent!", result.text);
        formStatus.value = "success";
        name.value = "";
        email.value = "";
        message.value = "";
      },
      (error: any) => {
        console.log("Email failed...", error.text);
        formStatus.value = "error";
      }
    );
}
</script>

<template>
  <section class="contact">
    <h2>GET IN TOUCH</h2>

    <p>
      For inquiries on exhibiting pieces, buying, or general questions, please
      feel free to contact me.
    </p>

    <p>
      <a href="mailto:gingsnaps1399@gmail.com" target="_blank"
        >danielleromaineart@gmail.com</a
      >
    </p>
    <form @submit.prevent="sendEmail">
      <input
        class="input"
        v-model="name"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        class="input"
        v-model="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        class="input"
        v-model="message"
        rows="7"
        name="message"
        placeholder="Message"
        required
      />
      <br />
      <ButtonComponent type="submit" :status="formStatus">{{
        formStatus === "success"
          ? "Sent"
          : formStatus === "error"
          ? "Failed to send email"
          : "Send"
      }}</ButtonComponent>
    </form>
  </section>
</template>

<style scoped lang="scss">
.contact {
  max-width: 600px;
  margin: 40px;
  line-height: 2em;
  h2 {
    letter-spacing: 2px;
  }
  a {
    color: var(--text-color);
  }
  .input {
    outline: none;
    resize: vertical;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-bottom: 2px solid #aaa;
    padding: 10px 10px;
    margin: 10px 0;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.4s;

    &::placeholder {
      color: black;
      text-transform: uppercase;
    }

    &:focus {
      border-bottom-color: black;
    }
  }
}
</style>
