// HTML-ல் உள்ள அனைத்து accordion தலைப்புகளையும் பெறுகிறோம்
const headers = document.querySelectorAll('.accordion-header');

// ஒவ்வொரு தலைப்பிற்கும் ஒரு 'click' event listener-ஐ சேர்க்கிறோம்
headers.forEach(header => {
    header.addEventListener('click', function() {
        // தற்போது கிளிக் செய்யப்பட்ட தலைப்பிற்கு அடுத்த Content பகுதியைப் பெறுகிறோம்
        const content = this.nextElementSibling;
        
        // தற்போதுள்ள Content பகுதியானது திறந்திருக்கிறதா (active) என்று சோதிக்கிறோம்
        const isCurrentlyActive = content.classList.contains('active');

        // அனைத்து Content பகுதிகளையும் மூடுகிறோம் (அனைத்திலும் இருந்து 'active' class-ஐ நீக்குகிறோம்)
        closeAllContents();

        // தற்போது கிளிக் செய்யப்பட்ட Content திறந்திருக்கவில்லை என்றால், அதைத் திறக்கிறோம்.
        // நீங்கள் வேறு எதையாவது கிளிக் செய்தால், இந்தத் திறப்பு செயல்பாடு நடக்காது,
        // அதனால் நீங்கள் கேட்டபடி 'ஆல்ரெடி ஓபன்ல இருக்கறது க்ளோஸ் ஆகிடணும்' செயல்பாடு நடக்கும்.
        if (!isCurrentlyActive) {
            content.classList.add('active');
        }
    });
});

/**
 * அனைத்து கேள்விகள்-பதில்கள் கொண்ட பகுதிகளையும் மூடும் செயல்பாடு.
 * இது வேறு தலைப்பைக் கிளிக் செய்யும்போதோ அல்லது திறந்த தலைப்பையே மீண்டும் கிளிக் செய்யும்போதோ பயன்படுத்தப்படுகிறது.
 */
function closeAllContents() {
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(content => {
        content.classList.remove('active');
    });
}