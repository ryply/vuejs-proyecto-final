<template>
  <div v-if="lessons">
    <ol class="grid pl-4 md:pl-0">
      <CourseContent v-for="lesson of lessons" :key="lesson.id" :lesson="lesson" :courseid="courseid" />
    </ol>
  </div>
</template>

<script setup>
import CourseContent from "./CourseContent.vue";
import supabase from "../../db/db";
import { useRoute } from "vue-router";
import { ref } from "vue";

const lessons = ref()
const route = useRoute()
const courseid = route.params.id

async function getLessons() {
  const { data, error } = await supabase.from('lessons').select().eq('course_id', route.params.id)

  if (error) {
    console.log(eror);
  }

  console.log(data);
  lessons.value = data
}
getLessons()
</script>
