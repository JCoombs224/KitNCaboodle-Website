function delay() {
    setTimeout(function () {
        checkSize();
    }, 3000);
}

if (document.readyState == 'complete') {
    delay();
} else {
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            delay();
        }
    }
}

function checkSize() {
    $(document).ready(function () {
        if ($('#shopify-collection').height() < 20) {
            document.getElementById('shopify-collection').innerHTML += "<p>There are no products on sale matching this criteria.</p>";
        }
    });
}