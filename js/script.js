/* ==========================================================================
   Morrocoy Nature Reserve — site script
   Sections: carousel, mobile nav toggle, scroll reveal, i18n (EN/ES)
   ========================================================================== */

/* ---------- Camera trap carousel ---------- */
const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (track && nextBtn) {
    nextBtn.addEventListener("click", () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 5) {
            track.scrollTo({ left:0, behavior:"smooth" });
        } else {
            track.scrollBy({ left:380, behavior:"smooth" });
        }
    });
}

if (track && prevBtn) {
    prevBtn.addEventListener("click", () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft <= 5) {
            track.scrollTo({ left:maxScroll, behavior:"smooth" });
        } else {
            track.scrollBy({ left:-380, behavior:"smooth" });
        }
    });
}

/* ---------- Lazy-load & play/pause background videos ---------- */
const lazyVideos = document.querySelectorAll(".lazy-video");
if (lazyVideos.length) {
    const videoIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                if (!video.dataset.loaded) {
                    const source = video.querySelector("source[data-src]");
                    if (source) {
                        source.src = source.getAttribute("data-src");
                        video.load();
                    }
                    video.dataset.loaded = "true";
                }
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.25 });
    lazyVideos.forEach(v => videoIo.observe(v));
}

/* ---------- Click-to-load map (defers heavy third-party embed) ---------- */
const mapFrame = document.getElementById("mapFrame");
const mapBtn = document.getElementById("mapLoadBtn");
if (mapFrame && mapBtn) {
    mapBtn.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.src = mapFrame.getAttribute("data-map-src");
        iframe.title = mapFrame.getAttribute("data-map-title");
        iframe.loading = "lazy";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        mapBtn.replaceWith(iframe);
    }, { once: true });
}

/* ---------- Mobile nav toggle ---------- */
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('mobile-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach(el => el.classList.add('reveal-armed'));
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, {threshold:0.15});
revealEls.forEach(el => io.observe(el));

/* ==========================================================================
   i18n — EN / ES
   Relies on the `translations` object defined in js/translations.js, which
   must be loaded before this file.
   ========================================================================== */

const LANG_STORAGE_KEY = 'preferredLang';
const SUPPORTED_LANGS = ['en', 'es'];

function getTranslation(lang, key) {
    return translations[lang] ? translations[lang][key] : undefined;
}

function detectInitialLang() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;

    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
}

function applyTranslations(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';

    document.documentElement.lang = lang;

    // Plain text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = getTranslation(lang, el.getAttribute('data-i18n'));
        if (value !== undefined) el.textContent = value;
    });

    // Content that includes inline markup (e.g. <em>, <a>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const value = getTranslation(lang, el.getAttribute('data-i18n-html'));
        if (value !== undefined) el.innerHTML = value;
    });

    // Image alt text
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const value = getTranslation(lang, el.getAttribute('data-i18n-alt'));
        if (value !== undefined) el.setAttribute('alt', value);
    });

    // aria-label attributes
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const value = getTranslation(lang, el.getAttribute('data-i18n-aria-label'));
        if (value !== undefined) el.setAttribute('aria-label', value);
    });

    // meta tag "content" attributes (description, Open Graph, etc.)
    document.querySelectorAll('[data-i18n-content]').forEach(el => {
        const value = getTranslation(lang, el.getAttribute('data-i18n-content'));
        if (value !== undefined) el.setAttribute('content', value);
    });

    // mailto "Plan a visit" link — rebuild href with translated subject line
    document.querySelectorAll('[data-i18n-mailto]').forEach(el => {
        const subject = getTranslation(lang, el.getAttribute('data-i18n-mailto'));
        if (subject === undefined) return;
        const baseHref = el.getAttribute('data-mailto-base') || el.href.split('?')[0];
        el.setAttribute('data-mailto-base', baseHref);
        el.href = `${baseHref}?subject=${encodeURIComponent(subject)}`;
    });

    // Sync toggle button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    localStorage.setItem(LANG_STORAGE_KEY, lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
});

applyTranslations(detectInitialLang());