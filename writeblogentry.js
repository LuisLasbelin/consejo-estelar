let blogEntryTemplate = `
<img class="blog-entry-banner" src="ImageSrc" alt="ImageAlt">
<main>
    <h1 class="blog-entry-title">Title</h1>
    <p class="blog-entry-date">Date</p>
    <div class="blog-entry-content">Content</div>
</main>
    `

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

fetch('blogentries.json')
    .then((response) => response.json())
    .then((blogEntries) => {
        let entry = blogEntries.entries.filter(blogEntry => blogEntry.id == urlParams.get('id'))[0]

        let blogEntryStub = blogEntryTemplate
        blogEntryStub = blogEntryStub.replace('Title', entry.title)
        blogEntryStub = blogEntryStub.replace('Date', entry.date)
        blogEntryStub = blogEntryStub.replace('ImageSrc', entry.bannerSrc)
        blogEntryStub = blogEntryStub.replace('ImageAlt', entry.bannerAlt)
        blogEntryStub = blogEntryStub.replace('BlogId', entry.id)
        blogEntryStub = blogEntryStub.replace('Content', entry.content)

        document.getElementById('entry-body').innerHTML = blogEntryStub
        document.getElementById('entry-body').innerHTML += `<p><a href="/blog.html">Volver al Diario</a></p>`
    })