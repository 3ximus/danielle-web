<template>
  <div class="contact">
    <h2>GET IN TOUCH</h2>

    <p>gingsnaps1398@gmail.com</p>

    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
    </div>
    <textarea rows="5" placeholder="Message" />
  </div>
</template>

<style scope lang="scss">
.contact {
  width: 50%;
  text-align: center;
}
input,
textarea {
  outline: none;
  resize: vertical;
  width: 100%;
  border: none;
  border-bottom: 2px solid #aaa;
  padding: 10px 0;
  margin: 10px 0;
  background: none;
  color: var(--text-color);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.4s;

  &::placeholder {
    color: black;
    text-transform: uppercase;
  }

  &:focus {
    border-bottom-color: black;
  }
}
</style>
