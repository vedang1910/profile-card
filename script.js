document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('read-more-btn');
    const moreInfo = document.getElementById('more-info');
    
    btn.addEventListener('click', () => {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            btn.textContent = 'Read Less';
        } else {
            moreInfo.classList.add('hidden');
            btn.textContent = 'Read More';
        }
    });
});
