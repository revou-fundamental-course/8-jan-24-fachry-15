// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        // Toggle nav list and burger class
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

function hitungLuas() {
    var sisi = document.getElementById('sisiLuas').value;
    var luas = sisi * sisi;
    document.getElementById('luasResult').innerHTML = luas + ' Cm';
}

function hitungKeliling() {
    var sisi = document.getElementById('sisiKeliling').value;
    var keliling = 4 * sisi;
    document.getElementById('kelilingResult').innerHTML = keliling + ' Cm';
}

