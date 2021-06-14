import random
from time import *
from tkinter import *
from tkinter.ttk import *

root = Tk()
root.title("Paper, Rock, Scissor")
root.geometry("640x500")
Label(root, text = "What is your name?", font =('Verdana', 15)).pack(side = TOP, pady=50) 
moves = ("Paper","Rock","Scissor")

#Store player name before clearing window
player = StringVar()
player_name = Entry(root, textvariable=player)
player_name.pack(side = TOP, pady=50)

#Storing game values
player_input = 0
player_pts = 0
computer_pts = 0
computer_input = 0

#Play buttons
play_btn = Button(root, text = "Play!", command = lambda: callback_and_hide(play_btn))
play_btn.pack()
paper_img = PhotoImage(file = "Mini Projects/paper.png")
rock_img = PhotoImage(file = "Mini Projects/rock.png")
scissor_img = PhotoImage(file = "Mini Projects/scissor.png")



def callback_and_hide(play_btn):
    """ 
    Clearing the window for move buttons

    """
    for widgets in root.winfo_children():
        widgets.destroy()
    choice_buttons()

def clear_frame():
    """ 
    Clearing the window

    """
    for widgets in root.winfo_children():
        widgets.destroy()

def player_paper():
    global player_input
    global computer_input

    player_input = "Paper"
    computer_input = random.choice(moves)
    game(player_input,computer_input)

def player_rock():
    global player_input
    global computer_input

    player_input = "Rock"
    computer_input = random.choice(moves)
    game(player_input,computer_input)

def player_scissor():
    global player_input
    global computer_input

    player_input = "Scissor"
    computer_input = random.choice(moves)
    game(player_input,computer_input)

def choice_buttons():
    global paper_btn
    global rock_btn
    global scissor_btn

    Label(root, text = "Pick your move", font =('Verdana', 15)).pack()
    paper_btn = Button(root, image = paper_img, command =lambda: [clear_frame(),player_paper()]).pack(side = LEFT, padx = 20, pady = 15)
    rock_btn = Button(root, image = rock_img, command =lambda: [clear_frame(),player_rock()]).pack(side = LEFT, padx = 20, pady = 20)
    scissor_btn = Button(root, image = scissor_img, command =lambda: [clear_frame(),player_scissor()]).pack(side = LEFT, padx = 20, pady = 25)

def game(player_input,computer_input):
    global player_pts
    global computer_pts
    
    if(player_input=="Paper" and computer_input=="Rock") or (player_input=="Rock" and computer_input=="Scissor") or (player_input=="Scissor" and computer_input=="Paper"):
        player_pts += 1
        Label(root, text = f"You win! {player_input} beats {computer_input}.").place(x=240, y=70)
    elif(player_input=="Paper" and computer_input=="Scissor") or (player_input=="Rock" and computer_input=="Paper")or (player_input=="Scissor" and computer_input=="Rock"):    
        computer_pts += 1
        Label(root, text = f"You lose! {computer_input} beats {player_input}.").place(x=240, y=70)
    else: Label(root, text = "It's a tie!").place(x=300, y=70)

    new_game()
    

def new_game():

    """ 
    Replay loop

    """
    global play
    global yes_btn
    global no_btn

    Label(root, text=f"\n{player.get()}: {player_pts}, Computer: {computer_pts}\n").place(x=260, y=100)
    continue_game = Label(root, text = "Continue playing?", font =('Verdana', 15))
    continue_game.place(relx=.5, rely=.4, anchor="c")
    yes_btn = Button(root, text = "Yes", command = lambda: [clear_frame(),choice_buttons()])
    no_btn = Button(root, text = "No", command = lambda: [clear_frame(),finish()])
    yes_btn.place(relx=.43, rely=.5, anchor="c")
    no_btn.place(relx=.56, rely=.5, anchor="c")

def finish():
    Label(root, text=f"\n Thank you for playing! \n", font =('Verdana', 20)).pack(side = TOP, padx = 52, pady = 55)    

mainloop()

