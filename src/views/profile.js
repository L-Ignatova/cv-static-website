import { html } from 'https://unpkg.com/lit-html?module';

const progfileTemplate = () => html`
<section class="profile">
    <article class="title">
        <p class="head-title">Profile</p>
        <p class="subtitle">I'm a journalist looking for a fresh start as a software developer</p>
        <hr>
    </article>
    <article class="content">
        <section>
            <p class="section-title">About me</p>
            <p class="section-details">Hello there, I'm an economics major turned business journalist who found a
                passion for coding and web development. As often happens, I heard someone say something and one thing
                led to another and I wanted to give a go at making my own perosnal CV website. Click around, hope you like it.
            </p>
        </section>
        <section>
            <img src="/img/me.jpg" alt="head_image">
        </section>
        <section>
            <p class="section-title">Details</p>
            <ul class="details-list">
                <li><span>Name:</span>
                    <p> Liliya Ignatova</p>
                </li>
                <li><span>Age:</span>
                    <p> 28 years</p>
                </li>
                <li><span>Location:</span>
                    <p>Sofia, Bulgaria</p>
                </li>
            </ul>
        </section>
    </article>
</section>
`;

export function profilePage(ctx) {
    ctx.render(progfileTemplate());
}