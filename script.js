const WHATSAPP_NUMBER = '55DDDNUMERO';

document.querySelectorAll('.buy-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.name;
    const message = `Olá, Thatiane! Quero o perfume ${productName}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
});
