// Write a Command-Line Script
/* 
- It is called on the command line like node urls.js FILENAME, and it reads the contents of FILENAME(each line of that file will be a URL) (Read)
- fs.readFile(path, encoding, callback)
- path: path to file(relative to working directory)
- encoding: how to interpret file (utf8 for text)
- callback: function that takes error and data


- For each URL, it will get that page (a GET request to the URL) and save the HTML in a new file. (Write)
- fs.writeFile(path, data, encoding, callback)
- path: path to file (relative to working directory)
- data: data to output to file (typically a string)
- encoding: how to write file
- callback: function that takes error


- For each URL, the output filename should be the hostname of the URL. For example, for the input URL http://yahoo.com/blah/blah, your script should write the contents to a plain text file called yahoo.com

*/

//Setting up reading first

const fs = require('fs');
const axios = require('axios');


fs.readFile('urls.txt', 'utf8', (err, data) => {
    if(err) {
        console.log("ERROR", err);
        process.kill(1)
    }
    console.log("DATA...", data)
})

// Part 2 I don't know how to complete. I got as far as reading urls.txt but the instructions were unclear for that part.

// I would like to use next mentor call to go over this part.

