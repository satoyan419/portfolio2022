// toggle panel
{
  const menuButton = document.getElementById( 'menu-button' );
  const menuPanel = document.getElementById( 'menu-panel' );
  menuButton.addEventListener( 'click', (e) => {
    if ( menuButton.getAttribute( 'aria-expanded' ) === 'true' ) {
      menuButton.setAttribute( 'aria-expanded', 'false' );
      menuPanel.setAttribute( 'aria-expanded', 'false' );
    } else {
      menuButton.setAttribute( 'aria-expanded', 'true' );
      menuPanel.setAttribute( 'aria-expanded', 'true' );
    }
  });
}

// scroll observer
{
  const item = document.querySelector('.scroll-observer');
  const showButton = (items) => {
    const button = document.getElementById('pagetop');
    items.forEach((item) => {
      item.isIntersecting ? button.setAttribute('data-scrolled', 'false') : button.setAttribute('data-scrolled', 'true');
    });
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }
  const observer = new IntersectionObserver(showButton, options);
  observer.observe(item);
}