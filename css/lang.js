const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('mouseenter', () => {
    tooltip.innerHTML = `<strong>${planet.dataset.name}</strong><br>${planet.dataset.info}`;
    tooltip.style.opacity = 1;

    const rect = planet.getBoundingClientRect();
    // Tooltip'i gezegenin sağında ortalanmış şekilde konumlandır
    tooltip.style.top = rect.top + rect.height/2 - tooltip.offsetHeight/2 + 'px';
    tooltip.style.left = rect.right + 10 + 'px'; // 10px sağ boşluk
  });

  planet.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});
