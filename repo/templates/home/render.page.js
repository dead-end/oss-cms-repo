function renderPageHome(ref, home) {
  const tmp = `<div>
  <h3>${home.title}</h3>
  <h5>${home.subtitle}</h5>
  <p>${home.desc}</p>
  <p>${home.text}</p>
</div>`;

  return getPageTempl(ref, home.title, tmp);
}
