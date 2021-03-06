function playSound(e: KeyboardEvent) {
  const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')

  setTimeout(() => {
    key.classList.remove('playing')
  }, 700)
}

function removeTransition(e: TransitionEvent) {
  if (e.propertyName !== 'transform') return;
  (e.target as HTMLDivElement).classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound)
