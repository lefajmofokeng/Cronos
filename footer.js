class CronosFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.initAccordions();
  }

  // Logic to handle mobile clicks
  initAccordions() {
    const headings = this.shadowRoot.querySelectorAll('.footer-heading');
    headings.forEach(heading => {
      heading.addEventListener('click', () => {
        // Only trigger if we are on a small screen (mobile)
        if (window.innerWidth <= 768) {
          const group = heading.parentElement;
          const isOpen = group.classList.contains('is-open');

          // Optional: Close other accordions when opening one
          this.shadowRoot.querySelectorAll('.col-links').forEach(col => {
            col.classList.remove('is-open');
          });

          if (!isOpen) {
            group.classList.add('is-open');
          }
        }
      });
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --c-bg-main: #080d1b; 
          --c-text-head: #858992; 
          --c-text-body: #ffffff;
          --c-accent: #84bbff #0073d2; 
          /* For crisp fonts on dark background */
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        a { text-decoration: none; color: inherit; transition: }
        ul { list-style: none; }

        .footer-container {
          background-color: var(--c-bg-main);
          color: var(--c-text-body);
          padding: 80px 10% 40px 10%;
          font-size: 15px;
          line-height: 1.6;
          border-top: 1px solid #ffffff1a; 
        }

        .top-section {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        .brand-logo-img {
          display: block;
          max-width: 100px;
          height: auto;
          margin-bottom: 24px;
        }

        .brand-desc {
          max-width: 320px;
          font-weight: 600;
          font-size: 30px;
          color: #f4f4f4;
        }

        .footer-heading {
          color: var(--c-text-head);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Accordion Chevron - Hidden by default on desktop */
        .footer-heading::after {
          content: '+';
          display: none;
          font-size: 20px;
        }

        .link-list li { margin-bottom: 14px; font-weight: 500; font-size: 16px; letter-spacing: -0.01em;}
        .link-list a:hover { color: var(--c-accent); }

        .bottom-section {
          border-top: 1px solid #ffffff1a;
          padding-top: 40px;
        }

        .copyright-line {
          color: #7b849b;
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .legal-text {
          font-size: 14px;
          max-width: 900px;
          color: #7b849b;
          font-weight: 400;
        }

        /* --- MOBILE ACCORDION STYLES --- */
        @media (max-width: 768px) {
          .top-section {
            grid-template-columns: 1fr;
            gap: 0; /* Tighten gap for accordion look */
            padding: 0 -20px;
          }

          .col-brand { padding-bottom: 40px; }

          .col-links {
            border-bottom: 1px solid #ffffff0d;
          }

          .footer-heading {
            margin-bottom: 0;
            padding: 20px 0;
            cursor: pointer;
          }

          .footer-heading::after {
            display: block; /* Show + on mobile */
          }

          .col-links.is-open .footer-heading::after {
            content: '−';
            transform: rotate(180deg);
          }

          .link-list {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
          }

          .col-links.is-open .link-list {
            max-height: 500px; /* Large enough to fit content */
            transition: max-height 0.4s ease-in-out;
            padding-bottom: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 992px) {
          .top-section { grid-template-columns: 1fr 1fr; gap: 50px 30px; }
        }
      </style>

      <footer class="footer-container">
        <div class="top-section">
          <div class="col-brand">
            <div class="brand-logo-wrapper">
              <img class="brand-logo-img" src="thumbnails/hyperion logo (2).png" alt="Cronos Logo" />
            </div>
            <p class="brand-desc">
                From Concept, To Code, To Market.
            </p>
          </div>

          <div class="col-links">
            <h3 class="footer-heading">Resources</h3>
            <ul class="link-list">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="learn.html">Learn</a></li>
              <li><a href="glossary.html">Glossary</a></li>
              <li><a href="bot.html">Cronos Bot</a></li>
              <li><a href="glossary.html">Grypto Market Updates</a></li>
            </ul>
          </div>

          <div class="col-links">
            <h3 class="footer-heading">Company</h3>
            <ul class="link-list">
              <li><a href="about.html">About Us</a></li>
              <li><a href="roadmap">Roadmap</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="licenses-and-registrations.html">Licenses & Registrations</a></li>
              <li><a href="capital.html">Capital</a></li>
              <li><a href="capital.html">Security</a></li>
              <li><a href="veify.html">Verify</a></li>
            </ul>
          </div>

          <div class="col-links">
            <h3 class="footer-heading">Updates</h3>
            <ul class="link-list">
              <li><a href="#">X</a></li>
              <li><a href="#">Product News</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div class="bottom-section">
          <div class="copyright-line">
            Copyright © Cronos 2026. All rights reserved.
          </div>
          <p class="legal-text">
            Cronos operates as a strictly digital-first service provider to ensure rapid deployment and global scalability. Field technicians are dispatched exclusively in instances where remote assistance protocols have been exhausted and physical intervention is deemed critical to resolution.
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('cronos-footer', CronosFooter);


















