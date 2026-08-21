/* =====================================================================
   config.js — SATU-SATUNYA tempat mengubah pengaturan
   ---------------------------------------------------------------------
   Dipakai bersama oleh index.html, input.html, dan cari.html.
   Kalau URL Apps Script berubah, cukup ganti di SINI saja.
   File HTML tidak perlu disentuh lagi.
   ===================================================================== */

window.MHDC_CONFIG = {

  /* ------------------------------------------------------------------
     1) URL Web App Apps Script
     Cara mendapatkan yang benar:
     Apps Script > Deploy > Manage deployments > lihat deployment yang
     Active > salin "Web app URL"
     ------------------------------------------------------------------ */
  API_URL: "https://script.google.com/macros/s/AKfycbzJ043Mfmi_bRxQvYbMvSCIs8blryDwV9OPhZVBZ23J7yaROXWb04BAe8J3pWTJjeUv2Q/exec",

  /* 2) Alamat halaman rapor. Harus sama dengan RAPOR_BASE di watzap.gs */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-Gigi-Anak/?id=",

  /* 3) Gambar di halaman rapor pasien (nama file di repo ini) */
  GAMBAR_JUDUL: "Judul Rapor Gigi.png",
  GAMBAR_GIGI:  "Gambar Rapor Gigi.png",

  /* 4) Peta gigi berwarna. false = hanya gambar di atas yang tampil */
  PETA_WARNA: false,

  /* 5) Nomor WhatsApp CRO untuk tombol "Tanya klinik" di halaman rapor.
        Kosongkan ("") kalau tombolnya tidak dipakai. */
  WA_CRO: "",

  /* 6) Link video edukasi di halaman rapor (opsional) */
  VIDEO: {
    tambal:  "",
    cabut:   "",
    akar:    "",
    karang:  "",
    susunan: ""
  }
};
