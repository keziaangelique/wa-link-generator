function buatLink() {
    let data = $("form").serializeArray();
    let nomorWhatsApp = data[0]["value"];
    let isiPesan = data[1]["value"];
    let link = "https://api.whatsapp.com/send?phone="
    link += nomorWhatsApp;
    isiPesan = isiPesan.split(" ");
    isiPesan = isiPesan.join("%20");
    isiPesan = isiPesan.split("\n")
    isiPesan = isiPesan.join("%0A")
    link += ("&text=" + isiPesan);
    document.getElementById("link").innerHTML = "<a class='card alert alert-success' href='" +
        link + "' target='_blank'>" + link + "</a>";
}

function validasi() {
    let nomorWhatsApp = document.getElementById("nomor").value;
    if (nomorWhatsApp === "") {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Please insert the recipient number.</div>";
    } else if (!(nomorWhatsApp.includes("+628"))) {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Sorry, the number is invalid! (must include +628).</div>";
    } else if (nomorWhatsApp.length < 12) {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Sorry, the number is invalid! (less than 10 digits).</div>";
    } else if (nomorWhatsApp.length > 15) {
        document.getElementById("link").innerHTML = "<div class='card alert alert-danger'>" +
            "Sorry, the number is invalid! (more than 13 digits).</div>";
    } else {
        buatLink();
    }
}

function hapus() {
    document.getElementById("nomor").value = "";
    document.getElementById("content").value = "";
}
