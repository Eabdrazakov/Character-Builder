window.onload = function () {
    let form = document.getElementById("Character");
    form.onsubmit = function (text) {
        const charName = document.getElementById("charName").value;
        const className = document.getElementById("charclass").value;
        const alingment = document.getElementById("charalingment").value;

        document.querySelector("span#person").innerText = charName;
        document.querySelector("span#person1").innerText = className;
        document.querySelector("span#person2").innerText = alingment;

        document.querySelector("div#charResult").removeAttribute("class");

        event.preventDefault();
    };
};