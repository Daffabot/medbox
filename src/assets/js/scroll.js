window.onload = () => {
      const animatedElement = document.getElementById("animated");
      const anima = document.getElementById("anime");

      animatedElement.addEventListener("animationend", () => {
        animatedElement.removeAttribute("id");
        anima.removeAttribute("id");
      });

      window.addEventListener("scroll", setScrollVar);
      window.addEventListener("resize", setScrollVar);

      function setScrollVar() {
        const htmlElement = document.getElementById("top");
        const percentOfScreenHeightScrolled = window.pageYOffset / window.innerHeight;
        const au = percentOfScreenHeightScrolled * 100;
        let toper = htmlElement.clientHeight - window.innerHeight;
        let clint = htmlElement.clientHeight;
        let off = htmlElement.scrollTop;
        let woff = window.innerHeight;
        console.log(toper);
        console.log(clint);
        console.log(off);
        console.log(woff);
        console.log(window.pageYOffset);
        htmlElement.style.setProperty(
          "--scroll",
          au
        );
      }

      setScrollVar()

//       // Mendapatkan URL saat ini
// const currentUrl = window.location.pathname;

// // Fungsi untuk menambahkan tag <style> ke dalam <head>
// function addStyleTag(src) {
//   const styleTag = document.createElement('style');
//   styleTag.setAttribute('src', src);
//   document.head.appendChild(styleTag);
// }

// // Fungsi untuk menghapus tag <style> dari <head>
// function removeStyleTag(src) {
//   const styleTags = document.querySelectorAll('style[src="' + src + '"]');
//   styleTags.forEach(tag => tag.remove());
// }

// // Jika URL adalah '/' tambahkan home.css dan hapus about.css jika ada
// if (currentUrl === '/') {
//   addStyleTag('./styles/home.css');
//   removeStyleTag('./styles/about.css');
// }
// // Jika URL adalah '/about' tambahkan about.css dan hapus home.css jika ada
// else if (currentUrl === '/about') {
//   addStyleTag('./styles/about.css');
//   removeStyleTag('./styles/home.css');
// }

    }
