document.addEventListener('DOMContentLoaded', () => {
  const miniPrises = document.querySelectorAll('.mini-prise__picture');
  const cards = document.querySelectorAll('.card');

  miniPrises.forEach((prise, index) => {
    prise.addEventListener('click', () => {
      // Убираем активный класс у всех мини-изображений
      miniPrises.forEach(p => p.classList.remove('mini-prise__picture--active'));
      // Добавляем активный класс к текущему
      prise.classList.add('mini-prise__picture--active');

      // Убираем активный класс у всех карточек
      cards.forEach(card => card.classList.remove('card--active'));
      // Добавляем активный класс карточке с тем же индексом
      if (cards[index]) {
        cards[index].classList.add('card--active');
      }
    });
  });
});
