<template>
  <main class="min-h-screen bg-gray-100">
    <header class="bg-white h-12 border-b-2 border-t-neutral-800 flex items-center pl-5">
      <NavPopover />
      <router-link :to="{ name: 'Topics' }" class="pl-5">Topics</router-link>
      <p @click="singOut()" class="pl-5 cursor-pointer">Sign Out</p>
    </header>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import NavPopover from "./components/NavPopover/NavPopover.vue";
import supabase from "./db/db";

const router = useRouter()

async function singOut() {
  await supabase.auth.signOut()
  router.push({ name: 'Home' })
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
