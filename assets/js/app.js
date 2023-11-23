function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }
  
  const Preloader = document.getElementById('preloader')
  setTimeout(() => {
      console.log("Delayed for 1 second.");
      document.body.classList.remove("overflow-hidden");
      Preloader.classList.add("preloader-finish")
  }, 2000);
  