const title_el = document.getElementById('title');
title_el.innerText = api.title; 
const note_title_el = document.getElementById('noteT');
const note_content_el= document.getElementById('noteC');
const note_submit_el  = document.getElementById('noteS');
const newTab = document.getElementById("newTab");
const element = document.getElementById("error");
function isInteger(input) {
    return /^\d+$/.test(input);
  }
newTab.addEventListener('click', async () =>{
    window.open('https://console.twilio.com/us1/develop/phone-numbers/manage/incoming','_blank');

})
note_submit_el.addEventListener('click', async () =>{
    let content = note_content_el.value;
    if(!isInteger(content))
    {
        function test()
        {
            element.innerHTML = "Please Enter Valid Phone Number";
             note_submit_el.addEventListener('click', async () =>
            {  
                 if(isInteger(content2))
                {
                    return content2;
                }
                console.log("no");
                test();
            })
        }
        content = test();
    }
    if(isInteger(content))
    {element.innerHTML = "";}
    const res = await api.createNote({
        content
    })
    console.log(res);
    note_content_el.value = "";
})