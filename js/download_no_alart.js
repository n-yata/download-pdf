const filePath = "assets/sample.pdf"; // ファイルへのパス
const downloadFileName = "filename.pdf"; // ダウンロード時のファイル名
const downloadLinkText = "Download PDF"; // ダウンロードリンクのテキスト

fetch(filePath)
  .then((response) => response.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = downloadFileName;
    a.textContent = downloadLinkText;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    window.open("about:blank", "_self").close();
  })
  .catch((error) => console.error("Download failed:", error));