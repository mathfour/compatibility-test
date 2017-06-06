# Compatibility Test
The *Compatibility Test* is a Node.js, Express app that allows a user to answer some questions and get matched with a compatible friend from the saved list of friends.


Find your compatible "soul mate" in a group of others who've taken the quiz

 You can find the source files at [https://github.com/mathfour/compatibility-test](https://github.com/mathfour/compatibility-test)

## Dependencies
- [body-parser](https://www.npmjs.com/package/body-parser)

- [express](https://www.npmjs.com/package/express)

- [fs](https://www.npmjs.com/package/fs)

- [http](https://www.npmjs.com/package/http)

## Set Up the Application

1. Clone this repo to your desktop and change to the `compatibility-test` directory. (If it's your first time to clone, check out the instructions [here](https://help.github.com/articles/cloning-a-repository/).
2. Run `npm install` to install the app and its dependencies.

## Launch the app

1. Run `node compatibility-test.js` or `npm start` to start the server.

2. Go to a browser and type `localhost:4347` to reach the home page

3. From there, follow the clicks as normal

## Take the Test and Find a Friend

Fill out your name and include a link to a photo of you online.

Answer each question honestly. You get a better idea of a match. (Okay, the data is contrived, but still - it's fun!)

Return to the terminal (where you launched the server) to find out who your new friend is.


## Next Steps

- Create a client facing way to see the friend (in the assignment this was supposed to be a modal).
- Include the option of uploading a photo.
- Validate the inputs.

## Needed Improvements & Commentary

I am struggling with the to's and from's of all the files involved here. I believe I have stuff in the wrong files. I like my logic for finding the best friend, but I don't think it should be in the `apiRoutes.js` file.

And I'm totally confused on how to make that darn modal work.

### Known Bugs

- Clearly we can't see the best friend in the browser yet. That's a must to fix.
- Since you download and install the app locally, there's no way for you to actually save yourself as a friend option for the larger public.

## Acknowledgements

A big thanks to the following folks:
- [Rachel Thiim](https://github.com/rxtATX) whose repo on this exercise helped me make a little more sense of the computer's thinking.
- [Seth Gibson](https://github.com/sgibson53) for fighting for 3 hours to figure out how to solve my little one-line fix (and for spending even more time with me trying to figure out how all these files talk to each other).

### Copyright and License

Like it? Use it and say where you got it.

Have courage and be kind.

![Bon's Signature](http://mathfour.com/wp-content/uploads/2015/06/SignatureBon.png "Bon Crowder")
