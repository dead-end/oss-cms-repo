function renderComponentBlog(ref, blog) {
  const nav = ctx.getNavByRef(ref);

  print(ref);
  return `
<div class="col">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${blog.title}</h5>
      <p class="card-text">${blog.desc}</p>
      <a href="${nav.getPath()}" class="card-link">${nav.getTitle()}</a>
    </div>
  </div>
</div>
    `;
}
