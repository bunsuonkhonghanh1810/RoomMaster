function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => document.getElementById('main-content').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.hasAttribute('data-content')) {
            e.preventDefault();   
            const page = e.target.getAttribute('data-content');
            loadContent(page);  
        }
    });
});