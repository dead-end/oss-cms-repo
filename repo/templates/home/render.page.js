function renderPageHome(id, home) {
  const tmp = `<div>
  <h3>${home.title}</h3>
  <h5>${home.subtitle}</h5>
  <p>${home.desc}</p>
  <p>${home.text}</p>
</div>`;

  return getPageTempl(home.title, tmp);
}
