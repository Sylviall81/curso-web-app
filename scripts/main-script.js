



function loadFooter(){

    const footerContainer = document.getElementById('footer');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../components/footer.html', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            footerContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();

}


window.onload = function() {
    loadFooter();
};