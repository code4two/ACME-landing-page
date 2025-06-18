const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const dropdown = document.getElementById('dropdownMenu');

openBtn.addEventListener('click', () =>{
    dropdown.style.display = 'block';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
    dropdown.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});  
