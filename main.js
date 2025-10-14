 const btnMenu = document.getElementById('btnMenu');
  const navMenu = document.getElementById('navMenu');

  btnMenu.addEventListener('click', () => {
    // Si está oculto, lo mostramos tipo bloque vertical
    if (navMenu.classList.contains('hidden')) {
      navMenu.classList.remove('hidden');
      navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'dark:bg-background-dark', 'border', 'border-t', 'border-primary/20', 'dark:border-primary/30', 'p-4', 'z-50');
    } else {
      // Si está visible, lo ocultamos
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'dark:bg-gray-900', 'border-t', 'border-primary/20', 'dark:border-primary/30', 'p-4', 'z-50');
    }
  });