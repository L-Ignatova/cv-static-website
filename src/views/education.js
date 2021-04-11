import {html} from 'https://unpkg.com/lit-html?module';

const educationTemplate = () => html`
<section class="education">
    <article class="title">
        <p class="head-title">Education</p>
        <p class="subtitle">"It is not that I'm so smart. But I stay with the questions much longer."</p>
        <hr>
    </article>
    <article class="content">
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">SoftUni</p>
                <p class="subtitle">2019 - ongoing</p>
            </article>
            <article class="experience-details">
                <p><span class="bold-font">Course - Software Development with Python</span></p>
                <p>Studying front-end, back-end, web apps. Devleoped logical thinking, problem solving, OOP
                    and functional programming.</p>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Sheffield University</p>
                <p class="subtitle">2015 - 2016</p>
            </article>
            <article class="experience-details">
                <p><span class="bold-font">Master - East Asian Business</span></p>
                <p>Studied a variety of business, economics and political modules focused on China and
                    Japan, including Japanese language - speaking, writing, reading. 
                    Participated in various activities to
                    achieve Sheffield Graduate Award, Academic Skills Certificate.</p>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Sofia University</p>
                <p class="subtitle">2011 - 2015</p>
            </article>
            <article class="experience-details">
                <p><span class="bold-font">Bachelor - Economics</span></p>
                <p> Macroeconomics,Banking and Financial Markets, Accounting,
                    Statistics, Finance, Econometrics, Mathematics Planning and Forecasting,
                    etc. </p>
            </article>
        </section>
    </article>
</section>
`;

export function educationPage(ctx) {
    ctx.render(educationTemplate());
}