function navSlide() {
    //const is NIET een constante waarde, maar echter een constante verwijzing naar een waarde, dus je kunt een const zijn waarde niet veranderen maar wel wijzigen, hier gebruik ik het voor de animatie en wanneer er op geklikt wordt veranderd de waarde zodat hij iets open
  const burger = document.querySelector(".burger"); 
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Open nav
      nav.classList.toggle("nav-active");  //wanneer er op de .burger geklikt wordt opent hij nav-active
      
      //Animatie Links
      navLinks.forEach((link, index) => {    //Hier staat er wanneer er geen animatie is, voeg de animatie toe en wanneer er wel een animatie is, haal deze weg en voer dan de animatie opnieuw uit.
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animatie
      burger.classList.toggle("toggle"); //lijn 225 = .toggle, deze lijn zorgt ervoor dat wanneer de burger gebruikt wordt voor de nav-active, dat hij de animatie uitvoert die in css staat. (de burger verandert naar een X)
  });
  
}

navSlide();