const docTitleInput = document.getElementById('docTitleInput');
const faviconInput = document.getElementById('faviconInput');
const saveTitleFaviconButton = document.getElementById('saveTitleFaviconButton');

document.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('docTitle');
    const savedFavicon = localStorage.getItem('favicon');
    const savedBgColor = localStorage.getItem('bgColor');

    if (savedTitle) {
        document.title = savedTitle;
        docTitleInput.value = savedTitle;
    }

    if (savedFavicon) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = savedFavicon;
        document.head.appendChild(link);
        faviconInput.value = savedFavicon;
    }

    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor;
        document.getElementById('bgColorInput').value = savedBgColor;
    }
});

saveTitleFaviconButton.addEventListener('click', () => {
    const newTitle = docTitleInput.value;
    const newFavicon = faviconInput.value;
    document.title = newTitle;

    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = newFavicon;
    document.head.appendChild(link);

    localStorage.setItem('docTitle', newTitle);
    localStorage.setItem('favicon', newFavicon);
});

const faviconSelectInput = document.getElementById('faviconSelectInput');
const saveFaviconSelectButton = document.getElementById('saveFaviconSelectButton');

saveFaviconSelectButton.addEventListener('click', () => {
    const selectedFavicon = faviconSelectInput.value;
    if (selectedFavicon) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = selectedFavicon;
        document.head.appendChild(link);

        localStorage.setItem('favicon', selectedFavicon);
        faviconInput.value = selectedFavicon;
    } else {
        alert("Please select a favicon.");
    }
});

document.getElementById('popupToggle').addEventListener('change', function () {
    localStorage.setItem('popupEnabled', this.checked);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');
    const savedCloakTitle = localStorage.getItem('cloakTitle');
    const savedLogoUrl = localStorage.getItem('logoUrl');
    const popupEnabled = localStorage.getItem('popupEnabled') === 'true';

    if (savedPanicKey) {
      document.getElementById('panicKey').value = savedPanicKey;
    }
    if (savedPanicUrl) {
      document.getElementById('panicUrl').value = savedPanicUrl;
    }
    if (savedCloakTitle) {
      document.getElementById('title').value = savedCloakTitle;
      window.top.document.title = savedCloakTitle;
    }
    if (savedLogoUrl) {
      document.getElementById('logoUrl').value = savedLogoUrl;
      document.querySelector('link[rel="shortcut icon"]').href = savedLogoUrl;
    }
  })