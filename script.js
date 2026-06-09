const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const loveWords = [
  {
    word: "SORRISO",
    hint: "Amo olhar para o seu _____ e ouvir ele, amo quando estamos rindo de coisas bestas",
    quote: "Eu amo te fazer você sorrir meu amor, amo ouvir sua risada princesa"
  },
  {
    word: "ABRAÇO",
    hint: "Onde eu descanso, posso estar querendo ficar sozinho, mas sozinho com você",
    quote: "Eu amo seu abraço meu amor e amo estar com você"
  },
  {
    word: "OLHAR",
    hint: "O jeitinho que me encontra mesmo no silêncio.",
    quote: "Seu olhar diz tanta coisa bonita sem precisar de nenhuma frase."
  },
  {
    word: "CABELO",
    hint: "Sempre quando você fala que está feio ele está lindo",
    quote: "Seu cabelo é o mais lindo de todos amor, você é linda."
  },
  {
    word: "CARINHO",
    hint: "A delicadeza com que você cuida das pessoas nos detalhes (principalmente com as crianças).",
    quote: "Eu te admiro pelo carinho que você tem pelas criaças do flores e tenho certeza que você será uma professora incrível."
  },
  {
    word: "VOCÊ",
    hint: "o amor da minha vida toda, com que eu quero me casar (terceira pessoa amor kkkk)",
    quote: "Amor eu te amo para todo o sempre, você é o amor da minha vida e quero passar o resto da minha vida com você"
  }
];

const galleryImages = [
  {
    src: "imagens/preferida.jpeg",
    title: "Nosso reflexo bonito",
    note: "Tem foto que parece guardar mais sentimento do que cabe em um instante."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.33.jpeg",
    title: "Nosso comecinho",
    note: "Foi aqui que a minha lembranca de voce comecou a ficar favorita."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.34.jpeg",
    title: "Um dia leve",
    note: "Um pedaco da nossa historia que sempre me faz sorrir."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.34 (1).jpeg",
    title: "Mais um abraco nosso",
    note: "Mais uma cena nossa que eu nao trocaria por nada."
  },
  {
    src: "imagens/namoro.jpeg",
    title: "Seu jeitinho",
    note: "Seu jeitinho deixa qualquer lugar mais bonito."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.35.jpeg",
    title: "Nosso passeio",
    note: "Tem dias que seguem brilhando so porque foram com voce."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.35 (1).jpeg",
    title: "Carinho que fica",
    note: "Nosso carinho sempre deixa a memoria mais macia."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.35 (2).jpeg",
    title: "Pequena eternidade",
    note: "Um instante pequeno com tamanho de eternidade."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.35 (3).jpeg",
    title: "Silencio bom",
    note: "Voce faz ate o silencio parecer companhia boa."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.36.jpeg",
    title: "Memoria que aquece",
    note: "Toda vez que eu volto aqui, sinto de novo o mesmo calor."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.36 (1).jpeg",
    title: "Sonho junto",
    note: "O futuro fica mais bonito quando eu imagino voce nele."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.36 (2).jpeg",
    title: "Lugar favorito",
    note: "Mais um pedaco do meu lugar preferido no mundo."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.37.jpeg",
    title: "Minha cena preferida",
    note: "Voce e a parte mais bonita de tantas lembrancas minhas."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.37 (1).jpeg",
    title: "Valeu a pena",
    note: "Cada foto nossa parece sussurrar: valeu a pena."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.37 (2).jpeg",
    title: "Amor tranquilo",
    note: "Tem amor no jeito como a gente simplesmente fica."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.37 (3).jpeg",
    title: "A melhor versao de mim",
    note: "Eu gosto da versao de mim que existe quando estou com voce."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.38.jpeg",
    title: "Doce lembranca",
    note: "Um retrato doce do tanto que eu quero guardar a gente."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.38 (1).jpeg",
    title: "Brilho nosso",
    note: "Tem brilho de saudade boa e vontade de viver mais."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.38 (2).jpeg",
    title: "Detalhes do amor",
    note: "Nosso amor tambem mora nesses detalhes quietinhos."
  },
  {
    src: "imagens/WhatsApp Image 2026-05-30 at 00.25.38 (3).jpeg",
    title: "Coracao certo",
    note: "Mais uma lembranca para provar que o meu coracao acertou."
  }
];

function shuffle(items) {
  const list = [...items];

  for (let index = list.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }

  return list;
}

function initReveal() {
  const items = [...document.querySelectorAll(".reveal")];

  if (!items.length) {
    return;
  }

  document.body.classList.add("reveal-ready");

  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 120, 600)}ms`);
  });

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -10% 0px"
  });

  items.forEach((item) => observer.observe(item));
}

function initAmbientHearts() {
  const container = document.querySelector(".ambient-hearts");

  if (!container || prefersReducedMotion.matches) {
    return;
  }

  for (let index = 0; index < 16; index += 1) {
    const petal = document.createElement("span");
    petal.className = "ambient-heart";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--rotation", `${Math.round(-40 + Math.random() * 80)}deg`);
    petal.style.setProperty("--drift", `${Math.round(-90 + Math.random() * 180)}px`);
    petal.style.setProperty("--duration", `${(16 + Math.random() * 10).toFixed(2)}s`);
    petal.style.setProperty("--delay", `${(-Math.random() * 20).toFixed(2)}s`);
    petal.style.opacity = (0.08 + Math.random() * 0.16).toFixed(2);
    container.appendChild(petal);
  }
}

function initLoveGame() {
  const progress = document.getElementById("game-progress");
  const hint = document.getElementById("game-hint");
  const wordBoard = document.getElementById("game-word");
  const keyboard = document.getElementById("game-keyboard");
  const feedback = document.getElementById("game-feedback");
  const success = document.getElementById("game-success");
  const answer = document.getElementById("game-answer");
  const quote = document.getElementById("game-quote");
  const nextButton = document.getElementById("game-next");
  const resetButton = document.getElementById("game-reset");
  const confetti = document.getElementById("game-confetti");

  if (!progress || !hint || !wordBoard || !keyboard || !feedback || !success || !answer || !quote || !nextButton || !resetButton || !confetti) {
    return;
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let roundIndex = 0;
  let letterIndex = 0;
  let roundSolved = false;

  function renderProgress() {
    progress.innerHTML = "";

    loveWords.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "game-progress-dot";

      if (index < roundIndex || (index === roundIndex && roundSolved)) {
        dot.classList.add("is-done");
      } else if (index === roundIndex) {
        dot.classList.add("is-active");
      }

      progress.appendChild(dot);
    });
  }

  function renderSlots(word) {
    wordBoard.innerHTML = "";

    word.split("").forEach(() => {
      const slot = document.createElement("span");
      slot.className = "game-slot";
      slot.textContent = "_";
      wordBoard.appendChild(slot);
    });
  }

  function buildDistractors(word) {
    return shuffle(alphabet.filter((letter) => !word.includes(letter))).slice(0, 4);
  }

  function launchConfetti() {
    if (prefersReducedMotion.matches) {
      return;
    }

    const colors = ["#ff6f9d", "#ffc4d8", "#ffd49a", "#ffffff"];
    confetti.innerHTML = "";

    for (let index = 0; index < 18; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.setProperty("--left", `${8 + Math.random() * 84}%`);
      piece.style.setProperty("--delay", `${(Math.random() * 0.25).toFixed(2)}s`);
      piece.style.setProperty("--duration", `${(1.4 + Math.random() * 0.8).toFixed(2)}s`);
      piece.style.setProperty("--rotate", `${Math.round(-80 + Math.random() * 160)}deg`);
      piece.style.background = colors[index % colors.length];
      confetti.appendChild(piece);
    }

    window.setTimeout(() => {
      confetti.innerHTML = "";
    }, 2200);
  }

  function finishRound() {
    roundSolved = true;
    feedback.textContent = "Acertou. Agora olha a mensagem que deixei para voce.";
    success.hidden = false;
    [...keyboard.querySelectorAll(".game-key")].forEach((button) => {
      button.disabled = true;
    });
    renderProgress();
    launchConfetti();
  }

  function handleLetter(letter, button) {
    if (roundSolved) {
      return;
    }

    const currentWord = loveWords[roundIndex].word;

    if (letter === currentWord[letterIndex]) {
      const slot = wordBoard.children[letterIndex];
      slot.textContent = letter;
      slot.classList.add("is-filled");
      button.disabled = true;
      button.classList.add("is-used");
      letterIndex += 1;

      if (letterIndex === currentWord.length) {
        finishRound();
      } else {
        feedback.textContent = "Isso. Continua, que essa palavra e linda.";
      }

      return;
    }

    feedback.textContent = "Quase. Tenta a proxima letra certa.";
    button.classList.add("is-wrong");

    window.setTimeout(() => {
      button.classList.remove("is-wrong");
    }, 420);
  }

  function renderKeyboard(word) {
    const letters = shuffle([...word.split(""), ...buildDistractors(word)]);
    keyboard.innerHTML = "";

    letters.forEach((letter) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "game-key";
      button.textContent = letter;
      button.addEventListener("click", () => handleLetter(letter, button));
      keyboard.appendChild(button);
    });
  }

  function renderRound() {
    const currentRound = loveWords[roundIndex];
    letterIndex = 0;
    roundSolved = false;
    success.hidden = true;
    feedback.textContent = "";
    hint.textContent = currentRound.hint;
    answer.textContent = currentRound.word;
    quote.textContent = currentRound.quote;
    nextButton.textContent = roundIndex === loveWords.length - 1 ? "Jogar de novo" : "Proxima palavra";
    renderSlots(currentRound.word);
    renderKeyboard(currentRound.word);
    renderProgress();
  }

  nextButton.addEventListener("click", () => {
    roundIndex = roundIndex === loveWords.length - 1 ? 0 : roundIndex + 1;
    renderRound();
  });

  resetButton.addEventListener("click", () => {
    roundIndex = 0;
    renderRound();
  });

  renderRound();
}

function initGallery() {
  const stage = document.getElementById("photo-stage");
  const prevButton = document.getElementById("gallery-prev");
  const nextButton = document.getElementById("gallery-next");
  const caption = document.getElementById("gallery-caption");
  const dots = document.getElementById("gallery-dots");
  const prevSlot = document.querySelector('[data-gallery-slot="prev"]');
  const activeSlot = document.querySelector('[data-gallery-slot="active"]');
  const nextSlot = document.querySelector('[data-gallery-slot="next"]');

  if (!stage || !prevButton || !nextButton || !caption || !dots || !prevSlot || !activeSlot || !nextSlot) {
    return;
  }

  caption.hidden = true;

  const slots = {
    prev: prevSlot,
    active: activeSlot,
    next: nextSlot
  };

  let activeIndex = 0;
  const dotButtons = [];

  function wrapIndex(index) {
    return (index + galleryImages.length) % galleryImages.length;
  }

  function renderCard(slotName, photoIndex) {
    const slot = slots[slotName];
    const photo = galleryImages[photoIndex];
    slot.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}">
    `;

    if (slotName === "active") {
      slot.removeAttribute("role");
      slot.removeAttribute("tabindex");
      slot.removeAttribute("aria-label");
    } else {
      slot.setAttribute("role", "button");
      slot.tabIndex = 0;
      slot.setAttribute("aria-label", `${slotName === "prev" ? "Foto anterior" : "Proxima foto"}: ${photo.title}`);
    }
  }

  function renderGallery() {
    const previousIndex = wrapIndex(activeIndex - 1);
    const nextIndex = wrapIndex(activeIndex + 1);
    const current = galleryImages[activeIndex];

    renderCard("prev", previousIndex);
    renderCard("active", activeIndex);
    renderCard("next", nextIndex);

    stage.style.setProperty("--stage-image", `url("${current.src}")`);
    caption.textContent = "";

    dotButtons.forEach((button, index) => {
      button.classList.toggle("is-active", index === activeIndex);
      button.setAttribute("aria-pressed", index === activeIndex ? "true" : "false");
    });
  }

  function moveGallery(step) {
    activeIndex = wrapIndex(activeIndex + step);
    renderGallery();
  }

  galleryImages.forEach((photo, photoIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-dot";
    button.setAttribute("aria-label", `Ir para ${photo.title}`);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      activeIndex = photoIndex;
      renderGallery();
    });
    dots.appendChild(button);
    dotButtons.push(button);
  });

  prevButton.addEventListener("click", () => moveGallery(-1));
  nextButton.addEventListener("click", () => moveGallery(1));

  prevSlot.addEventListener("click", () => moveGallery(-1));
  nextSlot.addEventListener("click", () => moveGallery(1));

  [prevSlot, nextSlot].forEach((slot) => {
    slot.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      moveGallery(slot === prevSlot ? -1 : 1);
    });
  });

  document.addEventListener("keydown", (event) => {
    const focusIsInGallery = stage.contains(document.activeElement) || document.activeElement === prevButton || document.activeElement === nextButton;

    if (!focusIsInGallery) {
      return;
    }

    if (event.key === "ArrowLeft") {
      moveGallery(-1);
    }

    if (event.key === "ArrowRight") {
      moveGallery(1);
    }
  });

  renderGallery();
}

initReveal();
initAmbientHearts();
initLoveGame();
initGallery();
