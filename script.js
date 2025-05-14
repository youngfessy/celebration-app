const phrases = [
    "Great job",
    "Way to go",
    "You did it",
    "Awesome work",
    "So proud of you",
  ];
  
  const animations = [
    "fireworks",
    "balloon",
    "confetti",
    "cheerleader",
    "monkey",
    "penguin",
    "rabbits",
  ];
  
  const form = document.getElementById("nameForm");
  const input = document.getElementById("nameInput");
  const celebration = document.getElementById("celebration");
  const phraseText = document.getElementById("phraseText");
  const lottieContainer = document.getElementById("lottieContainer");
  const againBtn = document.getElementById("againBtn");
  
  let name = "";
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    name = input.value.trim();
    showCelebration();
  });
  
  againBtn.addEventListener("click", showCelebration);
  
  function showCelebration() {
    form.classList.add("hidden");
    celebration.classList.remove("hidden");
  
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const anim = animations[Math.floor(Math.random() * animations.length)];
  
    phraseText.textContent = `${phrase}, ${name}!`;
  
    lottieContainer.innerHTML = ""; // clear previous
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: `animations/${anim}.json`,
    });
  
    // Optional: Penguin-specific text color
    phraseText.style.color = anim === "penguin" ? "black" : "white";
  }
  