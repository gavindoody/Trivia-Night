# Trivia-Night
A multiple choice trivia game built with HTML, CSS, JavaScript and cdnjs libraries. Made to test myself with .css, with the implementation of animations and other complex .css styles. Done entirely in my spare time.
# Features
This project has a lot of features that I wanted to add purely as a way to challenge myself, such as the option to choose from multiple categories (History, Sport, Entertainment, Technology, Geography are the ones I had myself, however the user is free to add or alter those themselves. More info below about that), a timer to answer each question, score tracking, sound effects for correct and incorrect answers (something I've left for the user to add their own), and questions pulled from a Google Sheets document (more information on that below)
# How to Play
Start the Game: Click the "Start" button on the welcome screen.
Choose a Category: Select a category from the options provided.
Answer Questions: Answer the question before the timer runs out.
If the timer reaches zero, the answer will be marked as incorrect.
Feedback will be provided after each question, indicating whether the answer was correct or incorrect.
View Results: After answering all questions, your score will be displayed.
Restart: You can restart the game by clicking the "Restart" button on the thank you screen.
# Customizing Questions
Questions are stored in a Google Sheets document (var googleSheetLink). I've decided to leave this link blank in this GitHub upload, so that people can add their own questions. Therefore to customize or add new questions:
Create or update a Google Sheets document with your questions (These questions can be altered on the sheet whenever you like and they will update in the game automatically when you go back in, same goes for adding new questions or removing them).
Publish the sheet to the web and obtain the CSV link.
Replace the googleSheetLink in script.js (at the top of the file) with your new link.
# Acknowledgements
Paraparse : Used for parsing the Google Sheets CSV data.
Google Sheets : Used for storing and managing the trivia questions
Freefrontend.com : For giving me ideas for the complex .css
docs.idew.org : For helping me establish a basic template for what I wanted the app to become.
# Contributions
Contributions are certainly welcome! However, this project is first and foremost for my own personal portfolio, so I might not actively keep up the development of it in the long-term.
