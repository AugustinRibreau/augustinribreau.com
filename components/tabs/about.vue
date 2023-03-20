<template>
  <div class="scrollbar h-full w-full overflow-y-auto flex-col space-y-10 sm:space-y-20 bg-customGray-default rounded-[2.2rem] p-4 sm:p-8 lg:p-16 py-5 sm:py-4 lg:py-8">
    <div class="flex flex-col space-y-4 w-full">
      <p class="text-white font-bold text-3xl">About <span class="text-orange-500">me</span></p>
      <div class="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 lg:space-x-10">
        <div class="w-full lg:w-1/2 text-gray-200">
          Augustin is a passionate full stack developer who is enthusiastic about computer science and SaaS. Currently
          in his 5th year of engineering school, he is dedicated to constantly expanding his knowledge and skills in the
          technology field. His ambition is to work in a stimulating environment where he can contribute to innovative
          and ambitious projects, and thus make a valuable contribution.
        </div>
        <div class="w-full lg:w-1/2 flex flex-col space-y-3">
          <p class="text-white font-normal"><span class="text-orange-500 font-semibold mr-3">Age</span>22</p>
          <p class="text-white font-normal"><span class="text-orange-500 font-semibold mr-3">Residence</span>Nantes</p>
          <a class="text-white font-normal" href="mailto:augustin.ribreau@gmail.com"><span
            class="text-orange-500 font-semibold mr-3">E-mail</span>augustin.ribreau@gmail.com</a>
          <p></p>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-4 select-none w-full">
      <p class="text-white font-bold text-3xl">What I <span class="text-orange-500">do</span></p>
      <div class="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-10">
        <div class="w-full lg:w-1/2 flex flex-col space-y-4">
          <div class="space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16v10H4z" opacity=".3"/>
              <path fill="currentColor"
                    d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
            </svg>
            <p class="text-gray-200 text-xl font-semibold">Frontend developper</p>
            <p class="text-gray-200 text-justify">I am a frontend developer specialized in creating interactive and
              intuitive UX/UI interfaces, with strong skills in responsive design, frontend testing, and integration of
              JS and CSS frameworks.</p>
          </div>
          <div class="space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024">
              <path fill="currentColor"
                    d="M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z"/>
              <path fill="currentColor"
                    d="M424 748a32 32 0 1 0 64 0a32 32 0 1 0-64 0zm0-178a32 32 0 1 0 64 0a32 32 0 1 0-64 0z"/>
              <path fill="currentColor"
                    d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6C64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9c-27-3.4-52.5-15.2-72.1-34.5c-24-23.5-37.2-55.1-37.2-88.6c0-28 9.1-54.4 26.2-76.4c16.7-21.4 40.2-36.9 66.1-43.7l37.9-10l13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5c14.9-19.2 32.6-36 52.4-50c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50c15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6l37.8 10c54.2 14.4 92.1 63.7 92.1 120c0 33.6-13.2 65.1-37.2 88.6c-19.5 19.2-44.9 31.1-71.9 34.5c-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8c101.7-9.2 182.5-94 183.2-198.2c.6-93.4-62.7-172.1-148.6-194.9z"/>
            </svg>
            <p class="text-gray-200 text-xl font-semibold">Saas</p>
            <p class="text-gray-200 text-justify">My older brother, François-Guillaume Ribreau, instilled in me a
              passion for computer science and creating SaaS projects at a young age. For the past 3 years, I have been
              constantly developing projects in my free time.</p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col space-y-4">
          <div class="space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8v2m0 8h1v-2H8v2m0 8h1v-2H8v2M4 3v2h2V3H4m0 8v2h2v-2H4m0 8v2h2v-2H4m13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3l4.5-2m0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34v-7.12Z"/>
            </svg>
            <p class="text-gray-200 text-xl font-semibold">Backend developper</p>
            <p class="text-gray-200 text-justify">As a backend developer, I specialize in creating robust connections
              between the frontend and the database, with skills in unit testing, ORM, NodeJS, and other advanced
              backend technologies.</p>
          </div>
          <div class="space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9H4h1.5A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3m14-6v4a2 2 0 1 0 4 0V7a2 2 0 1 0-4 0zM3 16c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
            </svg>
            <p class="text-gray-200 text-xl font-semibold">360° vision</p>
            <p class="text-gray-200 text-justify">Thanks to the projects I have been developing since 2016, I have been
              able to acquire skills in various areas in the corporate world. Now, I am able to manage a project from
              ideation to production, communication, hosting, etc.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-10 select-none w-full">
      <div class="space-y-4">
        <p class="text-white font-bold text-3xl">Testimonials</p>
        <div class="w-full flex flex-col lg:flex-row justify-around space-y-4 lg:space-y-0 lg:space-x-10">
          <div
            class="lg:filter w-full lg:w-1/2 lg:grayscale space-y-5 hover:border-customGray-light hover:filter-none transition rounded-2xl border border-customGray-extraLight flex flex-col justify-between p-4">
            <div class="space-y-5">
              <div class="flex flex-row space-x-2">
                <img class="w-12 h-12 rounded-full" src="../../static/ArthurLeRay.jpeg" alt="">
                <div class="flex flex-col justify-between">
                  <p class="text-lg text-white font-semibold">Arthur Le Ray</p>
                  <p class="text-sm text-gray-400">@arthurleray</p>
                </div>
              </div>
              <p class="w-full text-white text-sm">Augustin is a skilled and sociable developer who knows how to work in a
                team, share his knowledge, and help his colleagues achieve the company's objectives. [...]</p>
            </div>
            <p class="text-gray-400 text-xs">16 mars 2023</p>
          </div>
          <div
            class="lg:filter w-full lg:w-1/2 lg:grayscale space-y-5 hover:border-customGray-light hover:filter-none transition rounded-2xl border border-customGray-extraLight flex flex-col justify-between p-4">
            <div class="space-y-5">
              <div class="flex flex-row space-x-2">
                <img class="w-12 h-12 rounded-full" src="../../static/KevinGillet.jpeg" alt="">
                <div class="flex flex-col justify-between">
                  <p class="text-lg text-white font-semibold">Kévin Gillet</p>
                  <p class="text-sm text-gray-400">@kevingillet</p>
                </div>
              </div>
              <p class="w-full text-white text-sm">Augustin is a talented web developer with strong technical knowledge
                and great creativity. He is effective in working as a team and ensures optimal efficiency in projects. He
                is an invaluable addition to any IT team. [...]</p>
            </div>
            <p class="text-gray-400 text-xs">17 mars 2023</p>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/augustinribreau/details/recommendations/?detailScreenTabIndex=0"
         class="text-orange-400 hover:text-orange-500 transition" target="_blank">See more</a>
    </div>
    <div class="flex flex-col space-y-10 select-none w-full">
      <p class="text-white font-bold text-3xl">Fun <span class="text-orange-500">Facts</span></p>
      <div class="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-7">
        <div class="w-full h-52 bg-customGray-light border-2 rounded-xl border-customGray-extraLight flex justify-center items-center flex-col">
          <div class="flex flex-col items-center space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768z"/><path fill="currentColor" d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"/></svg>
            <p class="text-white font-semibold text-lg">Hours per week</p>
            <p class="text-4xl text-gray-400">70</p>
          </div>
        </div>
        <div class="w-full h-52 bg-customGray-light border-2 rounded-xl border-customGray-extraLight flex justify-center items-center flex-col">
          <div class="flex flex-col items-center space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="m256.65 38.984l-49.697 100.702l-111.13 16.146l80.413 78.385l-18.982 110.68l99.396-52.256l99.397 52.256l-18.983-110.68l80.413-78.384l-111.127-16.146l-49.7-100.702zM112 308.826l-26.674 54.05l-59.646 8.665l43.16 42.073l-10.188 59.403L112 444.97l53.348 28.046l-10.188-59.403l43.16-42.072l-59.646-8.665L112 308.825zm288 0l-26.674 54.05l-59.646 8.665l43.16 42.073l-10.188 59.403L400 444.97l53.348 28.046l-10.188-59.403l43.16-42.072l-59.646-8.665L400 308.825z"/></svg>
            <p class="text-white font-semibold text-lg">Git Stars</p>
            <p class="text-4xl text-gray-400">43</p>
          </div>
        </div>
        <div class="w-full h-52 bg-customGray-light border-2 rounded-xl border-customGray-extraLight flex justify-center items-center flex-col">
          <div class="flex flex-col items-center space-y-2">
            <svg class="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 256 256"><path fill="currentColor" d="M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z"/></svg>
            <p class="text-white font-semibold text-lg">Happy Clients</p>
            <p class="text-4xl text-gray-400">231</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tab-about',
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
  @apply w-1;
}

.scrollbar::-webkit-scrollbar-track {
  @apply bg-transparent h-20 !important;
}

.scrollbar::-webkit-scrollbar-thumb {
  @apply rounded-full bg-customGray-extraLight;
}
</style>
