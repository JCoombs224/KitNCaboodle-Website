
function showEarrings() {
    var script = document.createElement('earrings');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', '../scripts/js/shop/jewelry/earrings.js');
    document.body.appendChild(script);
}

$('#earrings-button').on('click', function () {
    $.getScript('../scripts/js/shop/jewelry/earrings.js', function (data, textStatus, jqxhr) {
        // do some stuff after script is loaded
    });
});

function showRings() {
    document.getElementById('all-jewelry-shop').style.visibility = 'hidden';
    document.getElementById('rings-shop').style.visibility = 'visible';
    document.getElementById('earrings-shop').style.visibility = 'hidden';
}