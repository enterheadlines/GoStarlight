

function onGradientChange() {
    const selectedGradient = gradientSelector.value;
    document.body.style.background = selectedGradient;
    localStorage.setItem('backgroundGradient', selectedGradient);
}

function onResetButtonClick() {
    const defaultGradient = 'linear-gradient(to right, #ffffff, #f0f0f0)';
    document.body.style.background = defaultGradient;
    localStorage.removeItem('backgroundGradient');
    gradientSelector.selectedIndex = -1;
}

// Attach `onclick` handlers and other event handlers
saveTitleFaviconButton.onclick = onSaveTitleFavicon;
saveFaviconSelectButton.onclick = onSaveFaviconSelect;
document.getElementById('popupToggle').onclick = onPopupToggleChange;
gradientSelector.onclick = onGradientChange;
resetButton.onclick = onResetButtonClick;

// Load settings on document load
window.onload = onDocumentLoad;


        // Initialize Google Translate
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en', // Original language of the page
                includedLanguages: 'en,es,fr,de,zh-CN,ja,ru,it,pt,nl,ko,ar,hi,sv,da,fi,pl,th,cs,ro,hu,tr,vi,he,id,ms,ta,ml,tl,el,uk,sk,bg,hr,sl,lt,lv,et,af,sw,sw-KE,sw-TZ,zu,xh,st,tn,so,am,ne,pa,gu,te,kn,ml,or,si,km,lo,mi,cy,ga,yi,ku,hy,ka,be,tk,tk-TM', // 40 additional languages
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        }

        // Load Google Translate script dynamically
        (function() {
            var gtScript = document.createElement('script');
            gtScript.type = 'text/javascript';
            gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(gtScript);
        })();

        // Save selected language in localStorage
        function saveSelectedLanguage() {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                select.addEventListener('change', function() {
                    const selectedLanguage = select.value;
                    localStorage.setItem('selectedLanguage', selectedLanguage);
                });
            }
        }

        // Apply saved language on page load
        function applySavedLanguage() {
            const savedLanguage = localStorage.getItem('selectedLanguage');
            if (savedLanguage) {
                const select = document.querySelector('.goog-te-combo');
                if (select) {
                    select.value = savedLanguage;
                    select.dispatchEvent(new Event('change')); // Trigger translation
                }
            }
        }

        // Wait for the Google Translate widget to load
        window.onload = function() {
            setTimeout(function() {
                saveSelectedLanguage();
                applySavedLanguage();
            }, 1000); // Delay to ensure the widget is fully loaded
        };