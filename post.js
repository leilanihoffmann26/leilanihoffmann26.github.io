import { posts } from "./posts.js";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const post = posts.find((entry) => entry.slug === slug);

const titleElement = document.querySelector("#post-title");
const dateElement = document.querySelector("#post-date");
const summaryElement = document.querySelector("#post-summary");
const contentElement = document.querySelector("#post-content");

const renderNotFound = () => {
    document.title = "Post not found | Leilani Hoffmann";
    titleElement.textContent = "Post not found";
    dateElement.textContent = "";
    summaryElement.textContent = "The post you requested does not exist.";
    contentElement.innerHTML = `
        <p>
            Check the blog index for available posts.
            <a class="text-link inline-link" href="blog.html">Return to the blog</a>
        </p>
    `;
};

const renderPost = (entry) => {
    document.title = `${entry.title} | Leilani Hoffmann`;
    titleElement.textContent = entry.title;
    dateElement.textContent = entry.date;
    summaryElement.textContent = entry.summary;

    entry.content.forEach((paragraph) => {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraph;
        contentElement.appendChild(paragraphElement);
    });
};

if (!post) {
    renderNotFound();
} else {
    renderPost(post);
}
