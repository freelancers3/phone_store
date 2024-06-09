function ainmateLogo() {
    const logo = document.querySelector(".logo");
    logo.style.transition = "transform 0.5s";
    logo.style.transform = "rotate(360deg)";
        setTimeout(() => {
          logo.style.transform = "rotate(0deg)";  
        }, 1000);
    
        console.log(logo);

}