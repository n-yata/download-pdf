
function goDownloadPage(){
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = "download.html";
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}