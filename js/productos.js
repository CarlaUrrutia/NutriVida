const btn = document.getElementById('btn-ordenar');
const galeria = document.querySelector('.galeria');
const icono = document.getElementById('icono-orden');
let ordenAscendente = true;

btn.addEventListener('click', () => {
    const tarjetas = Array.from(galeria.querySelectorAll('.tarjeta-producto'));

    tarjetas.sort((a, b) => {
        const precioA = parseInt(a.dataset.precio);
        const precioB = parseInt(b.dataset.precio);
        return ordenAscendente ? precioA - precioB : precioB - precioA;
    });


    galeria.style.opacity = '0';
    galeria.style.transform = 'translateY(8px)';

    setTimeout(() => {
        tarjetas.forEach(t => galeria.appendChild(t));
        galeria.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        galeria.style.opacity = '1';
        galeria.style.transform = 'translateY(0)';
    }, 200);

    ordenAscendente = !ordenAscendente;
    icono.textContent = ordenAscendente ? '↑↓' : '↓↑';
    btn.setAttribute('aria-label', ordenAscendente ? 'Ordenar de menor a mayor precio' : 'Ordenar de mayor a menor precio');
});
