## React News App.

### Brief
The purpose of the app is to render five news articles to a user in sequence then allow the user to rank the articles.

### Setup instructions

TLDR: To run the app;
Clone the project from github.
cd into data/server
type:
npm install
node index.js
App should run on localHost://3001

Create a new terminal shell.
cd to news_five/
type:
npm install
npm started
App should run on localhost://3000

### Notes


#### 1. Data Files
I decided it would be more realistic to host the source of the articles on a server, such that the news app would fetch new articles every time it was started. To this end, I added a BBCfiles folder (containing the original files) and created a server folder.
With regard to formatting the articles, I decided to put all the articles inside an array and import it to my server file. As a result, the response from the server is a json object containing an array of articles.

The server uses node and express to host the article data. It also employs react router so 'get' requests should be sent to http://localhost/3001/api/
To run this part of the project, cd into the data/server folder and type;


#### 2. Fetching Data.
When the news app is mounted it fetches the data from the server. I abstracted the fetch out into its own file with a view to making it more dynamic and re-useable.
When the fetch successfully completes, the data is applied to MainConatiner's state.

#### 3. Processing Data.
Once the MainContainer state has been updated a function to process the data is called.
Since the articles do not have a uniform 'sequence' or order (some have multiple images, some none, for example) I created function which iterates over the article object's constituent parts and based on its type (h, p, img) creates the relevant html elements.
In the way, the app can accept articles with any permutation of images and paragraphs.

#### 4. Rendering Articles
The resulting array of articles represented by the relevant html elements is passed as props to the Article Container.
The first article is then rendered. Clicking the next button increments the article being rendered. When all 5 articles have been displayed in sequence, the ranking container is rendered.

#### 5. Ranking Articles
An array of strings representing the headline of each article is passed as a prop to the RankingContainer and this is used to render 5 draggable objects each representing an article. The user is then invited to drag the articles in order of preference to the 'ranked area'.
Note: There are many libraries which provide drag and drop functionality, but having never done it before I followed a tutorial to make this one.

#### 6. Testing
This was the most difficult part for me. While I have lots of experience testing class functions in various languages in isolation, I had never tested react components before. This isn't something we currently teach on the course.
As a result, testing is pretty bare bones. I have implemented tests where I could, but there are many scenarios in which I am unsure how to test (test an api call, test functionality which requires the api as an input, etc).
This is something I'll continue to learn and am pretty confident I can pick up with a bit of practice.

#### 7. Conclusion.
I enjoyed building this brief and it arguably does what was asked, however I am not 100% happy with it. I'm sure there are many holes which could be picked in it. Also, the testing is frustrating, but given the time restrictions I had, I hope it demonstrates a sufficient base knowledge to which I am keen to add.
