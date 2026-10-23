const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', (event) => { 
    const Trim = event.target.value.trim();
    if (Trim === '') {
        output.textContent = 'Anonymous';
    } else { 
        output.textContent = Trim;
    }
});  