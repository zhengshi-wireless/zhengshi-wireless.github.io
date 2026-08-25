(function () {
    function applyLanguage(language) {
        var isChinese = language === 'zh';
        document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
        document.body.classList.toggle('language-zh', isChinese);
        document.body.classList.toggle('language-en', !isChinese);
    }

    applyLanguage('en');

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.language-toggle')) return;
        var nextLanguage = document.body.classList.contains('language-zh') ? 'en' : 'zh';
        applyLanguage(nextLanguage);
    });
}());