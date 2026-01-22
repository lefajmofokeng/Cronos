
// File: footer.js

class CronosFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initScripts();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            /* =============================================
               CRONOS FOOTER - ISOLATED STYLES
               ============================================= */
            
            :host {
                display: block;
                width: 100%;
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                background-color: #080d1b; /* Outer background match */
                margin: 0;
                padding: 0;
            }

            /* Reset for isolation */
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            /* Main container for the footer */
            .cronos-footer-container {
                background-color: #080d1b;
                color: #7b849b;
                width: 100%;
            }

            .cronos-footer-wrapper {
                max-width: 1250px;
                margin: 0 auto;
                padding: 0 20px; /* added safety padding */
            }

            /* Top section: logo, line, and icons */
            .cronos-footer-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1.5rem;
                flex-wrap: wrap;
            }

            .image-logo {
                height: 35px;
                align-items: center;
                align-self: center;
                vertical-align: middle;
                cursor: pointer;
            }

            .cronos-footer-logo span {
                font-size: 25px;
                font-weight: 600;
                align-items: center;
                align-self: center;
                vertical-align: middle;
                color: white;
            }

            /* The decorative line between logo and icons */
            .cronos-footer-line {
                flex-grow: 1;
                height: 1.2px;
                background-color: #303c55;
                min-width: 50px;
                border: none;
                margin: 0;
            }

            /* Footer content with columns */
            .footer-content {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 80px;
                margin-bottom: 30px;
                padding-top: 3.5rem;
                width: 100%;
            }

            /* Add top padding for nested columns on desktop */
            @media (min-width: 769px) {
                .footer-content > div > .footer-column:not(:first-child) {
                    padding-top: 2rem; 
                }
            }

            .footer-column h3 {
                color: #858992;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 20px;
                text-transform: none;
                letter-spacing: 0.1px;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 0;
            }

            .footer-column h3::after {
                content: '+';
                font-size: 18px;
                display: none;
            }

            .footer-column.active h3::after {
                content: '‒';
                font-size: 18px;
            }

            .footer-column ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .footer-column ul li {
                margin-bottom: 20px;
            }

            .footer-column ul li a {
                color: #ffffff;
                text-decoration: none;
                font-size: 16px;
                font-weight: 500;
                min-width: fit-content;
            }

            .footer-column ul li a:hover {
                color: #62b8fa;
            }

            /* Middle content section with paragraphs */
            .cronos-footer-content {
                margin-top: 2.5rem;
                margin-bottom: 1.25rem;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.6;
                color: #a0a9be;
            }

            .cronos-footer-content p {
                margin-bottom: 1rem;
                margin-top: 0;
            }

            .footer-columns {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 2rem;
            }

            .footer-left {
                flex-basis: 100%;
            }

            /* Bottom section with copyright */
            .cronos-footer-bottom {
                margin-top: 15px;
                padding-top: 0;
                margin-bottom: 2rem;
                display: flex;
                text-align: right;
                align-items: center;
                justify-content: flex-end;
                gap: 1.5rem;
                font-size: 0.826rem;
                font-weight: 400;
                color: #a0a9be;
                flex-wrap: wrap;
            }

            .cronos-footer-bottom span {
                flex-shrink: 0;
            }

            .footer-kv {
                display: inline-flex;
                align-items: center;
                justify-content: flex-start;
                flex-grow: 1;
                line-height: 0.9;
                gap: 12px;
            }
            .footer-kv a {
                color: inherit;
                text-decoration: none;
                padding: 0;
                font-weight: 500;
            }
            .footer-kv a + a {
                padding-left: 12px;
                border-left: 1px solid #7b849b;
                margin-left: 1px;
            }

            /* =============================================
               RESPONSIVE STYLES
               ============================================= */
            @media (max-width: 1024px) {
                .footer-content {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                .footer-columns {
                    flex-direction: column;
                }

                .footer-left, .footer-right {
                    flex-basis: 100%;
                }
            }

            @media (max-width: 768px) {
                .cronos-footer-container {
                    padding: 3rem 0;
                }

                .cronos-footer-top {
                    justify-content: center;
                    flex-direction: column;
                }
                
                .cronos-footer-line {
                    display: none;
                }
                
                .cronos-footer-bottom {
                    justify-content: center; 
                    text-align: center;
                    padding: 1rem 0;
                }

                .footer-content {
                    grid-template-columns: 1fr;
                    gap: 0;
                    padding-top: 2rem;
                }
                
                .footer-column {
                    border-bottom: 1px solid #303c55;
                    padding: 15px 0;
                }

                /* Select specifically within grid to avoid conflicts */
                .footer-content > div > .footer-column {
                     border-bottom: 1px solid #303c55;
                     padding: 15px 0;
                }
                .footer-content > div > .footer-column:last-child {
                     border-bottom: 1px solid #303c55;
                }

                .footer-column:last-child {
                    border-bottom: none;
                }
                
                .footer-column h3 {
                    cursor: pointer;
                    user-select: none;
                }

                .footer-column h3::after {
                    display: block;
                }
                
                .footer-column ul {
                    display: none;
                    margin-top: 10px;
                    padding-left: 10px;
                }
                
                .footer-column.active ul {
                    display: block;
                }
                
                .footer-columns {
                    flex-direction: column;
                }
                
                .footer-left {
                    flex-basis: 100%;
                    border-top: 1px solid #303c55;
                    padding-top: 2rem;
                }
                
                /* Mobile KV Links */
                .footer-kv {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    gap: 6px;
                    padding: 8px 0;
                    order: 1;
                }
                .footer-kv a + a {
                    border-left: none;
                    padding-left: 0;
                    margin-left: 0;
                }
            }

            @media (max-width: 480px) {
                .cronos-footer-container {
                    padding: 2rem 0;
                }

                .footer-content {
                    grid-template-columns: 1fr;
                    gap: 0;
                }
            }
        </style>

        <div style="background-color: #080d1b; margin: 0; padding: 3.5rem 0;">
            <div class="cronos-footer-container">
                <div class="cronos-footer-wrapper">
                    
                    <div class="cronos-footer-top">
                        <div class="cronos-footer-logo">
                            <a href="index.html">
                                <img src="thumbnails/hyperion logo (2).png" class="image-logo" alt="Logo">
                            </a>
                        </div>
                        <hr class="cronos-footer-line">
                    </div>
                    

                    <div class="footer-content">
                        <div>
                            <div class="footer-column">
                                <h3>Resources</h3>
                                <ul>
                                    <li><a href="page.html">Blog</a></li>
                                    <li><a href="proof.html">Github</a></li>
                                    <li><a href="glossary.html">Glossary</a></li>
                                    <li><a href="market-insights.html">Market Insights</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div class="footer-column">
                                <h3>Businesses</h3>
                                <ul>
                                    <li><a href="global.html">Global Network</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="careers.html">Careers</a></li>
                                <li><a href="partners.html">Partners</a></li>
                                <li><a href="affiliates.html">Affiliate</a></li>
                                <li><a href="capital.html">Capital</a></li>
                                <li><a href="licenses-and-registrations.html">Licenses & Registrations</a></li>
                                <li><a href="veify.html">Verify</a></li>
                            </ul>
                        </div>

                        <div>
                            <div class="footer-column">
                                <h3>Updates</h3>
                                <ul>
                                    <li><a href="#">X</a></li>
                                    <li><a href="page.html">Product Updates</a></li>
                                    <li><a href="page.html">Facebook</a></li>
                                    <li><a href="page.html">Youtube</a></li>
                                    <li><a href="page.html">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr class="cronos-footer-line">

                    <div class="cronos-footer-content">
                        <div class="footer-columns">
                            <div class="footer-left">
                                <p>
                                    We operate as a digitally native technology enterprise, delivering end-to-end IT solutions through modern digital infrastructure and streamlined methodologies. Our services are optimized for remote engagement, enabling fast and efficient support, with on-site deployment reserved only for situations where physical presence is essential or remote solutions are not technically viable.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="cronos-footer-bottom">
                        <div class="footer-kv">
                            <a href="page.html" aria-label="Privacy Notice">Legal</a>
                            <a href="page.html" aria-label="Status">Status</a>
                        </div>
                        <span id="copyright-text">Copyright &copy; Cronos. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    initScripts() {
        // Set dynamic year
        const year = new Date().getFullYear();
        const copyrightSpan = this.shadowRoot.getElementById('copyright-text');
        if(copyrightSpan) {
            copyrightSpan.innerHTML = `Copyright &copy; Cronos ${year}. All rights reserved.`;
        }

        // Mobile accordion functionality scoped to Shadow DOM
        const footerColumns = this.shadowRoot.querySelectorAll('.footer-column');
        
        footerColumns.forEach(column => {
            const header = column.querySelector('h3');
            if (header) {
                header.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        // Optional: Close others when one opens (Accordion style)
                        // footerColumns.forEach(c => {
                        //     if (c !== column) c.classList.remove('active');
                        // });
                        column.classList.toggle('active');
                    }
                });
            }
        });

        // Close accordion on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                footerColumns.forEach(column => {
                    column.classList.remove('active');
                });
            }
        });
    }
}

// Safety check to prevent double registration
if (!customElements.get('cronos-footer')) {
    customElements.define('cronos-footer', CronosFooter);
}