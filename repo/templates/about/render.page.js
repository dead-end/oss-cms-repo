function renderPageAbout(ref, about) {
  const main = `
<h3>${about.title}</h5>
<h5>${about.title}</h5>
<p>${about.text1}</p>
<p>${about.text2}</p>
<p>${about.text3}</p>
`;

  return getPageTempl(ref, about.title, main);
}
