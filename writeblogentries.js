let blogEntryTemplate = `
<div class="blog-entry">
    <a href="/blog-entry.html?id=BlogId"><img class="blog-entry-image" src="ImageSrc" alt="ImageAlt"></a>
    <h2 class="blog-entry-title"><a href="/blog-entry.html?id=BlogId">Title</a></h2>
    <p class="blog-entry-date">Date</p>
    <p class="blog-entry-resume">Resume</p>
</div>`

fetch('blogentries.json')
    .then((response) => response.json())
    .then((blogEntries) => {
        blogEntries.entries.forEach(entry => {
            let blogEntryStub = blogEntryTemplate
            blogEntryStub = blogEntryStub.replaceAll('BlogId', entry.id)
            blogEntryStub = blogEntryStub.replace('Title', entry.title)
            blogEntryStub = blogEntryStub.replace('Date', entry.date)
            blogEntryStub = blogEntryStub.replace('Resume', entry.resume)
            blogEntryStub = blogEntryStub.replace('ImageSrc', entry.imageSrc)
            blogEntryStub = blogEntryStub.replace('ImageAlt', entry.imageAlt)

            document.getElementById('entry-list').innerHTML += blogEntryStub
        })
    })