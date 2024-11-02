// Array of 100 round or circular emojis
const emojis = [
  '😊', '😂', '😍', '😢', '😎', '😡', '🥳', '😱', '🤔', '😇', 
  '🤩', '😭', '🙄', '😜', '🥶', '🤯', '😴', '😈', '😆', '😁',
  '🥺', '😩', '🥰', '😅', '😝', '😲', '🤪', '😑', '😛', '😬', 
  '😗', '🤗', '😮', '🤭', '😚', '🤫', '😯', '🤨', '🤡', '🥸',
  '😕', '😳', '🤯', '😖', '😤', '🤒', '🤢', '🤮', '🤧', '🤠',
  '🤑', '🤤', '🤫', '😐', '😶', '🧐', '😳', '🥴', '🤓', '😵', 
  '🤬', '😷', '🤕', '🥳', '🤠', '🥵', '🥶', '🥱', '😜', '🤡',
  '🌕', '🌑', '🌑', '🌓', '🌔', '🌖', '🌗', '🌘','🥶', '🤯', 
  '😴', '💩', '👻', '👽','🤖', '🎃', '👾', '🤡', '🤑', '🥺',
  '😈', '💀', '🤠', '👀','🌈','🎃','🦀','🐱', '🐶', '🐭','🐹',
  '🐰', '🦊', '🐻', '🐼', '🦄', '🐷','🐸', '🐒', '🐔','🐵','🙈','🙉','🙊'
];

// Create a new Audio object for the bubble sound
const bubbleSound = new Audio('assets/bubble-pop.mp3');

// Function to pop an emoji at a random location near the touch or key press point
function popEmoji(event) {
  const emojiContainer = document.getElementById("emoji-container");

  // Randomly select an emoji
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Create a new emoji element
  const emojiElement = document.createElement("div");
  emojiElement.classList.add("emoji");
  emojiElement.textContent = randomEmoji;

  // Position the emoji at the click location or a random location for keypress
  if (event.clientX && event.clientY) {
    emojiElement.style.left = `${event.clientX}px`;
    emojiElement.style.top = `${event.clientY}px`;
  } else {
    emojiElement.style.left = `${Math.random() * window.innerWidth}px`;
    emojiElement.style.top = `${Math.random() * window.innerHeight}px`;
  }

  // Add the emoji to the container and keep it there
  emojiContainer.appendChild(emojiElement);

  // Play the bubble sound
  bubbleSound.currentTime = 0;  // Reset sound to play from start
  bubbleSound.play().catch(error => {
    console.log('Error playing sound:', error);
  });
}

// Add event listener for keyboard key press to pop emoji
window.addEventListener("keydown", (event) => {
  // If Escape key is pressed, clear all emojis
  if (event.key === "Escape") {
    clearEmojis();
  } else {
    popEmoji(event);
  }
});

// Function to clear all emojis from the page
function clearEmojis() {
  const emojiContainer = document.getElementById("emoji-container");
  emojiContainer.innerHTML = "";  // Clear all emojis
}