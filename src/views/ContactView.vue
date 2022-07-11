<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
//import emailjs from 'emailjs-com';

const name = ref("");
const email = ref("");
const message = ref("");

function sendEmail(event: Event): void {
  // try {
  //   emailjs.sendForm(
  //     "YOUR_SERVICE_ID",
  //     "YOUR_TEMPLATE_ID",
  //     event.target,
  //     "YOUR_USER_ID",
  //     {
  //       name: name.value,
  //       email: email.value,
  //       message: message.value,
  //     }
  //   );
  // } catch (error) {
  //   console.log({ error });
  // }
  // // Reset form field
  // name.value = "";
  // email.value = "";
  // message.value = "";
  console.log(name.value, email.value, message.value);
}
</script>

<template>
  <div>
    <div class="contact">
      <h2>GET IN TOUCH</h2>

      <p>
        For inquiries on exhibiting pieces, buying, or general questions, please
        feel free to contact.
      </p>

      <p>
        <a href="mailto:gingsnaps1399@gmail.com" target="_blank"
          >gingsnaps1399@gmail.com</a
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
        <ButtonComponent type="submit">Send</ButtonComponent>
      </form>
    </div>
    <img
      class="back-img"
      src="/artwork/feminine_studies/58.webp"
      onload="this.style.opacity=1"
    />
  </div>
</template>

<style scoped lang="scss">
.contact {
  max-width: 400px;
  text-align: center;
  line-height: 2em;
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
  @media (max-width: 1024px) {
    width: 90%;
  }
}

.back-img {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: -1;
  height: 80%;
  -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  opacity: 0;
  transition: opacity 1s;
}
</style>
