// File: header.js

class CronosHeader extends HTMLElement {
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
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

            /* =============================================
                CRONOS HEADER - UNIQUE STYLES (SHADOW DOM)
                ============================================= */
            
            /* :host replaces :root for Shadow DOM scoping */
            :host {
                /* Palette */
                --cronos-color-header-bg: #080d1b;
                --cronos-color-accent: #0091ff;
                --cronos-color-text-light: #fff;
                --cronos-color-background-dark: #000;
                --cronos-color-off-white: #f4f4f4;
                --cronos-color-text-muted: #A0A9BE;
                --cronos-color-menu-bg: #080d1b;
                --cronos-color-menu-border: rgba(0, 145, 255, 0.2);
                --cronos-color-qr-dropdown-bg: #1c1a3b;
                
                /* Sizing */
                --cronos-header-height: 55px;
                --cronos-content-max-width-fg: 1420px;

                display: block;
                font-family: 'Inter', system-ui, -apple-system, sans-serif; /* Ensure font consistency */
            }

            /* Reset for isolation */
            * {
                box-sizing: border-box;
            }

            .cronos-header-wrapper {
                position: fixed; 
                top: 0;
                left: 0;
                width: 100%; 
                z-index: 1000;
                background-color: var(--cronos-color-header-bg);
                text-decoration: none;
                border-bottom: none;
                line-height: normal;
            }

            .cronos-custom-header {
                height: var(--cronos-header-height);
                display: flex;
                align-items: center;
            }

            .cronos-custom-header-container {
                max-width: var(--cronos-content-max-width-fg);
                width: 100%;
                margin: 0 auto;
                padding: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            /* Logo */
            .cronos-custom-logo-text img {
                font-size: 28px;
                font-weight: 900;
                letter-spacing: -0.5px;
                color: var(--cronos-color-text-light);
                transition: color 0.3s ease;
                height: 30px;
                vertical-align: middle;
            }
            
            .cronos-custom-logo-text:hover {
                 color: var(--cronos-color-accent);
            }

            /* Desktop Navigation */
            .cronos-custom-main-nav {
                flex-grow: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .cronos-custom-nav-list {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                align-items: center;
            }

            .cronos-custom-nav-list li {
                margin-left: 35px;
                position: relative;
                text-decoration: none;
                border-bottom: none;
            }

            .cronos-custom-nav-link {
                text-decoration: none;
                color: var(--cronos-color-text-light);
                font-weight: 500;
                padding: 10px 0;
                display: flex;
                font-size: 14px;
                align-items: center;
                cursor: pointer;
            }

            .cronos-custom-nav-link:hover {
                color: #a0a9be;
            }
            
            /* Icon for desktop links */
            .cronos-desktop-link-icon {
                width: 14px;
                height: 14px;
                margin-left: 6px;
                color: var(--cronos-color-text-muted);
                stroke-width: 2;
            }
            
            .cronos-custom-nav-link:hover .cronos-desktop-link-icon {
                color: #a0a9be;
            }
            
            /* Action Buttons Wrapper */
            .cronos-header-action-buttons {
                display: flex;
                align-items: center;
            }

            /* Primary Action Button (Contact Us) */
            .cronos-header-action-btn {
                background: #0077cc;
                color: var(--cronos-color-text-light);
                border: none;
                padding: 9px 15px;
                border-radius: 50px;
                font-weight: 600;
                font-size: 15px;
                cursor: pointer;
                margin-left: 10px;
                transition: background-color 0.2s ease;
                text-decoration: none;
                border-bottom: none;
                font-family: inherit;
            }

            .cronos-header-action-btn a {
                color: inherit;
                text-decoration: none;
                border-bottom: none;
            }

            .cronos-header-action-btn:hover {
                background-color: #0081ff;
            }
            
            /* Secondary Action Button (Get Started) */
            .cronos-header-secondary-btn {
                background-color: #62b8fa32;
                color: #95d1ff;
                border: none;
                padding: 9px 15px;
                border-radius: 50px;
                font-weight: 600;
                font-size: 15px;
                cursor: pointer;
                margin-left: 10px;
                text-decoration: none;
                border-bottom: none;
                font-family: inherit;
            }

            .cronos-header-secondary-btn a {
                color: inherit;
                text-decoration: none;
                border-bottom: none;
            }

            .cronos-header-secondary-btn:hover {
                background-color: #4a4b6b;
            }

            /* QR Code Dropdown Trigger */
            .cronos-qr-dropdown-trigger {
                position: relative;
                margin-left: 10px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: background-color 0.2s ease;
                color: var(--cronos-color-text-light);
                font-size: 18px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .cronos-qr-dropdown-trigger:hover {
                background-color: #2b294a;
            }

            .cronos-qr-dropdown-trigger svg {
                content: '';
                display: inline-block;
                width: 25px;
                height: 25px;
                background-size: contain;
                background-repeat: no;
            }

            /* QR Code Dropdown Content */
            .cronos-qr-dropdown-content {
                position: absolute;
                top: calc(100% + 10px);
                right: 0;
                background-color: #080d1b;
                border-radius: 15px;
                padding: 10px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 120px;
                visibility: hidden;
                opacity: 0;
                transform: translateY(-10px);
                transition: visibility 0.2s, opacity 0.2s, transform 0.2s;
                z-index: 100;
            }

            .cronos-qr-dropdown-content.show {
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            }

            .cronos-qr-dropdown-content img {
                width: 100px;
                height: 100px;
                background-color: #fff;
                padding: 10px;
                border-radius: 8px;
                margin-bottom: 15px;
            }

            .cronos-qr-dropdown-content p {
                color: var(--cronos-color-text-light);
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                margin: 0;
                line-height: 1.4;
            }

            /* MEGA MENU CONTAINER */
            .cronos-mega-menu-container {
                position: absolute;
                top: var(--cronos-header-height);
                left: 0;
                width: 100%;
                background-color: var(--cronos-color-menu-bg);
                visibility: hidden;
                opacity: 0;
                transform: translateY(-10px);
                transition: visibility 0s, opacity 0s, transform 0s;
            }

            .cronos-header-wrapper.cronos-mega-menu-open .cronos-mega-menu-container {
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            }

            .cronos-mega-menu-panel {
                display: none;
                max-width: var(--cronos-content-max-width-fg);
                width: 100%;
                margin: 0 auto;
                padding: 20px 40px 40px 121px;
            }

            .cronos-mega-menu-panel.active {
                display: block;
            }
            
            /* 3-Column Grid for Mega Menus */
            .cronos-megamenu-3-column-grid {
                display: grid;
                grid-template-columns: repeat(3, 250px);
                gap: 40px;
                justify-content: start;
                
            }
            
            .cronos-menu-group-card {
                padding: 0;
                padding-top: 10px;
                padding-bottom: 2.5rem;
                border-radius: 8px;
            }

            .cronos-menu-group-card h3 {
                font-size: 13px;
                font-weight: 600;
                margin-bottom: 25px;
                text-transform: none;
                letter-spacing: 0.1px;
                cursor: default;
                display: flex;
                align-items: center;
                color: var(--cronos-color-text-muted);
                margin-top: 0; /* Reset */
            }
            
            /* Image Icon for mega menu group headings */
            .cronos-menu-group-img-icon {
                width: auto;
                height: 40px;
                margin-right: 12px;
                flex-shrink: 0;
                border-radius: 11px;
                backface-visibility: visible;
            }
            
            /* Container for Heading Text and Tagline */
            .cronos-menu-group-text-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            /* Tagline Style */
            .cronos-menu-group-tagline {
                font-size: 12px;
                font-weight: 500;
                color: var(--cronos-color-text-muted);
                margin-top: 5px;
                display: block;
            }
            
            .cronos-mega-menu-group-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            /* Link Items inside Mega Menu */
            .cronos-mega-menu-group-list a {
                display: block;
                border-radius: 0;
                transition: color 0s;
                position: relative;
                margin: 7px 0;
                padding: 2px 0;
                letter-spacing: -0.03em;
                font-size: 19px;
                font-weight: 600;
                color: var(--cronos-color-text-light);
                 text-decoration: none;
                border-bottom: none;
            }

            .cronos-mega-menu-link-title {
                font-size: inherit;
                font-weight: inherit;
                color: inherit;
                margin-bottom: 0;
            }
            
            .cronos-mega-menu-group-list a:hover {
                color: #9cd4ff;
                background-color: transparent;
            }
            
            /* SVG Icon for mobile dropdown */
            .cronos-mobile-dropdown-icon {
                display: none;
                transition: transform 0.3s ease;
            }

            /* Mobile Toggle */
            .cronos-mobile-toggle {
                display: none;
                background: none;
                border: none;
                width: 30px;
                height: 24px;
                cursor: pointer;
                padding: 0;
                position: relative;
                z-index: 1010;
            }

            .cronos-mobile-toggle span {
                display: block;
                height: 2px;
                width: 100%;
                background-color: var(--cronos-color-text-light);
                margin: 6px 0;
                transition: all 0.3s ease;
            }

            .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(2) {
                opacity: 0;
            }
            .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
            
            /* Mobile Overrides */
            @media (max-width: 1024px) {
                .cronos-custom-header-container {
                    padding: 0 20px;
                }
                
                .cronos-mobile-toggle {
                    display: block;
                }

                .cronos-custom-main-nav {
                    position: fixed;
                    top: var(--cronos-header-height);
                    left: 0;
                    width: 100%;
                    height: calc(100vh - var(--cronos-header-height));
                    background-color: var(--cronos-color-header-bg);
                    overflow-y: auto;
                    padding: 20px 0;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    display: block;
                    z-index: 900;
                }

                .cronos-header-wrapper.cronos-mobile-menu-open .cronos-custom-main-nav {
                    transform: translateX(0);
                }

                .cronos-custom-nav-list {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0 20px;
                    margin-left: 0;
                }

                .cronos-custom-nav-list li {
                    margin: 0;
                    width: 100%;
                    
                }

                .cronos-custom-nav-link {
                    padding: 15px 0;
                    font-size: 1.1rem;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                /* Hide desktop-only icons on mobile */
                .cronos-desktop-link-icon {
                    display: none;
                }
                
                /* Hide the tagline on mobile */
                .cronos-menu-group-tagline {
                    display: none;
                }
                
                /* Show and style mobile icon */
                .cronos-mobile-dropdown-icon {
                    display: inline-block;
                }
                
                /* Rotate icon when the parent menu item is active */
                .cronos-custom-nav-item--has-megamenu.active .cronos-custom-nav-link .cronos-mobile-dropdown-icon {
                    transform: rotate(180deg);
                }
                
                /* Mobile Action Buttons */
                .cronos-header-action-buttons {
                    flex-direction: column;
                    width: 100%;
                    padding: 0 20px;
                    box-sizing: border-box;
                    margin-top: 20px;
                }

                .cronos-header-action-btn,
                .cronos-header-secondary-btn {
                    width: 100%;
                    margin: 10px 0 0 0;
                    padding: 15px 20px;
                    text-align: center;
                }

                .cronos-qr-dropdown-trigger {
                    width: 100%;
                    border-radius: 50px;
                    margin: 10px 0 0 0;
                    padding: 15px 20px;
                    height: auto;
                    box-sizing: border-box;
                    justify-content: center;
                    display: none; /* HIDE QR TRIGGER ON MOBILE */
                }

                .cronos-qr-dropdown-content {
                    position: static;
                    width: 100%;
                    margin-top: 15px;
                    padding: 15px;
                    box-shadow: none;
                    border-top: 1px solid rgba(0, 145, 255, 0.1);
                    border-radius: 0;
                    background-color: #0d0d29;
                    display: none; /* HIDE QR CONTENT ON MOBILE */
                }
                
                .cronos-qr-dropdown-content img {
                    width: 120px;
                    height: 120px;
                }

                .cronos-qr-dropdown-content.show {
                    transform: none;
                }

                /* Mobile Mega Menu */
                .cronos-mega-menu-container {
                    position: static;
                    visibility: visible;
                    opacity: 1;
                    transform: none;
                    transition: max-height 0.3s ease;
                    overflow: hidden;
                    max-height: 0;
                    background-color: var(--cronos-color-menu-bg);
                    border-top: none;
                }

                .cronos-mega-menu-link-title {
                  padding: 0;
                  border-bottom: none;
                }
                
                .cronos-custom-nav-item--has-megamenu.active .cronos-mega-menu-container {
                    max-height: 2000px;
                    padding: 0;
                }
                
                .cronos-mega-menu-panel {
                    padding: 15px 0;
                    display: block;
                }

                .cronos-megamenu-3-column-grid {
                    grid-template-columns: 1fr;
                    gap: 20px;
                    padding-left: 0;
                }
                
                .cronos-menu-group-card {
                    padding: 0;
                }
                
                .cronos-menu-group-card h3 {
                    margin-top: 23px;
                    flex-direction: row;
                    align-items: center;
                    display: flex;
                }
                
                .cronos-mega-menu-group-list a {
                    margin: 10px 0;
                }

                .cronos-mega-menu-group-list li {
                    border: none;
                }
                
                .cronos-mega-menu-group-list a:hover {
                    background-color: rgba(0, 145, 255, 0.1);
                }
            }
        </style>

        <div class="cronos-header-wrapper">
            
            <header class="cronos-custom-header">
                <div class="cronos-custom-header-container">
                    
                    <div class="cronos-custom-logo-container">
                        <a href="index.html" class="cronos-custom-logo-link cronos-custom-logo-text">
                            <img src="thumbnails/hyperion logo (2).png" alt="Cronos Logo">
                        </a>
                    </div>

                    <nav class="cronos-custom-main-nav">
                        <ul class="cronos-custom-nav-list">
                            <li>
                                <a href="pricing.html" class="cronos-custom-nav-link">Pricing
                                     
                                </a>
                            </li>
                            <li>
                                <a href="page.html" class="cronos-custom-nav-link" data-cronos-megamenu-trigger="projects">Ecosystem
                                     
                                </a>
                            </li>
                            <li class="cronos-custom-nav-item--has-megamenu">
                                <a href="page.html" class="cronos-custom-nav-link" data-cronos-megamenu-trigger="services">
                                    Solutions
                                    <svg class="cronos-mobile-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                      <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <div class="cronos-mega-menu-container">
                                    <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="services">
                                        <div class="cronos-megamenu-3-column-grid">
                                            
                                            <div class="cronos-menu-group-card">
                                                <h3>
                                                    Software Development
                                                </h3>
                                                <ul class="cronos-mega-menu-group-list">
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Web Applications</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="mobile-applications.html">
                                                            <span class="cronos-mega-menu-link-title">Mobile Applications</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">AI & Machine Learning</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">API & Microservices Architecture</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">E-commerce Solutions</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Blockchain & Web3</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Database Engineering & Management</span>
                                                            </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="cronos-menu-group-card">
                                                <h3>
                                                    IT Infrastructure
                                                </h3>
                                                <ul class="cronos-mega-menu-group-list">
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Managed IT Support & Helpdesk</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">IT Consulting</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Cloud Computing</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Data Center & Storage</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Smart Technology</span>
                                                            </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="cronos-menu-group-card">
                                                <h3>
                                                    Marketing & Creative Studio
                                                </h3>
                                                <ul class="cronos-mega-menu-group-list">
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Digital Marketing</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Graphic Design</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Content Management</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Multimedia Production</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Advertising Campaigns</span>
                                                            </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="cronos-custom-nav-item--has-megamenu">
                                <a href="#" class="cronos-custom-nav-link" data-cronos-megamenu-trigger="discover">
                                    Discover
                                    <svg class="cronos-mobile-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                      <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <div class="cronos-mega-menu-container">
                                    <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="discover">
                                        <div class="cronos-megamenu-3-column-grid">
                                            
                                            <div class="cronos-menu-group-card">
                                                <h3>
                                                    Cronos
                                                </h3>
                                                <ul class="cronos-mega-menu-group-list">
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">About Us</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Product News</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Innovations</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="careers.html">
                                                            <span class="cronos-mega-menu-link-title">Careers</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="partners.html">
                                                            <span class="cronos-mega-menu-link-title">Partners</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="licenses-and-registrations.html">
                                                            <span class="cronos-mega-menu-link-title">Licenses & Registrations</span>
                                                            </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            <div class="cronos-menu-group-card">
                                                <h3>
                                                    Resources
                                                </h3>
                                                <ul class="cronos-mega-menu-group-list">
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Blog</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">eBooks</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Podcasts</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Webinars</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Recommendations</span>
                                                            </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="cronos-menu-group-card">
                                                <h3>
                                                    Connect
                                                </h3>
                                                <ul class="cronos-mega-menu-group-list">
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">X</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="page.html">
                                                            <span class="cronos-mega-menu-link-title">Facebook</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span class="cronos-mega-menu-link-title">LinkedIn</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span class="cronos-mega-menu-link-title">Youtube</span>
                                                            </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span class="cronos-mega-menu-link-title">Github</span>
                                                            </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="cronos-header-action-buttons">
                            <button class="cronos-header-secondary-btn">
                                <a href="page.html">Log In</a>
                            </button>
                            <button class="cronos-header-action-btn">
                                <a href="form.html">Contact</a>
                            </button>
                            <div class="cronos-qr-dropdown-trigger" id="cronos-qrDropdownTrigger">
                              <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#8fbffa" d="M2 1H1v8h2V3h6V1zm0 22H1v-8h2v6h6v2zM23 1v8h-2V3h-6V1zm0 21v1h-8v-2h6v-6h2z"/><path fill="#2859c5" d="M5 10v1h6V5H5zm4-1H7V7h2zm4 1v1h6V5h-6zm4-1h-2V7h2zM5 19v-6h6v6zm2-2h2v-2H7zm6 .5V19h6v-2h-4v-4h-2zm4-4.5v2h2v-2z"/></g></svg>
                                <div class="cronos-qr-dropdown-content" id="cronos-qrDropdownContent">
                                    <img src="thumbnails/qr-code-placeholder.png" alt="QR Code"> <p>Contact Sales</p>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <button class="cronos-mobile-toggle" id="cronos-mobileMenuToggle" aria-label="Toggle navigation menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div class="cronos-mega-menu-container cronos-desktop-mega-menu">
                
                <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="services">
                    <div class="cronos-megamenu-3-column-grid">
                        
                        <div class="cronos-menu-group-card">
                            <h3>
                                <img src="thumbnails/04 (2).png" alt="Dev Icon" class="cronos-menu-group-img-icon">
                                <span class="cronos-menu-group-text-container" style="color: white; font-weight: 500; font-size: 14px;">
                                    Software Development
                                    <span class="cronos-menu-group-tagline">Build your custom vision</span>
                                </span>
                            </h3>
                            <button style="color: white; background-color: transparent; border: 1px solid rgba(128, 128, 128, 0.334); padding: 7px 16px; border-radius: 50px; margin-bottom: 16px; font-weight: 500; font-size: 0.9rem; font-family: 'Inter', sans-serif;"><a style="text-decoration: none; border-bottom: none; color: #fff;" href="index.html">Start Project
                                <svg style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"/></svg>
                            </a></button>
                            <ul class="cronos-mega-menu-group-list">
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">AI</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Web Applications</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="mobile-applications.html">
                                        <span class="cronos-mega-menu-link-title">Mobile Applications</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">E-commerce</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Blockchain & Web3</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Database Engineering & Management</span>
                                        </a>
                                </li>
                            </ul>
                        </div>

                        <div class="cronos-menu-group-card">
                            <h3>
                                <img src="thumbnails/02.png" alt="IT Icon" class="cronos-menu-group-img-icon">
                                 <span class="cronos-menu-group-text-container" style="color: white; font-weight: 500; font-size: 14px;">
                                    IT Infrastructure
                                    <span class="cronos-menu-group-tagline">Power your business</span>
                                </span>
                            </h3>
                            <button style="color: white; background-color: transparent; border: 1px solid rgba(128, 128, 128, 0.334); padding: 7px 16px; border-radius: 50px; margin-bottom: 16px; font-weight: 500; font-size: 0.9rem; font-family: 'Inter', sans-serif;"><a style="text-decoration: none; border-bottom: none; color: #fff;" href="index.html">Learn About IT
                                <svg style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"/></svg>
                            </a></button>
                            <ul class="cronos-mega-menu-group-list">
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">IT Support & Helpdesk</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Managed IT Infrastructure</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">IT Consulting</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Cybersecurity</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Cloud Computing</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Data Center & Storage</span>
                                        </a>
                                </li>
                            </ul>
                        </div>

                        <div class="cronos-menu-group-card">
                            <h3>
                                <img src="thumbnails/03.png" alt="Marketing Icon" class="cronos-menu-group-img-icon">
                                <span class="cronos-menu-group-text-container" style="color: white; font-weight: 500; font-size: 14px;">
                                    Marketing & Creative Studio
                                    <span class="cronos-menu-group-tagline">Grow your audience</span>
                                </span>
                            </h3>
                            <button style="color: white; background-color: transparent; border: 1px solid rgba(128, 128, 128, 0.334); padding: 7px 16px; border-radius: 50px; margin-bottom: 16px; font-weight: 500; font-size: 0.9rem; font-family: 'Inter', sans-serif;"><a style="text-decoration: none; border-bottom: none; color: #fff;" href="index.html">Explore Marketing
                                <svg style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"/></svg>
                            </a></button>
                            <ul class="cronos-mega-menu-group-list">
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Digital Marketing</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Graphic Design</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Content Management</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Advertising</span>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="discover">
                    <div class="cronos-megamenu-3-column-grid">
                        
                        <div class="cronos-menu-group-card">
                            <h3>
                                Cronos
                            </h3>
                            <ul class="cronos-mega-menu-group-list">
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">About Us</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Roadmap</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Innovations</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Product News</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="careers.html">
                                        <span class="cronos-mega-menu-link-title">Careers</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="partners.html">
                                        <span class="cronos-mega-menu-link-title">Partners</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="licenses-and-registrations.html">
                                        <span class="cronos-mega-menu-link-title">Licenses & Registrations</span>
                                        </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="cronos-menu-group-card">
                            <h3>
                                Resources
                            </h3>
                            <ul class="cronos-mega-menu-group-list">
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Blog</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">eBooks</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Webinars</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Podcasts</span>
                                        </a>
                                </li>
                            </ul>
                        </div>

                        <div class="cronos-menu-group-card">
                            <h3>
                                Learn
                            </h3>
                            <ul class="cronos-mega-menu-group-list">
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Learn</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Research</span>
                                        </a>
                                </li>
                                <li>
                                    <a href="page.html">
                                        <span class="cronos-mega-menu-link-title">Market Updates</span>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    initScripts() {
        // We use this.shadowRoot.querySelector to ensure we only look inside this component
        const cronosHeaderWrapper = this.shadowRoot.querySelector('.cronos-header-wrapper');
        const cronosDesktopMegaMenuContainer = this.shadowRoot.querySelector('.cronos-desktop-mega-menu');
        const cronosMegaMenuTriggers = this.shadowRoot.querySelectorAll('[data-cronos-megamenu-trigger]');
        const cronosDesktopMegaMenuPanels = cronosDesktopMegaMenuContainer.querySelectorAll('.cronos-mega-menu-panel');
        const cronosMobileMenuToggle = this.shadowRoot.getElementById('cronos-mobileMenuToggle');
        
        // IMPORTANT: We still need to access the main document body to prevent scrolling when mobile menu is open
        const cronosBody = document.body;
        
        // QR Code Dropdown elements
        const cronosQrDropdownTrigger = this.shadowRoot.getElementById('cronos-qrDropdownTrigger');
        const cronosQrDropdownContent = this.shadowRoot.getElementById('cronos-qrDropdownContent');

        let cronosCloseTimer = null;
        let cronosQrCloseTimer = null;

        // =============================================
        // DESKTOP MEGA MENU LOGIC
        // =============================================
        
        const cronosSetActiveMenu = (trigger, panel) => {
            cronosMegaMenuTriggers.forEach(t => t.classList.remove('active'));
            cronosDesktopMegaMenuPanels.forEach(p => p.classList.remove('active'));

            if (trigger && panel) {
                trigger.classList.add('active');
                panel.classList.add('active');
                cronosHeaderWrapper.classList.add('cronos-mega-menu-open');
            } else {
                cronosHeaderWrapper.classList.remove('cronos-mega-menu-open');
            }
        };

        const cronosHandleOpen = (trigger) => {
            if (window.innerWidth > 1024) {
                clearTimeout(cronosCloseTimer);
                const targetMenuId = trigger.getAttribute('data-cronos-megamenu-trigger');
                const targetMenuPanel = cronosDesktopMegaMenuContainer.querySelector(`[data-cronos-megamenu-panel="${targetMenuId}"]`);
                cronosSetActiveMenu(trigger, targetMenuPanel);
                if (cronosQrDropdownContent.classList.contains('show')) {
                    cronosHideQrDropdown();
                }
            }
        };

        const cronosHandleClose = () => {
            if (window.innerWidth > 1024) {
                cronosCloseTimer = setTimeout(() => {
                    cronosSetActiveMenu(null, null);
                }, 150); 
            }
        };

        cronosMegaMenuTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                cronosHandleOpen(trigger);
            });
            
            trigger.parentElement.addEventListener('mouseleave', () => {
                cronosHandleClose();
            });
        });

        cronosDesktopMegaMenuContainer.addEventListener('mouseenter', () => {
            if (window.innerWidth > 1024) {
                clearTimeout(cronosCloseTimer);
            }
        });

        cronosDesktopMegaMenuContainer.addEventListener('mouseleave', () => {
            cronosHandleClose();
        });

        // =============================================
        // QR CODE DROPDOWN LOGIC
        // =============================================
        const cronosShowQrDropdown = () => {
            if (window.innerWidth > 1024) {
                clearTimeout(cronosQrCloseTimer);
                cronosQrDropdownContent.classList.add('show');
                cronosSetActiveMenu(null, null);
            }
        };

        const cronosHideQrDropdown = () => {
            if (window.innerWidth > 1024) {
                cronosQrCloseTimer = setTimeout(() => {
                    cronosQrDropdownContent.classList.remove('show');
                }, 150);
            }
        };

        cronosQrDropdownTrigger.addEventListener('mouseenter', cronosShowQrDropdown);
        cronosQrDropdownTrigger.addEventListener('mouseleave', cronosHideQrDropdown);
        cronosQrDropdownContent.addEventListener('mouseenter', cronosShowQrDropdown);
        cronosQrDropdownContent.addEventListener('mouseleave', cronosHideQrDropdown);

        // =============================================
        // MOBILE MENU LOGIC
        // =============================================
        const cronosMobileDropdownItems = this.shadowRoot.querySelectorAll('.cronos-custom-nav-item--has-megamenu');
        
        cronosMobileMenuToggle.addEventListener('click', function() {
            cronosHeaderWrapper.classList.toggle('cronos-mobile-menu-open');
            // Toggle body class for scroll locking (accessing global scope intentionally)
            cronosBody.classList.toggle('cronos-mobile-menu-active');
            
            if (!cronosHeaderWrapper.classList.contains('cronos-mobile-menu-open')) {
                 cronosMobileDropdownItems.forEach(item => item.classList.remove('active'));
                 cronosQrDropdownContent.classList.remove('show');
            }
        });

        cronosMobileDropdownItems.forEach(item => {
            const trigger = item.querySelector('.cronos-custom-nav-link');
            trigger.addEventListener('click', function(e) {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation(); 

                    cronosMobileDropdownItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });

                    item.classList.toggle('active');
                    cronosQrDropdownContent.classList.remove('show');
                }
            });
        });

        cronosQrDropdownTrigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                e.stopPropagation();
                cronosQrDropdownContent.classList.toggle('show');
                cronosMobileDropdownItems.forEach(item => item.classList.remove('active'));
            }
        });

        this.shadowRoot.querySelectorAll('.cronos-custom-nav-list a').forEach(link => {
            if (!link.hasAttribute('data-cronos-megamenu-trigger') && !link.closest('.cronos-mega-menu-container')) {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 1024) {
                        cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                        cronosBody.classList.remove('cronos-mobile-menu-active');
                        cronosQrDropdownContent.classList.remove('show');
                    }
                });
            }
        });
        
        document.addEventListener('click', (event) => {
            // Check if the click is outside the web component entirely
            // We use composedPath to detect clicks through the shadow boundary
            const path = event.composedPath();
            if (window.innerWidth > 1024 && !path.includes(cronosQrDropdownTrigger) && !path.includes(cronosQrDropdownContent)) {
                cronosHideQrDropdown();
            }
        });

        // =============================================
        // WINDOW RESIZE HANDLER
        // =============================================
        let cronosResizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(cronosResizeTimer);
            cronosResizeTimer = setTimeout(function() {
                if (window.innerWidth > 1024) {
                    cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                    cronosBody.classList.remove('cronos-mobile-menu-active');
                    cronosMobileDropdownItems.forEach(item => item.classList.remove('active'));
                    cronosSetActiveMenu(null, null);
                } else {
                    cronosQrDropdownContent.classList.remove('show');
                }
            }, 250);
        });
    }
}

// Safety check: only define the element if it hasn't been defined yet
if (!customElements.get('cronos-header')) {
    customElements.define('cronos-header', CronosHeader);
}