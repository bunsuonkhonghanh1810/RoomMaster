document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

document.addEventListener('DOMContentLoaded', function() {
    var arrows = document.querySelectorAll('.menu > li');

    arrows.forEach(function(arrow) {
        arrow.addEventListener('click', function(e) {
            e.target.classList.toggle('active');
        });
    });
});
