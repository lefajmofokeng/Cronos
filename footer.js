class CronosFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap');

        :host {
          display: block;
          width: 100%;
          font-family: 'Inter', sans-serif;
          /* Force sharp font rendering */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .cf-container {
          background-color: #04080d;
          color: #ffffff;
          position: relative;
          overflow: hidden; 
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          /* Large padding-bottom defines the height of the footer */
          padding: 60px 20px 18vw 20px; 
        }

        /* --- Content Section (Top) --- */
        .cf-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2; /* Sits above scrolling text */
          gap: 40px;
        }

        /* --- Columns --- */
        .cf-brand-col { flex: 1 1 200px; }
        .cf-links-col { flex: 2 1 300px; display: flex; gap: 60px; }
        .cf-social-col { flex: 1 1 150px; }
        .cf-copyright-col { flex: 1 1 200px; text-align: right; }

        /* Logo Area */
        .cf-logo-wrapper {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
        }
        
        /* Image Placeholder */
        .cf-logo-img {
          display: block;
          max-width: 100px; /* Adjust based on your logo aspect ratio */
          height: auto;
          background: transparent;
        }

        /* Typography */
        .cf-heading {
          font-size: 12px;
          text-transform: uppercase;
          color: #8a8f98;
          margin-bottom: 24px; /* More space below headings */
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .cf-link-list { list-style: none; }
        .cf-link-list li { margin-bottom: 16px; }
        
        .cf-link-list a {
          text-decoration: none;
          color: #ffffff; /* Pure white for max visibility */
          font-size: 15px; /* Slightly larger for readability */
          font-weight: 500; /* Slightly bolder */
          /* REMOVED transitions to prevent font weakening/blurring */
        }

        .cf-link-list a:hover { 
          text-decoration: underline; /* Simple, sharp hover state */
          color: #ffffff;
        }

        .cf-copy-text {
          font-size: 12px;
          color: #8a8f98;
          line-height: 1.6;
        }

        /* Social Icons */
        .cf-social-icons { display: flex; gap: 16px; }
        
        .cf-icon-circle {
          width: 40px; height: 40px;
          border: 1px solid #3f444d;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #fff;
          text-decoration: none;
          background: transparent;
          /* No Box Shadow, No Transition on transforms */
        }
        
        .cf-icon-circle:hover {
          background-color: #ffffff17;
          border-color: #fff;
        }

        /* --- Seamless Background Scroller (Bottom) --- */
        .cf-bg-scroller {
          position: absolute;
          bottom: -2.9em; 
          left: 0;
          width: 100%;
          z-index: 1;
          pointer-events: none;
          opacity: 0.04; 
          line-height: 1;
          user-select: none;
        }

        .cf-track {
          display: flex;
          width: max-content;
          animation: cf-scroll-left 60s linear infinite;
        }

        .cf-text-set {
          font-size: 25vw; 
          font-weight: 700;
          text-transform: lowercase;
          color: #ffffff;
          white-space: nowrap;
          /* Only using transform here where necessary for animation */
          will-change: transform;
        }

        @keyframes cf-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* --- Responsive --- */
        @media (max-width: 992px) {
           .cf-content { gap: 50px 30px; }
           .cf-copyright-col { text-align: left; flex-basis: 100%; margin-top: 20px; }
           .cf-links-col { gap: 30px; }
        }

        @media (max-width: 768px) {
          .cf-container {
             padding: 40px 20px 40vw 20px; 
          }
          .cf-content { flexDirection: column; gap: 40px; }
          .cf-brand-col, .cf-links-col, .cf-social-col, .cf-copyright-col {
            flex: auto; width: 100%;
          }
          .cf-links-col { flex-direction: column; gap: 30px; }
          .cf-text-set { font-size: 35vw; } 
        }
      </style>

      <footer class="cf-container">
        
        <div class="cf-content">
          <div class="cf-brand-col">
              <img class="cf-logo-img" src="thumbnails/hyperion logo (2).png" alt="Logo Placeholder" />
          </div>

          <div class="cf-links-col">
            <div class="cf-link-group">
              <h3 class="cf-heading">Cronos</h3>
              <ul class="cf-link-list">
                <li><a href="about.html">About Us</a></li>
                <li><a href="careers.html">Careers</a></li>
                <li><a href="licenses-and-registrations.html">Licenses & Registrations</a></li>
                <li><a href="veify.html">Verify</a></li>
              </ul>
            </div>
            <div class="cf-link-group" style="padding-top: 38px;"> <ul class="cf-link-list">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Cronos Labs</a></li>
              </ul>
            </div>
          </div>

          <div class="cf-social-col">
             <h3 class="cf-heading">Social</h3>
             <div class="cf-social-icons">
               <a class="cf-icon-circle">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1536 1504"><path fill="#e5e5e5" d="M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z"/></svg>
               </a>
               <a class="cf-icon-circle">
               <svg height="18" viewBox="0 0 24 24" fill="#e5e5e5"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
               </a>
               <a class="cf-icon-circle">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1536 1536"><path fill="#e5e5e5" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/></svg>
               </a>
             </div>
          </div>

          <div class="cf-copyright-col">
             <h3 class="cf-heading" style="text-transform: none;">Copyright</h3>
             <div class="cf-copy-text">
               © 2025 Cronos Labs.<br>All rights reserved.
             </div>
          </div>
        </div>

        <div class="cf-bg-scroller" aria-hidden="true">
          <div class="cf-track">
            <span class="cf-text-set">
              cronos cronos cronos cronos cronos cronos cronos&nbsp;
            </span>
            <span class="cf-text-set">
              cronos cronos cronos cronos cronos cronos cronos&nbsp;
            </span>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('cronos-footer', CronosFooter);