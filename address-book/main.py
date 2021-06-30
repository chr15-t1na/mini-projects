from tkinter import *

window = Tk()
window.geometry("500x600")

Label(window, text = "Address Book", font =('Verdana', 20)).pack(side = TOP, pady=40)

basicGroup = LabelFrame(window, text = "Basic Information")
basicGroup.pack()

traitsGroup = LabelFrame(window, text = "Personal Traits")
traitsGroup.pack()

mainloop()