import pyautogui as gui

pos = gui.position()
print(gui.pixel(pos.x, pos.y))