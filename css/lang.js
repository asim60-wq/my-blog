const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('mouseenter', (e) => {
    tooltip.innerHTML = `<strong>${planet.dataset.name}</strong><br>${planet.dataset.info}`;
    tooltip.style.opacity = 1;
    const rect = planet.getBoundingClientRect();
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    tooltip.style.left = rect.left + rect.width/2 - tooltip.offsetWidth/2 + 'px';
  });

  planet.addEventListener('mousemove', (e) => {
    tooltip.style.top = e.clientY - tooltip.offsetHeight - 10 + 'px';
    tooltip.style.left = e.clientX - tooltip.offsetWidth/2 + 'px';
  });

  planet.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});
