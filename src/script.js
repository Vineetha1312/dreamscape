function setTheme(theme) {
    const body = document.body;
    body.setAttribute('data-theme', theme);
  
    // Update styles for h1 to h6 tags
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');
  
    // Get computed styles based on the theme
    const computedColor = getComputedStyle(body).color;
    const headingColor = getComputedStyle(body.querySelector('h1')).color;
    const buttonBorderColor = getComputedStyle(body.querySelector('button')).borderColor;
  
    // Update headings, buttons, and links
    headings.forEach(heading => {
      heading.style.color = headingColor;
    });
  
    buttons.forEach(button => {
      button.style.borderColor = buttonBorderColor;
      button.style.color = computedColor;
    });
  
    links.forEach(link => {
      link.style.borderColor = buttonBorderColor;
      link.style.color = computedColor;
    });
  
    // Change logo based on theme
    const logo = document.getElementById('logo');
    switch (theme) {
      case 'one':
        logo.src = 'logo-one.png'; // Replace with your theme one logo path
        break;
      case 'two':
        logo.src = 'logo-two.png'; // Replace with your theme two logo path
        break;
      case 'three':
        logo.src = 'logo-three.png'; // Replace with your theme three logo path
        break;
      case 'four':
        logo.src = 'logo-four.png'; // Replace with your theme four logo path
        break;
      default:
        logo.src = 'logo-one.png'; // Optional fallback
    }
  }
  