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
  API_URL: "https://script.google.com/macros/s/AKfycbxFaBKKwkxei3-2BZ4-DKh4vwlROqZVRDrTNVDbWlMa4novRL4FLR2ulFBVwwMx0YtmfQ/exec",

  /* 2) Alamat halaman rapor. Harus sama dengan RAPOR_BASE di watzap.gs */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-Gigi-Anak/?id=",

  /* 2b) Kunci akses. HARUS sama persis dengan ACCESS_KEY di Code.gs.
        Kalau diubah di Code.gs, ubah juga di sini. */
  ACCESS_KEY: "5698d533-1f90-4d76-bd1f-555ea054c324",

  /* 3) Gambar di halaman rapor pasien (nama file di repo ini) */
  GAMBAR_JUDUL: "Judul Rapor Gigi.png",
  GAMBAR_GIGI:  "Gambar Rapor Gigi.png",

  /* 4) Peta gigi berwarna. false = hanya gambar di atas yang tampil */
  PETA_WARNA: false,

  /* 5) Nomor WhatsApp CRO untuk tombol "Tanya klinik" di halaman rapor.
        Kosongkan ("") kalau tombolnya tidak dipakai. */
  WA_CRO: "",

  /* 5b) TEMPLATE PESAN WHATSAPP (dikirim MANUAL oleh CRO dari cari.html)
         Isinya mengikuti watzap.gs. Aturan: First Dental Visit & Field Trip
         pakai PESAN_WA (ada promo); IBK pakai PESAN_WA_IBK (tanpa promo).
         Placeholder: {nama} {cabang} {tgl} {dokter} {link} {promo} */

  /* Link promo — dipakai untuk mengganti {promo} */
  PROMO_URL: "https://mhdc.co.id/wp-content/uploads/Promo-Diskon-Rapor-Gigi-Anak.pdf",

  /* Pesan DENGAN promo (First Dental Visit & Field Trip) */
  PESAN_WA:
`Hai Parents, orang tua dari {nama} 👋, 
terima kasih sudah berkunjung ke {cabang} pada {tgl}! 🦷✨ 

Ini Rapor Gigi {nama}. Silahkan buka link berikut untuk melihat hasil pemeriksaan lengkapnya :

{link}

✨Klaim *PROMO SPESIAL RAPOR GIGI*, klik link ini ⬇
{promo}

Jika ada yang ingin ditanyakan atau butuh bantuan lebih lanjut, Parents bisa langsung balas pesan ini ya. Kami siap membantu! 🥰

Salam sehat dan senyum ceria,
Tim Medikids`,

  /* Pesan TANPA promo (IBK) */
  PESAN_WA_IBK:
`Hai Parents, orang tua dari {nama} 👋, 
terima kasih sudah berkunjung ke {cabang} pada {tgl}! 🦷✨ 

Ini Rapor Gigi {nama}. Silahkan buka link berikut untuk melihat hasil pemeriksaan lengkapnya :

{link}

Jika ada yang ingin ditanyakan atau butuh bantuan lebih lanjut, Parents bisa langsung balas pesan ini ya. Kami siap membantu! 🥰

Salam sehat dan senyum ceria,
Tim Medikids`,

  /* 6) Link video edukasi di halaman rapor (opsional) */
  VIDEO: {
    tambal:  "",
    cabut:   "",
    akar:    "",
    karang:  "",
    susunan: ""
  }
};
