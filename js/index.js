"use strict";
function Selector(tag) {
    return document.querySelector(tag);
}

var check = false;

Selector("#love-btn").onclick = e => {
    e.preventDefault();
    var your_name = Selector("#your_name").value.trim();
    var your_crash = Selector("#your_crash").value.trim();
    var love_div = Selector(".love");
    if (your_name && your_crash) {
        var json_data = {
            your_name: your_name,
            crash_name: your_crash
        };
        var love = [
            "5%",
            "10%",
            "15%",
            "20%",
            "30%",
            "25%",
            "30%",
            "35%",
            "40%",
            "45%",
            "50%",
            "55%",
            "60%",
            "65%",
            "70%",
            "75%",
            "80%",
            "85%",
            "90%",
            "95%",
            "100%"
        ];
        var parsent = Math.floor(Math.random() * love.length);
        Selector(".love-form").style.display = "none";
        love_div.style.display = "block";
        var form = new FormData()
        form.append("crash_name", your_crash);
        form.append("your_name", your_name);
        form.append("love", love[parsent]);
        fetch("http://localhost:8080/server/config.php", {
            method: "POST",
            body: form
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            });
        love_div.innerHTML = `
         <img src="images/heart.png" />
         <h2 id="parsent">${love[parsent]}</h2>
         <h2 id="title">Congratulations</h2>
         <strong id="name"
                ><span id="love">${your_name}</span> And
         <span id="love">${your_crash}'s</span> Love Is ${love[parsent]} True</strong></br></br>
          <a href="/" id="again">Check Again</a>
        `;
        Selector("#your_name").value = "";
        Selector("#your_crash").value = "";
        check = true;
    }
};

if (check) {
    Selector("#again").onclick = () => {
        Selector(".love-form").style.display = "block";
    };
}
