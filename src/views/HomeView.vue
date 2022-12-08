<template>
  <div>
    <h1>Bienvenido {{                     user                     }}</h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Home',
  data: () => ({
    user: null
  }),
  async mounted() {
    const base_url = "http://localhost:3301/users"

    const { data } = await axios.get(base_url)

    this.user = data[1].username
  }
}
</script>
