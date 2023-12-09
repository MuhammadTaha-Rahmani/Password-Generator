// Password Generator
const btn = document.querySelector("#button");
const btn2 = document.querySelector("#clipboard");
// get charset from client by dataset.charset
let charset;
document.querySelectorAll(".charset").forEach((input) => {
    input.onclick = () => {
        charset = input.dataset.charset;
    };
});
// button click event
btn.addEventListener("click", () => {
    // check that if charset equal to undefined or not
    if (charset === undefined) {
        alert("click button");
    } else {
        let length = Number(document.getElementById("inp").value),
            show = document.querySelector("input"),
            pass = "";
        // check that lenght is empty or not and lower than 26
        if (length <= 25 && length > 0) {
            for (let i = 0; i < length; i++) {
                pass += charset.charAt(
                    Math.floor(Math.random() * charset.length)
                );
            }
            show.value = pass;
            // copy to client clipboard by using navigator
            btn2.onclick = () => {
                navigator.clipboard.writeText(pass);
            };
        } else {
            alert("lenght moust be lower than 26");
        }
    }
});
