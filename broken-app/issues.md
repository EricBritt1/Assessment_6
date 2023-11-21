# Broken App Issues
- The app.listen isn't properly utilized. Though if you go to localhost 3000 it'll still work you should console.log where the server is being hosted. 

- You need to tell express to parse request bodies for either form data or JSON.

- Line 18 is using next with the err parameter but, there is no external ExpressError handler nor is their an in app one. I'll use throw error to substitute that now.

Unfortunately for this part I had to rely on chat gpt. 
- After testing the try portion of the code and logging results along the way I made two assumptions that I struggled to log due to the nature of promises.

1. I more than likely need Promise.all(). I recall colt mentioning that if we're iterating axios requests we need to await all promises (for a reason I forgot.).

2. whenever we're sending a updated object with our post request we use res.body when trying to access that data. In this case we want to do that because we'll be passing in the developers we want information on via our post requests.

Before I used chat GPT I found this article on stockoverflow.

https://stackoverflow.com/questions/40140149/use-async-await-with-array-map

I didn't know how to properly implement Promise.all() into the boken app so I then used chatgpt. 

