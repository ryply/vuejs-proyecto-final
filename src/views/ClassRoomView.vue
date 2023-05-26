<template>
  <div>
    <div class="lg:flex">
      <!--This will be replaced by a real video player -->
      <div class="border-2 border-red-600 h-80 flex items-center justify-center w-full">
        <video-player v-if="classUrl" :src="classUrl" controls class="h-full">

        </video-player>
      </div>
      <!---->
      <div class="mt-6 pl-4">
        <p class="font-bold text-lg">Lessons</p>
        <CourseContentList />
      </div>
    </div>
    <div class="pl-4 mt-6">
      <p class="font-bold text-lg">Comments</p>
      <ClassCommentList />
    </div>
  </div>
</template>

<script setup>
import CourseContentList from "../components/CourseContentList/CourseContentList.vue";
import ClassCommentList from "../components/ClassComment/ClassCommentList.vue";
import supabase from "../db/db";
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

const route = useRoute()
const classUrl = ref()

async function getYideoClass(classid) {
  // console.log(route.params.classid);

  const { data: lesssondata, error: lessonerror } = await supabase.from('lessons').select('video_url').eq('id', classid).single()
  if (lessonerror) {
    console.log(lessonerror);
  }
  console.log(lesssondata);
  const videoUrl = lesssondata.video_url

  const { data, error } = await supabase.storage.from('vuejs').createSignedUrl(videoUrl, 60) // 60, la url caduca a los 60 segundos
  if (error) {
    console.log(error);
  }
  console.log(data);
  classUrl.value = data.signedUrl
}
getYideoClass(route.params.classid)

onBeforeRouteUpdate((route) => {
  getYideoClass(route.params.classid)
})
</script>
