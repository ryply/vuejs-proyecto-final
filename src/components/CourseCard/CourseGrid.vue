<template>
  <div v-if="courses" class="gap-4 grid justify-items-center"
    style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))">
    <CourseCard v-for="course of courses" :key="course.id" :course="course" />
  </div>
</template>

<script setup>
import CourseCard from "./CourseCard.vue";
import supabase from '../../db/db.js';
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const courses = ref([]);

async function getCourses() {
  const { data, error } = await supabase.from('courses').select().eq('topic_id', route.params.id)

  if (error) {
    console.log(error);
  }

  console.log(data);
  courses.value = data
}
getCourses()
</script>
