import {html} from 'https://unpkg.com/lit-html?module';

const projectsTemplate = () => html`
<section class="projects">
    <article class="title">
        <p class="head-title">Projects</p>
        <p class="subtitle">"Experience: that most brutal of teachers."</p>
        <hr>
    </article>
    <article class="projects-list">
        <a href="https://github.com/L-Ignatova/flower-catalogue" class="project">
            <img src="../../img/project-image (1).png" alt="flower catalogue image" />
            <p>Flower catalogue</p>
        </a>
        <a href="https://github.com/L-Ignatova/image-gallery" class="project">
            <img src="../../img/project-image (3).png" alt="image gallery" />
            <p>Image gallery</p>
        </a>
        <a href="https://github.com/L-Ignatova/property-crawler" class="project">
            <img src="../../img/project-image (1).webp" alt="crawler image" />
            <p>Property price crawler</p>
        </a>
        <a href="https://github.com/L-Ignatova/bootstrap-demo" class="project">
            <img src="../../img/project-image (2).png" alt="btsrt demo image" />
            <p>Bootstrap landing page</p>
        </a>
        <a href="https://github.com/L-Ignatova/hacker-rank-challenges" class="project">
            <img src="../../img/project-image (1).jpg" alt="challenges image" />
            <p>Coding challenger</p>
        </a>
    </article>
</section>
`;

export function projectsPage(ctx) {
    ctx.render(projectsTemplate());
}