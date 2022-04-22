function renderComponentBlog(id, blog) {
  const nav = ctx.getNavByRef(id);

  print(id);
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
