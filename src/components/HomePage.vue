<template>
  <div class="min-h-screen flex flex-col justify-center brah">
    <nav class="fixed top-0 z-10 sm:z-[1] h-14 w-full flex justify-between transition duration-500 ease-in-out" v-bind:class="{'max-[640px]:h-full': open, 'bg-nav': open }" x-data="{ open: false }">
      <div class="w-12 h-12 bg-[url('https://raw.githubusercontent.com/Daffabotv2/medakabox/main/src/assets/logo2.png')] bg-no-repeat bg-contain ml-4 mt-1"></div>
      <ul class="flex sm:flex-row-reverse max-[640px]:flex-col justify-center items-center transition duration-500 ease-in-out text-center" v-bind:class="{'max-[640px]:hidden': !open }">
        <li>
          <h1 class="text-color-two max-[640px]:mx-auto sm:mr-8 max-[330px]:text-4xl max-[640px]:text-6xl font-bold max-[640px]:mb-20 transition duration-500" v-bind:class="{'nav-ani': open }"><router-link to="/about" @click="navigateToAbout">>About</router-link></h1>
        </li>
        <li class="text-color-two sm:mr-8 transition duration-500" v-bind:class="{'nav-ani': open }">Social: <a href="https://twitter.com/daffabot_id" target="_blank" rel="noopener noreferrer" class="underline">TW</a> <a href="https://github.com/Daffabot" target="_blank" rel="noopener noreferrer" class="underline">GH</a> <a href="https://linkedin.com/in/daffabot" target="_blank" rel="noopener noreferrer" class="underline">LI</a></li>
        <li class="text-color-two sm:mr-8 transition duration-500" v-bind:class="{'nav-ani': open }">Available For Exigent <a href="https://wa.me/+6285156207150?text=Halo+Bang" rel="noopener noreferrer" target="_blank" class="underline">+62 85156207150</a></li>
      </ul>
      <button class="w-14 h-14 focus:outline-none rounded sm:hidden" @click="open = !open">
        <div class="block w-14">
          <span class="block absolute h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out" v-bind:class="{'rotate-45': open, '-translate-y-1.5': !open }"></span>
          <span class="block absolute  h-0.5 w-5 bg-color-one transform transition duration-500 ease-in-out" v-bind:class="{'opacity-0': open } "></span>
          <span class="block absolute  h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out" v-bind:class="{'-rotate-45': open, 'translate-y-1.5': !open}"></span>
        </div>
      </button>
    </nav>
    <main>
      <section class="h-screen flex flex-col justify-center items-center state">
        <div class="fixed title mx-auto text-center text-8xl sm:text-9xl font-bold cus-frame max-w-max text-color-one loading-text" id="anime" @animationend="handleAnimationEnd">
          <h1 class="mb-[-0.65rem] text-ani" id="animated" @animationend="handleAnimationEnd">Med</h1>
          <h1 class="text-ani" id="animated" @animationend="handleAnimationEnd">Box</h1>
        </div>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="../assets/medic1.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-fit mx-auto scroll">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll pos">
          PR.01</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-center text-xl text-color-one scroll">Tools Pencarian Penyakit</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="https://i.pinimg.com/1200x/48/93/f7/4893f7c90ecf2215cd79f68f1c83ed00.jpg" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-fit mx-auto scroll2">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll2 pos">
          PR.02</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-center text-xl text-color-one scroll2">Tools Pencarian Obat</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="https://asset.kompas.com/crops/BWXpMNgeentOl-N3Ip3An2QZ-a4=/0x0:780x520/750x500/data/photo/2021/08/03/610909587f395.jpg" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-fit mx-auto scroll3">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll3 pos">
          PR.03</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-center text-xl text-color-one scroll3">Tools Kalkukator BMI</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_975_16981278236522842.png" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-fit mx-auto scroll4">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll4 pos">
          PR.04</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-center text-xl text-color-one scroll4">Tools Kalkulator Resiko Diabetes</b>
      </section>
      <section class="h-screen flex flex-col justify-center state">
        <img src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/29/b179904f-55d0-4f57-8ea5-352d439ed0a4.jpg" alt="photo" class="w-56 h-56 sm:w-96 sm:h-96 object-fit mx-auto scroll5">
        <h1 class="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll5 pos">
          PR.05</h1>
        <b class="ml-10 mr-5 sm:ml-auto sm:mr-auto text-center text-xl text-color-one scroll5">Pengingat Jadwal Minum Obat</b>
      </section>
    </main>
  </div>
</template>

<script>
import "../assets/js/scroll.js";
  
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
    navigateToAbout(event) {
      event.preventDefault(); // Mencegah navigasi default
      this.$router.push('/about').then(() => {
        window.location.reload();
      });
    }
  },
}
</script>
