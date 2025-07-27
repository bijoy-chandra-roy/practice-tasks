// 1. Inject navbar styles
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './style/navbar.css';
document.head.appendChild(link);

document.addEventListener('DOMContentLoaded', () => {
  // 2. Load and insert navbar HTML
  fetch('./navbar.html')
    .then(r => r.text())
    .then(html => {
      const wrapper = document.createElement('div');
      wrapper.id = 'navbar-wrapper';
      wrapper.innerHTML = html;
      document.body.insertBefore(wrapper, document.body.firstChild);
      // 3. Measure the actual <nav> height
      const navEl = wrapper.querySelector('nav');
      requestAnimationFrame(() => {
        document.body.style.paddingTop = navEl.getBoundingClientRect().height + 'px';
      });
    });
});
