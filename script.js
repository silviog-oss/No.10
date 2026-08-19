// scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// close mobile menu on link tap
document.querySelectorAll('#navmenu a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('navmenu').classList.remove('open');
}));
