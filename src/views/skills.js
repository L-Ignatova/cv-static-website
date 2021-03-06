import {html} from 'https://unpkg.com/lit-html?module';

const skillTemplate = () => html`
<section class="skills">
    <article class="title">
        <p class="head-title">Skills & Tools</p>
        <hr>
    </article>
    <article class="content">
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Web tools</p>
            </article>
            <article class="experience-details web-tools">
                <p>JavaScript</p>
                <p>VSCode</p>
                <p>Python</p>
                <p>PyCharm</p>
                <p>PostgreSQL</p>
                <p>Django</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Bootstrap</p>
                <p>ReactJS</p>
                <p>Google Apps Script</p>
                <p>MS Excel (Pivots, VBA)</p>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Languages</p>
            </article>
            <article class="experience-details">
                <table>
                    <tr>
                        <td>Bulgarian</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span></td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span></td>
                    </tr>
                    <tr>
                        <td>Russian</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i></span>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </td>
                    </tr>
                    <tr>
                        <td>German, Spanish, Japanese</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i></span>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </td>
                    </tr>
                </table>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title">Personal skills</p>
            </article>
            <article class="experience-details">
                <table>
                    <tr>
                        <td>Details oriented</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span></td>
                    </tr>
                    <tr>
                        <td>Critical thinker</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span></td>
                    </tr>
                    <tr>
                        <td>Team player</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span></td>
                    </tr>
                    <tr>
                        <td>Multitasker</td>
                        <td class="score">
                            <span class="colored">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span></td>
                    </tr>
                </table>
            </article>
        </section>
        <section class="experience">
            <article class="experience-title">
                <p class="section-title"> Certificates</p>
            </article>
            <article class="experience-details">
                <ul><li>Python Web Basics (2021)</li>
                    <li>SoftUni JS Advanced (2021)</li>
                    <li>HTML & CSS (2021)</li>
                    <li>Python Advanced (2020)</li>
                    <li>IMF Financial Market Analysis (2017)</li>
                    <li>The Hu Xiaoling Memorial Prize (2016)</li>
                    <li>Sheffield Graduate Award (2016)</li>
                    <li>IELTS, CAE certificates</li>
                </ul>
            </article>
        </section>
    </article>
</section>
`;

export function skillPage(ctx) {
    ctx.render(skillTemplate());
}