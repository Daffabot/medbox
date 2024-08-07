<template>
<div class="max-h-screen flex flex-col justify-center brah">
    <nav class="fixed top-0 z-10 sm:z-[1] h-14 w-full flex justify-between transition duration-500 ease-in-out"
      :class="{'max-[640px]:h-full': open, 'bg-nav': open }" x-data="{ open: false }">
      <div class="w-12 h-12 bg-no-repeat bg-contain ml-[16px] mt-[4px] transition duration-500 ease-in-out"></div>
      <ul class="flex sm:flex-row-reverse max-[640px]:flex-col justify-center items-center text-center transition duration-500 ease-in-out"
        :class="{'max-[640px]:hidden': !open }">
        <li>
          <h1 class="text-color-two max-[640px]:mx-auto sm:mr-8 max-[330px]:text-4xl max-[640px]:text-6xl font-bold max-[640px]:mb-20 transition duration-500" :class="{'nav-ani': open }"><router-link to="/" @click="navigateToHome">>Home</router-link></h1>
        </li>
        <li class="text-color-two sm:mr-8 transition duration-500" :class="{'nav-ani': open }">Social: <a href="https://twitter.com/daffabot_id" target="_blank" rel="noopener noreferrer" class="underline">TW</a> <a href="https://github.com/Daffabot" target="_blank" rel="noopener noreferrer" class="underline">GH</a> <a href="https://linkedin.com/in/daffabot" target="_blank" rel="noopener noreferrer" class="underline">LI</a></li>
        <li class="text-color-two sm:mr-8 transition duration-500" :class="{'nav-ani': open }">Available For Exigent <a href="https://wa.me/+6285156207150?text=Halo+Bang" rel="noopener noreferrer" target="_blank" class="underline">+62 85156207150</a></li>
      </ul>
      <button class="w-14 h-14 focus:outline-none rounded sm:hidden" @click="open = !open">
        <div class="block w-14">
          <span class="block absolute h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out"
            :class="{'rotate-45': open, '-translate-y-1.5': !open }"></span>
          <span class="block absolute  h-0.5 w-5 bg-color-one transform transition duration-500 ease-in-out"
            :class="{'opacity-0': open } "></span>
          <span class="block absolute  h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out"
            :class="{'-rotate-45': open, 'translate-y-1.5': !open}"></span>
        </div>
      </button>
    </nav>
    <main>
        <img src="../assets/asergei.png" alt="photo" class="absolute -top-24 h-[900px] w-[900px] object-contain mx-auto">
      <section class="h-screen flex flex-col justify-center items-end">
        <div class="absolute title ml-auto mr-10 text-right text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold max-w-max text-color-one">
          <h1 class="mb-[1rem] text-ani" id="animated"> -Daffa Ahmad Ibrahim</h1>
          <h1 class="mb-[1rem] text-ani" id="animated">Abdi Putra Radian-</h1>
          <h1 class="text-ani" id="animated">-Ja'far Sodiq</h1>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false, // Initial state of the navigation menu
    };
  },
  methods: {
    toggleMenu() {
      this.open = !this.open; // Toggles the open state of the menu on button click
    },
    navigateToHome(event) {
      event.preventDefault(); // Mencegah navigasi default
      this.$router.push('/').then(() => {
        window.location.reload();
      });
    }
  },
}
</script>