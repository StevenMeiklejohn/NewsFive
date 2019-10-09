This file includes instructions on how to setup and run the app as well as describing my thought process while building it.


1. Data Files.
I decided it would be more realistic to host the source of the articles on a server, such that the news app would fetch new articles every time it was started. To this end, I added a BBCfiles folder (containing the original files) and created a server folder.
With regard to formatting the articles, I decided to put all the articles inside an array and import it to my server file.

The server uses node and express to host the article data. It also employs react router so 'get' requests should be sent to http://localhost/3000/api/
To run this part of the project, cd into the data/server folder and type;

npm install
node index.js

Leave the server running and open a new tab in terminal.

2. App.
(a). The MainContainer fetches the files from the aforementioned server and processes the data, creating HTML elements for each 'heading', 'paragraph' and 'image' element of the article. This means that the original article objects can have any number of paragraphs/images in any order and the app should be able to process it and render it properly.
