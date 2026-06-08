const brochureData = {
  "crm-solutions": {
    title: "Brosur Solusi CRM 2026",
    description:
      "Detail lengkap fitur dan paket layanan Customer Relationship Management kami.",
    image: "assets/digital.webp", // Ganti dengan path image brosur Anda
  },
  "erp-solutions": {
    title: "Brosur Solusi iERP",
    description:
      "Optimalkan sumber daya perusahaan Anda dengan sistem ERP terintegrasi.",
    image: "assets/sales.jpg",
  },
  "mobile-dev": {
    title: "Brosur Pengembangan Mobile App",
    description: "Layanan pembuatan aplikasi Android & iOS profesional.",
    image: "assets/mobileapp.png",
  },
};

// Ambil ID dari URL (?id=...)
const params = new URLSearchParams(window.location.search);
const brochureId = params.get("id");

const data = brochureData[brochureId];

if (data) {
  // Update konten
  document.getElementById("brochureTitle").textContent = data.title;
  document.getElementById("brochureDesc").textContent = data.description;

  const imgElement = document.getElementById("brochureImage");
  imgElement.src = data.image;
  imgElement.alt = data.title;

  // Update link download
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.href = data.image;

  document.title = data.title + " | i-Eyes Brochure";
} else {
  document.getElementById("brochureTitle").textContent =
    "Brosur Tidak Ditemukan";
  document.getElementById("brochureDesc").textContent =
    "Maaf, brosur yang Anda cari tidak tersedia.";
  document.getElementById("downloadBtn").style.display = "none";
}
