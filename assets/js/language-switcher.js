(function () {
    function applyLanguage(language) {
        var isChinese = language === 'zh';
        var pageTitle = isChinese ? document.body.dataset.pageTitleZh : document.body.dataset.pageTitleEn;
        document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
        document.body.classList.toggle('language-zh', isChinese);
        document.body.classList.toggle('language-en', !isChinese);
        if (pageTitle) document.title = pageTitle;
    }

    applyLanguage('en');

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.language-toggle')) return;
        applyLanguage(document.body.classList.contains('language-zh') ? 'en' : 'zh');
    });
}());