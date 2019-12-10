let links = document.querySelectorAll('a.nav-link');
for (let link of links) {
  link.classList.remove('active');
  if (link.href == window.location.href)
    link.classList.add('active');
}
