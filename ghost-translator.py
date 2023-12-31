#!/usr/bin/env python3
from sys import argv

def main():
    if len(argv) > 2:
        if argv[1] == "-e" or argv[1] == "--encode":
            encodeGhost(argv[2])
        elif argv[1] == "-d" or argv[1] == "--decode":
            decodeGhost(argv[2])
        else:
            printUsage()
    else:
        printUsage()

def printUsage():
    print("Usage:")
    print("\tghost-translator -d (or --decode) \"OoOooo OoO OOooO OoooooO\"'  : Decode ghost-speak")
    print("\tghost-translator -e (or --encode) \"Hello!\"                     : Encode ghost-speak")
    print("\nExample:\n\tghost-translator -e \"Waddup!\"")

def encodeGhost(humanSpeak):
    ghostSpeak = ""

    for i in range(len(humanSpeak)):
        strBinary = bin(ord(humanSpeak[i])^96)[2:]

        for j in range(len(strBinary)):
            if strBinary[j] == "1":
                ghostSpeak += "O"
            else:
                ghostSpeak += "o"
        
        if i != len(humanSpeak):
            ghostSpeak += " "

    print(ghostSpeak)

def decodeGhost(strGhost):
    humanSpeak = ""

    ghostWords = strGhost.split()
    for i in range(len(ghostWords)):
        strBinary = ""
       
        for j in range(len(ghostWords[i])):
            if ghostWords[i][j] == "O":
                strBinary += "1"
            elif ghostWords[i][j] == "o":
                strBinary += "0"
            else:
                print(f"This ghost must have a speech impediment :(\n(Unexpected character in input: \"{ghostWords[i][j]}\")")
                exit()
            
        humanSpeak += str(chr(int(strBinary, 2)^96))

    print(humanSpeak)

main()
