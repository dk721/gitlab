document.getElementById('loadFileBtn').addEventListener('click', function() {
    document.getElementById('hiddenFileInput').click();
});

document.getElementById('hiddenFileInput').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    
    reader.onload = function() {
        document.getElementById('fileContent').value = reader.result;
    }
    
    if (file) {
        reader.readAsText(file);
    }
});

document.getElementById('saveFileBtn').addEventListener('click', function() {
    const fileContent = document.getElementById('fileContent').value;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited_file.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
});

