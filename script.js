const btnGerar = document.getElementById('btnGerar');
const btnSalvar = document.getElementById('btnSalvar');
const qrContainer = document.getElementById('qrcode');

btnGerar.addEventListener('click', () => {
  const texto = document.getElementById('text').value.trim();
  if (!texto) {
    alert('Por favor, digite um texto ou URL válido.');
    return;
  }

  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: texto,
    width: 220,
    height: 220,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  btnSalvar.disabled = false; // habilita botão salvar após gerar QR
});

btnSalvar.addEventListener('click', () => {
  // Busca o canvas dentro do container do QR
  const canvas = qrContainer.querySelector('canvas');
  if (!canvas) {
    alert('QR Code não encontrado para salvar.');
    return;
  }

  // Converte canvas para data URL jpeg
  const dataURL = canvas.toDataURL('image/jpeg', 1.0);

  // Cria link temporário para download
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'qrcode.jpeg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

