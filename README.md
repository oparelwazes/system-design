# Universal Design System (Salesforce LWC & Web Native)

Sistem desain yang ringkas, modular, dan dibangun sepenuhnya dengan **CSS Custom Properties (Variables)**. Cocok digunakan sebagai fondasi untuk proyek Web Native (React, Vue, HTML Polos) maupun Salesforce Lightning Web Components (LWC).

## Fitur Utama
- **Themeable:** Mengubah warna utama aplikasi semudah mengubah 1 baris kode.
- **LWC Compatible:** Variabel CSS menembus *Shadow DOM*, mempermudah *styling* komponen LWC dari level *Community/App*.
- **Modular:** CSS dipecah berdasarkan komponen (Tombol, Modal, List, Kanban) untuk ukuran *bundle* yang ringan.

## Struktur Repositori
- `/css` -> Kumpulan file *stylesheet*.
- `/js` -> Logika dasar untuk *trigger* modal dan status *loading* di web native.
- `index.html` -> Showcase interaktif seluruh komponen.

## Panduan Modifikasi Warna (Inline Override)
Sistem ini menggunakan `--ds-primary` sebagai variabel inti. Anda dapat mengubah warna secara global dari `css/theme.css`, atau menimpanya secara spesifik pada kontainer tertentu menggunakan *inline style*.

**Contoh: Membuat List Record khusus dengan warna Aksen Berbeda**

Jika Anda membutuhkan satu buah daftar record atau *modal* yang memiliki tema khusus (misalnya merah untuk peringatan/danger zone), gunakan ini pada *parent element*-nya:

```html
<div class="ds-modal-content" style="--ds-primary: #de350b;">
    <div class="ds-modal-header">Daftar Record Kritis</div>
    <div class="ds-modal-body">
        <ul class="ds-record-list">
            <!-- List item, teks hover, dan tombol di dalam kontainer ini otomatis merender warna merah -->
            <li class="ds-record-item">...</li>
        </ul>
    </div>
</div>
```
Prinsip pewarisan variabel CSS memastikan bagian aplikasi lainnya tidak akan terdampak oleh perubahan ini.
