var small_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var cap_alpha = 'abcdefghijklmnopqrstuvwxyz'
var nums = '1234567890'
var symbols = '~`!@#$%^&*()-=_+{}|[]:;<>,./?'

function generator(length) {
    let pass = ''
    document.getElementById('disp-num').innerText = length
    document.getElementById('bar').nodeValue = length
    for (let i = 1; i <= length; i++) {
        choice = Math.floor((Math.random() * 4) + 1)
        switch (choice) {
            case 1:
                pass += small_alpha.charAt(Math.floor((Math.random() * small_alpha.length) + 1))
                break
            case 2:
                pass += cap_alpha.charAt(Math.floor((Math.random() * cap_alpha.length) + 1))
                break
            case 3:
                pass += nums.charAt(Math.floor((Math.random() * nums.length) + 1))
                break
            case 4:
                pass += symbols.charAt(Math.floor((Math.random() * symbols.length) + 1))
                break
        }
        document.getElementById('display').innerText = pass
    }
}

// function copy(){
//     let text = document.getElementById('display')
//     navigator.clipboard.writeText(text.innerText)
// }

function copy() {
    let text = document.getElementById('display').innerText;
    
    // Create a temporary input element
    const input = document.createElement('input');
    input.value = text;
    
    // Append the input element to the document
    document.body.appendChild(input);
    
    // Select the text in the input
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    
    // Prompt the user to copy the text
    document.execCommand('copy');
    
    // Remove the temporary input element
    document.body.removeChild(input);
  }
  