let text = document.getElementById('text');
button = document.querySelectorAll('button');
let textdef = '';
for (item of button) {
    item.addEventListener('click', (e) => {
        TargetText = e.target.innerText;
        console.log(' ', TargetText);
        if (TargetText == 'x') {
            TargetText = '*';
            textdef += TargetText;
            text.value = textdef;
        }
        else if (TargetText == 'C') {
            textdef = "";
            text.value = textdef;
        }
        else if (TargetText == '=') {
            text.value = eval(textdef);
        }
        else {
            textdef += TargetText;
            text.value = textdef;
        }

    })
}