import { posts } from "./posts.js";

const postsList = document.querySelector("#posts-list");

const renderPostCard = (post) => {
    const article = document.createElement("article");
    article.className = "post-card";

    article.innerHTML = `
        <p class="post-meta">${post.date}</p>
        <h2>${post.title}</h2>
        <p>${post.summary}</p>
        <a class="text-link post-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read post</a>
    `;

    return article;
};

if (postsList) {
    posts
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach((post) => {
            postsList.appendChild(renderPostCard(post));
        });
}
