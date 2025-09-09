const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.planet').forEach(planet => {

  planet.addEventListener('mouseenter', () => {
    tooltip.innerHTML = `<strong>${planet.dataset.name}</strong><br>${planet.dataset.info}`;
    tooltip.style.opacity = 1;

    const rect = planet.getBoundingClientRect();
    let top = rect.top + rect.height / 2 - tooltip.offsetHeight / 2;
    let left = rect.right + 10; // varsayılan sağda

    // Sağdan taşarsa sola yerleştir
    if (left + tooltip.offsetWidth > window.innerWidth) {
      left = rect.left - tooltip.offsetWidth - 10;
    }

    // Yukarıdan taşarsa yukarıdan 10px boşluk bırak
    if (top < 10) top = 10;

    // Aşağıdan taşarsa ekranın içinde kal
    if (top + tooltip.offsetHeight > window.innerHeight) {
      top = window.innerHeight - tooltip.offsetHeight - 10;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  });

  planet.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });

});
