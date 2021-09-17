<template>
  <div class="grid grid-cols-5">
    <div class="col-span-3 p-4 space-y-2 text-right">
      <div class="text-2xl font-semibold">Abel Chen</div>
      <div><strong>Role:</strong> Developer / Writer</div>
      <!-- TODO: attach pdf and create directories for people headshots and resumes -->
      <div>
        <strong>Resume/CV:</strong> <a href="https://google.com"><u>chen-abel-2021-09-16.pdf</u></a>
      </div>
      <div class="italic font-serif">"I am so f*cking good at taking dumps in people's faces."</div>
      <div class="flex pl-1 space-x-2 justify-end items-center">
        <a href="https://www.linkedin.com/in/leo6" target="_blank"
          ><SvgLinkedInLogoSquare class="h-8 hover:text-gray-200 duration-200"
        /></a>
        <a href="https://github.com/leo6liu" target="_blank"
          ><SvgGitHubLogoSquare class="h-9 hover:text-gray-200 duration-200"
        /></a>
        <a href="mailto:leo.battalora@gmail.com" target="_blank"
          ><SvgMailIcon class="h-9 hover:text-gray-200 duration-200"
        /></a>
      </div>
    </div>
    <div class="col-span-2 p-4 justify-self-center self-center">
      <img src="/abel_chen_1000x1000.jpg" class="w-64 rounded-3xl" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>