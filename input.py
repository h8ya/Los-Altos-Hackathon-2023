import keyboard, subprocess

print("running")
number = ""
dict = {"!":"1", "@":"2", "#":"3", "$":"4", "%":"5", "^":"6", "&":"7", "*":"8", "(":"9", ")":"0"}

while True:
    if keyboard.is_pressed("alt"):
        if keyboard.is_pressed("shift"):
            event = keyboard.read_event()
            if event.event_type == keyboard.KEY_UP:
                if event.name == "C":
                    break
                elif event.name == "enter":
                    # call
                    # print("call", number)
                    with open('.env', 'r') as file:
                        data = file.readlines()

                    for line in range(len(data)):
                        if "targetNumber=" in data[line]:
                            data[line] = ("targetNumber=+" + number)
                            break

                    with open('.env', 'w') as file:
                        file.writelines(data)
                    subprocess.call(["node", "index.js"])
                    file.close()

                elif event.name == "backspace":
                    number = number[:-1]
                    # print(number)
                else:
                    try:
                        number += dict[event.name]
                        # print(number)
                    except:
                        pass
        else:
            number = ""
    else:
        number = ""
