
function loadImade (id, targetID) {
    var el = document.getElementById(id);
    var targetEl = targetID ? document.getElementById(targetID) : el;
    var imageToLoad;

    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imagetTOLoad = el.scroll;
    } else {
        imageToLoad = currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function() {
            targetEl.classList.add('is-loaded');
        }
    }

}


document.addEventListener('DOMContentLoaded', function() { 
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});
