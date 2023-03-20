<template>
  <div class="h-screen w-screen">
    <div
      class="h-full w-full bg-gradient-to-br from-red-400 to-orange-400 flex justify-center md:py-5 items-start lg:items-center">
      <div
        class="z-50 w-full sm:w-11/12 lg:w-9/12 h-full lg:h-5/6 flex flex-col justify-start py-5 sm:py-0 sm:justify-center lg:flex-row px-2 xl:px-5 lg:p-0">
        <div
          @click="changeStateOfMenu()"
          :class="`${statusOfMenu ? 'h-2/4' : 'h-1/6' } transition duration-500 bg-customGray-light rounded-t-[2.2rem] lg:rounded-none lg:rounded-l-[2.2rem] w-full lg:w-1/4 sm:h-1/4 md:h-1/3 lg:h-full flex flex-col sm:justify-between items-center lg:py-3 lg:pr-8`">
          <div
            class="w-full flex justify-center items-center flex-col sm:flex-row lg:flex-col py-10 lg:py-0 lg:pt-10 space-y-1 sm:space-x-4 md:space-x-8 lg:space-x-0 lg:space-y-8">
            <img src="../static/augustinribreau.jpeg" class="w-24 md:w-44 rounded-full border-2 border-gray-400" alt="">
            <div class="space-y-4 md:space-y-8 flex items-center flex-col">
              <div class="flex flex-col items-center">
                <p class="font-bold text-gray-200 text-2xl">Augustin Ribreau</p>
                <p class="text-gray-300 font-light">Full Stack Developer</p>
              </div>
              <div class="flex flex-row space-x-3">
                <a href="https://www.linkedin.com/in/augustinribreau/" target="_blank">
                  <svg class="text-gray-300 hover:text-orange-400 transition" xmlns="http://www.w3.org/2000/svg"
                       width="20"
                       height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M5.004 7h-.029a2.235 2.235 0 1 1 .057-4.457A2.235 2.235 0 1 1 5.004 7Zm-1.986 3h4v12h-4zm14.5 0a4.473 4.473 0 0 0-3.5 1.703V10h-4v12h4v-5.5a2 2 0 0 1 4 0V22h4v-7.5a4.5 4.5 0 0 0-4.5-4.5Z"/>
                  </svg>
                </a>
                <a href="mailto:augustin.ribreau@gmail.com" target="_blank">
                  <svg class="text-gray-300 hover:text-orange-400 transition" xmlns="http://www.w3.org/2000/svg"
                       width="20"
                       height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM20 8l-7.475 4.675q-.125.075-.263.112q-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h16Zm-8 3l8-5H4ZM4 8v.25v-1.475v.025V6v.8v-.013V8.25V8v10Z"/>
                  </svg>
                </a>
                <a href="https://github.com/augustinRibreau" target="_blank">
                  <svg class="text-gray-300 hover:text-orange-400 transition" xmlns="http://www.w3.org/2000/svg"
                       width="20"
                       height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31a4.413 4.413 0 0 0 .21-.76a5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45a12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77a4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39a4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413a1.179 1.179 0 0 1-.17-.112a1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z"/>
                  </svg>
                </a>
                <a href="https://gitlab.com/AugustinRibreau" target="_blank">
                  <svg class="text-gray-300 hover:text-orange-400 transition" xmlns="http://www.w3.org/2000/svg"
                       width="20"
                       height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="m21.94 12.865l-1.066-3.28l.001.005v-.005L18.76 3.076a.833.833 0 0 0-.799-.57a.822.822 0 0 0-.788.575l-2.007 6.178H8.834L6.824 3.08a.822.822 0 0 0-.788-.575H6.03a.839.839 0 0 0-.796.575L3.127 9.584l-.002.006l.001-.005l-1.068 3.28a1.195 1.195 0 0 0 .434 1.34l9.229 6.705l.004.003l.012.008l-.011-.008l.002.001l.001.001a.475.475 0 0 0 .045.028l.006.004l.004.002l.003.001h.002l.006.003l.024.01l.023.01h.001l.004.002l.005.002h.002l.007.002h.002c.011.004.023.006.034.009l.013.003h.002l.005.002l.007.001h.007a.465.465 0 0 0 .066.006h.001a.467.467 0 0 0 .067-.005h.007l.007-.002l.004-.001h.002l.014-.004l.034-.008h.002l.007-.003h.002l.005-.002l.003-.001h.001l.025-.011l.023-.01l.005-.002h.002l.003-.002l.004-.002l.007-.004a.478.478 0 0 0 .044-.027l.004-.003l.005-.003l9.23-6.706a1.195 1.195 0 0 0 .434-1.339Zm-3.973-9.18l1.81 5.574h-3.62Zm1.493 6.516l-.738.947l-5.448 6.98l2.577-7.927Zm-7.91 10.474l.001.004Zm-.827-2.546L4.54 10.2h3.61ZM6.03 3.686l1.813 5.573h-3.62Zm-2.984 9.756a.255.255 0 0 1-.092-.285l.794-2.438l5.822 7.464Zm8.659 7.456l-.006-.005l-.011-.01l-.02-.018l.002.001l.002.002a.478.478 0 0 0 .042.037l.003.002Zm.293-1.894l-1.514-4.665l-1.343-4.138h5.719Zm.31 1.88l-.01.008l-.002.001l-.005.005l-.012.009l.002-.002a.46.46 0 0 0 .043-.036l.001-.002l.002-.002Zm8.643-7.442l-6.523 4.74l5.824-7.463l.791 2.437a.255.255 0 0 1-.092.286Z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/augustin.rbr/?hl=fr" target="_blank">
                  <svg class="text-gray-300 hover:text-orange-400 transition" xmlns="http://www.w3.org/2000/svg"
                       width="20"
                       height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"/>
                    <path fill="currentColor"
                          d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="block md:hidden">
            <div
              class="bg-customGray-extraLight md:bg-customGray-light w-full space-x-7 py-2 px-6 rounded-[3rem] flex flex-row items-center">
              <div @click="changeNav(1)" class="flex flex-col justify-center items-center space-y-1">
                <svg
                     :class="`${currentNav === 1 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`"
                     width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"/>
                </svg>
                <p class="text-xs text-customGray-light">Home</p>
              </div>
              <div @click="changeNav(2)" class="flex flex-col justify-center items-center space-y-1">
                <svg
                     :class="`${currentNav === 2 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`"
                     width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563q.437-.712 1.162-1.087q1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163q.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5q-.138-.225-.363-.35q-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35q-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/>
                </svg>
                <p class="text-xs text-customGray-light">About</p>
              </div>
              <div @click="changeNav(3)" class="flex flex-col justify-center items-center space-y-1">
                <svg
                     :class="`${currentNav === 3 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`"
                     width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M12 20.725q-.25 0-.488-.062q-.237-.063-.462-.188l-5-2.7q-.5-.275-.775-.737Q5 16.575 5 16v-4.8L2.6 9.875q-.275-.15-.4-.375T2.075 9q0-.275.125-.5q.125-.225.4-.375l8.45-4.6q.225-.125.462-.188q.238-.062.488-.062t.488.062q.237.063.462.188l9.525 5.2q.25.125.388.362q.137.238.137.513V16q0 .425-.288.712Q22.425 17 22 17t-.712-.288Q21 16.425 21 16v-5.9l-2 1.1V16q0 .575-.275 1.038q-.275.462-.775.737l-5 2.7q-.225.125-.462.188q-.238.062-.488.062Zm0-8.025L18.85 9L12 5.3L5.15 9Zm0 6.025l5-2.7V12.25l-4.025 2.225q-.225.125-.475.187q-.25.063-.5.063t-.5-.063q-.25-.062-.475-.187L7 12.25v3.775Zm0-6.025Zm0 3.025Zm0 0Z"/>
                </svg>
                <p class="text-xs text-customGray-light">Resume</p>
              </div>
            </div>
          </div>
          <p class="hidden md:block text-xs text-gray-400 font-light">
            © Since 2016 - Augustin Ribreau
          </p>
        </div>
        <div
          :class="`${statusOfMenu ? 'h-2/4' : 'h-5/6' } transition duration-500 bg-customGray-default rounded-[2.2rem] -mt-8 lg:mt-0 lg:-ml-8 w-full lg:w-3/4 sm:h-3/4 md:h-2/3 lg:h-full flex`">
          <transition class="w-full h-full flex justify-center items-center" name="tab-transition" mode="out-in">
            <div :key="currentNav" class="w-full h-full tab-container" v-if="currentNav === 1">
              <TabHome class="animate__animated animate__fadeIn"/>
            </div>
            <div :key="currentNav" class="w-full h-full tab-container py-0 sm:py-4 md:py-8 sm:pr-1"
                 v-if="currentNav === 2">
              <TabAbout class="animate__animated animate__fadeIn"/>
            </div>
            <div :key="currentNav" class="w-full h-full tab-container py-0 sm:py-4 md:py-8 sm:pr-1"
                 v-if="currentNav === 3">
              <TabResume class="animate__animated animate__fadeIn"/>
            </div>
          </transition>
        </div>
      </div>
      <div class="hidden md:block z-50 w-16 py-4 h-full lg:h-5/6 mr-2 xl:mr-5 lg:mr-0">
        <div
          class="bg-customGray-extraLight md:bg-customGray-light w-full space-y-5 py-6 rounded-[3rem] flex flex-col items-center">
          <svg @click="changeNav(1)"
               :class="`${currentNav === 1 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`"
               width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"/>
          </svg>
          <svg @click="changeNav(2)"
               :class="`${currentNav === 2 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`"
               width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563q.437-.712 1.162-1.087q1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163q.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5q-.138-.225-.363-.35q-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35q-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/>
          </svg>
          <svg @click="changeNav(3)"
               :class="`${currentNav === 3 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`"
               width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M12 20.725q-.25 0-.488-.062q-.237-.063-.462-.188l-5-2.7q-.5-.275-.775-.737Q5 16.575 5 16v-4.8L2.6 9.875q-.275-.15-.4-.375T2.075 9q0-.275.125-.5q.125-.225.4-.375l8.45-4.6q.225-.125.462-.188q.238-.062.488-.062t.488.062q.237.063.462.188l9.525 5.2q.25.125.388.362q.137.238.137.513V16q0 .425-.288.712Q22.425 17 22 17t-.712-.288Q21 16.425 21 16v-5.9l-2 1.1V16q0 .575-.275 1.038q-.275.462-.775.737l-5 2.7q-.225.125-.462.188q-.238.062-.488.062Zm0-8.025L18.85 9L12 5.3L5.15 9Zm0 6.025l5-2.7V12.25l-4.025 2.225q-.225.125-.475.187q-.25.063-.5.063t-.5-.063q-.25-.062-.475-.187L7 12.25v3.775Zm0-6.025Zm0 3.025Zm0 0Z"/>
          </svg>
          <!--          <svg @click="changeNav(4)" :class="`${currentNav === 4 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h16V8H4v11Zm6-13h4V4h-4ZM4 19V8v11Z"/></svg>-->
          <!--          <svg @click="changeNav(5)" :class="`${currentNav === 5 ? 'text-orange-400' : 'text-gray-400' } hover:text-orange-400 transition duration-200 cursor-pointer`" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"/></svg>-->
        </div>
      </div>
      <div
        class="fixed overflow-hidden -right-40 -top-16 bg-red-200 opacity-50 w-[40rem] h-[40rem] rounded-full"></div>
      <div
        class="fixed overflow-hidden -left-60 -bottom-20 bg-red-200 opacity-50 w-[40rem] h-[40rem] rounded-[5rem] rotate-12"></div>
      <div
        class="fixed overflow-hidden right-1/2 -top-40 bg-red-200 opacity-50 w-[5rem] h-[20rem] rounded-full rotate-45"></div>
      <div
        class="fixed overflow-hidden right-28 bottom-40 bg-red-200 opacity-50 w-[1rem] h-[1rem] rounded-full"></div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
import TabHome from "../components/tabs/home.vue";
import TabAbout from "../components/tabs/about.vue";
import TabResume from "../components/tabs/resume.vue";

export default {
  name: 'Home',
  components: {TabResume, TabAbout, TabHome},
  data() {
    return {
      currentNav: 3,
      statusOfMenu: false,
    }
  },
  methods: {
    changeStateOfMenu() {
      this.statusOfMenu = !this.statusOfMenu;
    },
    changeNav(id) {
      this.currentNav = id;
    }
  }
}
</script>
