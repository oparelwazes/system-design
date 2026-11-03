
// Modal 1 & Nested Modal 2
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function saveAndLoad() {
    document.getElementById('modal2-spinner').style.display = 'flex';
    document.getElementById('btnSave').disabled = true;
    
    // Simulate API Call / Save Process
    setTimeout(() => {
        document.getElementById('modal2-spinner').style.display = 'none';
        document.getElementById('btnSave').disabled = false;
        closeModal('modal2');
        closeModal('modal1');
        alert('Data berhasil disimpan ke sistem.');
    }, 2000);
}

// Global Theme Configurator
document.getElementById('themeColorPicker').addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--ds-primary', e.target.value);
});
