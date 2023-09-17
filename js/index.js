const filePath = "assets/sample.pdf"; // ファイルへのパス
const downloadFileName = "filename.pdf"; // ダウンロード時のファイル名
const downloadLinkText = "Download PDF"; // ダウンロードリンクのテキスト

/**
 * 遷移なし アラートなし
 */
function runNoAlartDownload() {
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

  /**
 * 遷移なし アラートあり
 */
function runDownload() {
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

      alert("ダウンロードが完了しました。");
    })
    .catch((error) => console.error("Download failed:", error));
}

/**
 * 遷移あり アラートなし
 */
function goNoAlartDownloadPage() {
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = "download_no_alart.html";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * 遷移あり アラートあり
 */
function goDownloadPage() {
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = "download.html";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
