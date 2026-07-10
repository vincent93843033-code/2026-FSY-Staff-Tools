(function () {
  'use strict';

  function setText(selector, text) {
    var el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function openToolsHome() {
    document.body.classList.add('tools-app');
    document.title = '工作人員小工具';

    setText('.header h1', '工作人員小工具');
    setText('.status-text', '工具已就緒');
    setText('footer.footer', '2026 FSY 工作人員小工具');

    var appTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (appTitle) appTitle.setAttribute('content', '工作人員小工具');

    var toolsButton = document.querySelector('.tab-btn[data-tab="tools"]');
    if (toolsButton) toolsButton.click();

    window.dispatchEvent(new Event('resize'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openToolsHome);
  } else {
    openToolsHome();
  }
})();
