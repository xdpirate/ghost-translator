# ghost-translator

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
$ ./ghost-translator --encode "Happy Halloween!"
OoOooo O Ooooo Ooooo OOooO Ooooooo OoOooo O OOoo OOoo OOOO OoOOO OoO OoO OOOo OoooooO 

$ ./ghost-translator --decode "OoOooo O Ooooo Ooooo OOooO Ooooooo OoOooo O OOoo OOoo OOOO OoOOO OoO OoO OOOo OoooooO"
Happy Halloween!
```
