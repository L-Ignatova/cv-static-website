import {html} from 'https://unpkg.com/lit-html?module';

const workTemplate = () => html`
<section class="work-experience">
    <article class="title">
        <p class="head-title">Work experience</p>
        <p class="subtitle">"The secret to getting ahead is getting started."</p>
        <hr>
    </article>
    <article class="content">
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Economedia</p>
                <p class="subtitle">Dec 2016 - ongoing</p>
            </article>
            <article class="experience-details">
                <p><span class="bold-font">Reporter at Capital</span></p>
                <p>Follow current events in Bulgaria, CEE and the EU
                    with a focus on the economy, tax and budget policy,
                    regional development. Analyze current macroeconomic data, conduct interviews 
                    and communicate with experts of public, private and academic background.</p>
                <p><span><i class="fas fa-map-marker-alt"></i></span> Sofia, Bulgaria</p>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Sheffield University</p>
                <p class="subtitle">Nov 2015 - Aug 2016</p>
            </article>
            <article class="experience-details">
                <p><span class="bold-font">EU Student Ambassador</span></p>
                <p> Represented the university on Undergraduate and Postgraduate Open Days. 
                    Delivered campus tours to prospective students and visitors. 
                    Managed the calling campaign to prospective students for Bulgaria.</p>
                <p><span><i class="fas fa-map-marker-alt"></i></span> Sheffield, UK</p>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">TELUS International Europe</p>
                <p class="subtitle">Mar 2013 - Jan 2014</p>
            </article>
            <article class="experience-details">
                <p><span class="bold-font">Customer Service Agent</span></p>
                <p> Resolved incoming customer queries and issues with existing rentals.
                    Established the source of specific problems or challenges
                    customers are facing at the moment. Acted as the primary point of
                    contact for fulfilling customer needs and compiling up-to-date customer
                    information.</p>
                <p><span><i class="fas fa-map-marker-alt"></i></span> Sofia, bulgaria</p>
            </article>
        </section>
    </article>
</section>
`;

export function workPage(ctx) {
    ctx.render(workTemplate());
}