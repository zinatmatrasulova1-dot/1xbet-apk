function downloadApp() {
  const a = document.createElement('a');
  a.href = '1xbet.apk';
  a.download = '1xbet.apk';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
