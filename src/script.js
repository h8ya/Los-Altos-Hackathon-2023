const title_el = document.getElementById('title');
title_el.innerText = api.title;
const messa = document.getElementById("me");
let count = 0;
//const pNum = document.getElementById('phoneN');
const err = document.getElementById('er');
const ipVal = document.getElementById('msg');
const blank = document.getElementById('blank');
const twilio = document.getElementById('twilioNum');
const note_submit_el = document.getElementById('noteS');
const authTok = document.getElementById('authToken');
const accsid = document.getElementById('accountSid');
const accsid_butt = document.getElementById('accButt');
const newTab = document.getElementById('newTab');
const element = document.getElementById("error");

// Get the user's external IP address

// Get the user's external IP address


function isInteger(input) {
  return /^\d+$/.test(input);
}

// newTab.addEventListener("click", async () => {
//   window.open('https://console.twilio.com/us1/develop/phone-numbers/manage/incoming', '_blank');
// })

note_submit_el.addEventListener("click", async () => {
  let sid = accsid.value;
  let auth = authTok.value;
  let tw = twilio.value;
  let mes = messa.value;
  let twilioNum = "";
  if (count==0&&((sid === "") || (auth === "") || (tw === "") || (mes === ""))) {
    if(isInteger(tw)){err.innerHTML=""}
    blank.innerHTML = "Please Fill in all fields before submitting";
    return;
  }
  if(!isInteger(tw)&&tw!="")
  {
    if (!isInteger(tw)) { err.innerHTML = "Please Enter only numbers"; }
    return;
  }
  if(isInteger(tw))
  {
    err.innerHTML = "";
  }
  if((sid !== "") && (auth !== "") && (tw !== "") && (mes !== ""))
  {
    blank.innerHTML = "";
  }
  count++;
  const res = await api.createNote({
    sid,
    auth,
    tw,
    mes
  })
  console.log(res + " The Currnet Count: " + count);
  accsid.value = "";
  authTok.value = "";
  twilio.value = "";
  messa.value = "";
})

