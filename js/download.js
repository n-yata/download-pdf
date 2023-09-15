function winOpen() {
  fetchPdf();
  // window.open("about:blank", "_self").close();
  // win.close();
  // let child = window.open( "" , "_blank");
  // child.close();
}

function fetchPdf() {
  let filePath = "assets/sample.pdf"; // ファイルへのパス
  let downloadFileName = "filename.pdf"; // ダウンロード時のファイル名
  let downloadLinkText = "Download PDF"; // ダウンロードリンクのテキスト

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
    })
    .catch((error) => console.error("Download failed:", error));
}
