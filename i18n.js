document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-switch');
    if (!langSelect) return;

    // Determine current language from URL
    const isEnglish = window.location.pathname.includes('-en.html');
    langSelect.value = isEnglish ? 'en' : 'pl';

    langSelect.addEventListener('change', (e) => {
        const selected = e.target.value;
        const currentPath = window.location.pathname;
        let filename = currentPath.split('/').pop() || 'index.html';

        if (selected === 'en' && !filename.includes('-en.html')) {
            const newFilename = filename.replace('.html', '-en.html');
            window.location.href = newFilename;
        } else if (selected === 'pl' && filename.includes('-en.html')) {
            const newFilename = filename.replace('-en.html', '.html');
            window.location.href = newFilename;
        }
    });

    // Also update mobile menu switcher if it exists separately
    const mobileLangSelect = document.querySelector('.mobile-menu #lang-switch');
    if (mobileLangSelect) {
        mobileLangSelect.value = isEnglish ? 'en' : 'pl';
        mobileLangSelect.addEventListener('change', (e) => {
            langSelect.value = e.target.value;
            langSelect.dispatchEvent(new Event('change'));
        });
    }
});
