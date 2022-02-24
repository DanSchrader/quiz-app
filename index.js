const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('hidden');
  });
});

const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach(card => {
  const answerButton = card.querySelector('[data-js="answerButton"]');
  const correctAnswer = card.querySelector('[data-js="correctAnswer"]');

  answerButton.addEventListener('click', () => {
    correctAnswer.classList.toggle('correct');
  });
});
