import random
from tkinter import *
import string

window = Tk()
window.geometry("600x400")
window.title("Password Generator")
Label(window, text = "Generate a password ", font =('Verdana', 15)).pack(side = TOP, pady=40)

#Store value before clearing window
var = IntVar()
alphabet_list = 0

pw = []
new_password = 0
duration = 0

#Grouping radio buttons
radioGroup = LabelFrame(window, text = "Select strength")
radioGroup.pack()

def char_range():
    """
    Setting radio values
    """
    global alphabet_list

    if var.get() == 1:
        alphabet_list = list(string.ascii_letters)
    elif var.get() == 2:
        alphabet_list = list(string.ascii_letters+string.digits)    
    else:
        alphabet_list = list(string.ascii_letters+string.punctuation+string.digits)  

alpha = Radiobutton(radioGroup, text = "Alphabet (okay)", variable = var, value = 1, command = lambda: char_range()).pack(anchor=W, padx = 5, pady = 5)
alphanum = Radiobutton(radioGroup, text = "Alphanumeric (safer)", variable = var, value = 2, command = lambda: char_range()).pack(anchor=W, padx = 5, pady = 5)
alphanum_punct = Radiobutton(radioGroup, text = "Alphanumeric + punctuation (safest)", variable = var, value = 3, command = lambda: char_range()).pack(anchor=W, padx = 5, pady = 5)
Label(window, text = "Select your password length: ").pack(padx = 10, pady = 10)

#Store value before clearing window
pw_length = IntVar()
pw_length.set("")
pw_input = Entry(window, text = "", textvariable=pw_length)
pw_input.pack(padx = 5, pady = 5)

generate = Button(window, text = "Generate password!", command = lambda: callback_destroy(generate))
generate.pack(padx = 10, pady = 10)

def callback_destroy(btn):
    """
    User input error handeling
    """    
    try:
        alphabet_list != 0 or int(pw_length.get())
    except:    
        error_msg = Label(window, text = f"Invalid input")
        error_msg.pack(padx = 2, pady = 2)
        window.after(3000, lambda: error_msg.pack_forget())     
    else:
        for widgets in window.winfo_children():
            widgets.destroy()
        crack_time()
        password(pw_length.get())

def password (arg):
    global pw
    global new_password

    for number in range(arg):
        char = random.choice(alphabet_list)
        pw.append(char)
        new_password = "".join(pw)
    
    Label(window, text = f"\n Your new password:\n").pack(padx = 10, pady = 10)
    Label(window, text = f"\n {new_password} \n", font =('Verdana', 20)).pack(padx = 10, pady = 10)
    Label(window, text = f"\n Brute-force attacks will take {duration} minutes* to crack this password \n", font =('Verdana', 10)).pack(padx = 10, pady = 10)
    Label(window, text = f"\n *Core efficiencies are not taken into consideration, \n calculated speed 17042497kps \n", font =('Verdana', 5)).pack(padx = 10, pady = 10)

def crack_time():
    """
    Calculating time to crack the password
    """
    global duration

    k = pw_length.get()
    n = len(alphabet_list)
    duration = int((((n**k)/17042497)/60))

mainloop()