# ghost-translator 👻

Translate human-speak to ghost-speak and vice versa.

# Installation
* Install [Python](https://www.python.org/).
* Clone this repository, or just download `ghost-translator`.
* Mark `ghost-translator` as executable with `chmod +x ghost-translator` to run it directly, or run it with `python3`

# Usage
* `ghost-translator -d (or --decode) "OoOooo OoO OOooO OoooooO"'` - Decode ghost-speak
* `ghost-translator -e (or --encode) "Hello!"` - Encode ghost-speak

Examples:

```
$ ./ghost-translator -e "Boo! 👻"
OoooOo OOOO OOOO OoooooO Ooooooo OOOOOoOoooooOOoOO

$ ./ghost-translator -d "OoOooo O Ooooo Ooooo OOooO Ooooooo OoOooo O OOoo OOoo OOOO OoOOO OoO OoO OOOo OoooooO Ooooooo OOOOOooOOOOOoooOO"
Happy Halloween! 🎃
```

# How does it work?

It's quite simple, really. To encode human-speak into ghost-speak, first each character of the entered string is converted into its integer Unicode code point. This integer is then XORed with 96 (01100000). This is done to shorten the resulting binary string, as all lower case characters (a-z) have their binary representations start with `011`. This also produces variable-length strings, by stripping out leading zeroes, which I think look nicer than fixed-width, 8 character binary strings. The integer is then converted into a binary string, and the prefix `0b` is stripped. Finally, each character in the binary string is iterated through and converted to `o` or `O`: ones become upper case Os, and zeroes become lower case Os. 

This process is repeated for every character entered, with a space appended between each ghost word to represent the boundary between each character.

To decode ghost-speak back to human-speak, the process is simply done in reverse.

# Acknowledgements

Inspired by [Cow translator](https://github.com/SkwalExe/cow-translator) by SkwalExe 🐮