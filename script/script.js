console.log("Emzee Beats V3 Loaded");
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  navMenu.addEventListener("click", function() {
    navMenu.classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    if (query.length > 0) {
      // Simulate search results
      searchResults.innerHTML = `<li>Result for "${query}"</li>`;
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  });

  document.addEventListener("click", function(event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
      searchResults.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");

  playButton.addEventListener("click", function() {
    audioPlayer.play();
  });

  pauseButton.addEventListener("click", function() {
    audioPlayer.pause();
  });

  audioPlayer.addEventListener("ended", function() {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  });

  audioPlayer.addEventListener("play", function() {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });

  submitButton.addEventListener("click", function() {
    contactForm.submit();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const newsletterForm = document.getElementById("newsletter-form");
  const subscribeButton = document.getElementById("subscribe-button");

  newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  });

  subscribeButton.addEventListener("click", function() {
    newsletterForm.submit();
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const imageGallery = document.getElementById("image-gallery");
    const images = imageGallery.querySelectorAll("img");
    
    images.forEach(function(image) {
        image.addEventListener("click", function() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const modalImage = document.createElement("img");
        modalImage.src = image.src;
        modalContent.appendChild(modalImage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    
        modal.addEventListener("click", function() {
            document.body.removeChild(modal);
        });
        });
    });
    })