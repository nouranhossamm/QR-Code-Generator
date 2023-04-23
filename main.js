function genQR() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var img = document.getElementById("img");
    var text = document.getElementById("qrtext").value;
    var size = document.getElementById("size").value;
    if (text !== "" && size == "100") {
        img.src = gapi + "100x100" + "&chl=" + text;
        // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
    } else if (text !== "" && size == "150") {
        img.src = gapi + "150x150" + "&chl=" + text;
        // https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=hello
    } else if (text !== "" && size == "200") {
        img.src = gapi + "200x200" + "&chl=" + text;
        // https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=hello
    } else if (text !== "" && size == "250") {
        img.src = gapi + "250x250" + "&chl=" + text;
        // https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=hello
    } else if (text !== "" && size == "300") {
        img.src = gapi + "300x300" + "&chl=" + text;
        // https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=hello
    } else {
        alert("Please enter a text");
    }
}
