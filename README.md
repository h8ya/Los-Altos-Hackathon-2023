# Los-Altos-Hackathon-2023

## How To Use
Install Nodejs & Python 

https://nodejs.org/en/download

https://www.python.org/downloads/

NPM MODULES USED:

npm install dotenv

npm install twilio

npm install external-ip

npm install electron --save-dev


START: https://www.twilio.com/try-twilio 

NAVIGATION 

Follow Step One after signup

Navigate to https://console.twilio.com/

Scroll down to find the account SID and auth token and add into .env

Get TWILIO Phone number right under auth token and SID go to index.js

Add the Target User you want to call & have them verify themself with Add Target Phone Number if your phone number is already there, you can skip this step. 

Deploy Application

https://www.twilio.com/code-exchange/basic-voice-auto-response

Go to live application copy the Webhook URL

https://www.twilio.com/console/phone-numbers/incoming

Scroll to bottom, edit the “A MESSAGE COMES IN”  box with the link and paste in the Webhook URL & Save

PAYMENT SECTION: Navigate to upgrade acc with promo code or add balance Input ADDRESS then either 
https://console.twilio.com/us1/billing/manage-billing/upgrade?frameUrl=%2Fconsole%2Fbilling%2Fupgrade%3Fx-target-region%3Dus1

ADD BALANCE

or input

PROMO CODE

USAGE GUIDE:

run exe file = will open up interface & keyboard detection program running in the background.

alt + shift + 11231231234 + enter = to call Target Number. Target Number in this example is 11231231234.

Closes interface window with the red x button in the top right. Closing interface does not close the keyboard detection program

alt + shift + w = close keyboard detection program



Inputting Invalid Number will not do anything, and will allow user to re-enter a valid number. 

