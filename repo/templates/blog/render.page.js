function renderPageBlog(ref, blog) {
  const tmp = `
<section class="text-center m-5">
  <h3>${blog.title}</h3>
  <h5>${blog.desc}</h5>
  <p>${blog.text}</p>
</section>
`;

  return getPageTempl(ref, blog.title, tmp);
}
