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

  /* 5b) TEMPLATE PESAN WHATSAPP (dikirim MANUAL oleh CRO dari halaman cari.html)
         Ganti isi promo di sini saja. Placeholder yang bisa dipakai:
           {nama}   -> nama pasien
           {tgl}    -> tanggal periksa (contoh: 12 September 2026)
           {cabang} -> nama cabang
           {dokter} -> nama dokter
           {link}   -> link rapor gigi
         Baris kosong = jarak antar paragraf. Emoji boleh. */
  PESAN_WA:
`Halo Ayah/Bunda 😊

Terima kasih sudah merawat gigi si kecil di Medikids {cabang}. Berikut Rapor Gigi *{nama}* dari pemeriksaan tanggal {tgl}:

{link}

Rapornya bisa dibuka kapan aja ya, Bun 🦷✨

━━━━━━━━━━━━
🎁 *PROMO BULAN INI*
[ tulis detail promo di sini — mis. diskon scaling / fluoride / gratis kontrol berikutnya ]
Info & booking bisa langsung balas chat ini ya 🙌
━━━━━━━━━━━━

Sampai jumpa di kunjungan berikutnya!
— Medikids`,

  /* 6) Link video edukasi di halaman rapor (opsional) */
  VIDEO: {
    tambal:  "",
    cabut:   "",
    akar:    "",
    karang:  "",
    susunan: ""
  }
};
