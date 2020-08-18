# Introduction

 The goal is to write something in javascript that can read a list from a website and parse it to JSON.
 It will also be able to parse JSON to JSON.

## list to JSON

The user can enter a url.
They then get options on how to interpret this list and how to save this to JSON in the way they want.

## JSON to JSON

The user can enter a url. The url provided must give valid JSON back.
They then get options on how to interpret this JSON and how to save this to JSON in the way they want.

## Why I created this

I originally created this to help me with making my [color game](https://github.com/dusthijsvdh/kleurenspel).
For my [color game](https://github.com/dusthijsvdh/kleurenspel) I need(ed) a JSON file with color names and codes.
The site [kleurenwaaier.nl](https://www.kleurenwaaier.nl/bepaal-je-kleur/) has a huge list of colors.
So to easily turn that into a JSON file I started this project.
I thought this was a great learning project since I have very little expirience in JavaScript and no expirience in Node.js.

## How to run

1. Run `npm install`.
2. Rename `.env.example` to `.env` and fill in the variables.
3. Add SSL certificates named `list-to-json.key` & `list-to-json.crt` in the root folder.
4. Run the following commad:
   - on MacOS or Linux `DEBUG=list-to-json:* npm start`.
   - on Windows Command Prompt `SET DEBUG=list-to-json:* & npm start`
   - on Windows PowerShell `$env:DEBUG='list-to-json:*'; npm start`
5. Go to [`https://localhost:3000/`](https://localhost:3000/) or the port number you defined.

## :coffee:/:tea: break

Somtimes you need a quick break to restore your epic coding skills.
So [click here](https://www.reddit.com/random) and get suprised by a random post everytime you click.
