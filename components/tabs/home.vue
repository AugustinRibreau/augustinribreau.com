<template>
  <div class="h-full w-full flex justify-center items-center flex-col space-y-4">
    <p class="text-gray-200 font-bold text-5xl text-center">Augustin Ribreau</p>
    <p class="text-gray-500 text-lg">{{currentTitle}}</p>
  </div>
</template>
<script>
export default {
  name: 'tabHome',
  data() {
    return {
      titles: ["Full Stack Developer", "Junior Hacker", "Hard Worker", "Scoutmaster"],
      currentTitle: "Full Stack Developer",
    }
  },
  mounted() {
    setInterval(this.nextTitre, 3500);
  },
  methods: {
    nextTitre() {
      const index = this.titles.indexOf(this.currentTitle);
      if (index === -1 || index === this.titles.length - 1) {
        this.currentTitle = this.titles[0];
      } else {
        this.currentTitle = this.titles[index + 1];
      }
    }
  }
}
</script>
