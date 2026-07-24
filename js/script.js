const track = document.querySelector(".carousel-track");

document.querySelector(".next").addEventListener("click", () => {
    track.scrollBy({
        left:380,
        behavior:"smooth"
    });
});

document.querySelector(".prev").addEventListener("click", () => {
    track.scrollBy({
        left:-380,
        behavior:"smooth"
    });
});

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.cssText += 'flex-direction:column; position:absolute; top:100%; left:0; right:0; background:var(--paper); padding:20px 32px; border-bottom:1px solid var(--line);';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
