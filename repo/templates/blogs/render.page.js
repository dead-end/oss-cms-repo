function renderPageBlogs(ref, blogs) {
  const getBlogs = () => {
    const arr = [];
    for (const blog of blogs.refs) {
      arr.push(ctx.render(blog, 'component', ctx.getDefaultSelector()));
    }
    return arr.join('');
  };

  const main = `
<section class="text-center m-5">
  <h1>${blogs.title}</h1>
  <p>${blogs.desc}</p>
</section>
<div class="row">
  ${getBlogs()}
</div>
  `;

  return getPageTempl(ref, blogs.title, main);
}
