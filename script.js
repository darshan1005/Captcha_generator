window.addEventListener('load', function () {
    let captchaText = document.querySelector('.container .captcha_box .captcha');
    let userInput = document.querySelector('.container .user-input');
    let checkbtn = document.querySelector('.check_bnt');
    let generatebtn = document.querySelector('.generate_btn');
    let container = document.querySelector('.container');
    let Message = document.querySelector('.container .message');

    let captchaCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let generateCaptcha = () => {
        captchaText.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let captcha = captchaCharacters[Math.floor(Math.random() * captchaCharacters.length)];
            captchaText.innerHTML += ' ' + captcha;
        }
        userInput.value = '';
        Message.style.display = 'none';
        container.classList.remove('active');
    };

    let check = () => {
        let userAns = userInput.value;
        let captcha = captchaText.innerHTML;
        if (userAns.replaceAll(' ', '') == captcha.replaceAll(' ', '')) {
            container.classList.add('active');
            Message.style.display = 'block';
            Message.innerHTML = '<i class="fa-solid fa-circle-check"></i> captcha matched, You are not a <b>ROBOT</b>';
            Message.classList.remove('incorrect');
            Message.classList.add('correct');
        } else {
            container.classList.add('active');
            Message.style.display = 'block';
            Message.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> captcha not matched, pls try again';
            Message.classList.remove('correct');
            Message.classList.add('incorrect');
        }
    };

    generateCaptcha();
    generatebtn.addEventListener('click', generateCaptcha);
    checkbtn.addEventListener('click', () => {
        if (userInput.value != '') {
            check();
        } else {
            alert("Pls enter the captcha!");
        }
    });
});
