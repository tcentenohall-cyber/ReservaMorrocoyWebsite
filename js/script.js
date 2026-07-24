/* ==========================================================================
   Morrocoy Nature Reserve — site script
   Sections: carousel, mobile nav toggle, scroll reveal, i18n (EN/ES)
   ========================================================================== */

/* ---------- Camera trap carousel ---------- */
const track = document.querySelector(".carousel-track");

document.querySelector(".next").addEventListener("click", () => {
    track.scrollBy({
        left:380,
        behavior:"smooth"
    });
});

document.querySelector(".prev").addEventListener("click", () => {
    track.scrollBy({
        left:-380,
        behavior:"smooth"
    });
});

/* ---------- Mobile nav toggle ---------- */
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.cssText += 'flex-direction:column; position:absolute; top:100%; left:0; right:0; background:var(--paper); padding:20px 32px; border-bottom:1px solid var(--line);';
});

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

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
