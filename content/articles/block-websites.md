---
title: Chrome extensions and cron jobs
description: Make a chrome extension that blocks websites at a certain time of the day.
img: https://www.fossmint.com/wp-content/uploads/2019/06/Best-Chrome-Extensions-for-Productivity.png
alt: Chrome Extension
author: 
  name: Zhehai Zhang
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags: 
  - chrome
  - cron
date: 2021-10-04
---

<style>

</style>


Ever since online learning, I realized how distracting the world wide web can be.
Ranging from online games like diep.io to social media, it can all be very distracting. You might work for 30 minutes only to get lost on [Tiktok](tiktok.com) for hours.
Hence, I decided to create a chrome extension to help my friends and my siblings focus on their work. But, how do I get them to use it? Easy, by disguising it as another chrome extension. 

# Building the chrome extension

We'll be using Manifest V3, which is the newest way to create chrome extensions. V2 has less strict configurations, would would be better for our sneaky work, but it is getting discontinued soon, so no server script loading unfortunately. 😅

We will be impersonating a Unity Extension. Similar to how the React Dev tools or Vue Dev tools light up when you're on a page, we'll be doing that too!

First, we'll need the `manifest.json`:
```json
{
  "name": "Unity Extension",
  "description": "WegGL Debugger for Unity Applications",
  "version": "1.12",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["activeTab", "storage", "tabs"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "128": "unityfaded.png"
    }
  },
  "icons": {
    "128": "unity.png"
  },
  "content_scripts": [{
    "js": ["content.js"],
    "matches": ["<all_urls>"],
    "all_frames": true
  }]
}
```

A few noteworthy things in this manifest:
1. We have two icon files, the normal `unity.png` and the
`unityfaded.png` to show that Unity is present in the website.
2. We require all the permissions in order to set the unity icon individually in each tab, as well as to be able to communicate the fact that Unity has been detected.
3. We need to match all urls so that this script is run on all websites.

## Building the logic

Every chrome extension has 3 main parts: `background.js`, `content.js`, and `popup.js`. 

`background.js` sounds like it's being run in the background, which is correct. It is run whenever these events happen:
- The extension is first installed or updated to a new version.
- The background page was listening for an event, and the event is dispatched.
- A content script or other extension sends a message.
- Another view in the extension, such as a popup, calls runtime.getBackgroundPage

Hence, it's not being run constantly, it's only being run when required. 

This is `background.js`:
```JavaScript
// background.js


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ unity: false });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.storage.sync.get("unity", ({ unity }) => {
      if (unity) {
        chrome.tabs.query({active:true, currentWindow: true}, ([tab]) => {
          chrome.action.setIcon({ 
            path: { 128: "unity.png" },
            tabId: tab.id
          })
        })
      }
    })
    sendResponse({farewell: "unity"})
    return true;
  }
);
```

I am essentially storing a flag for unity, and only if it's true, then I set the extension icon to the non faded version.

Now we display the contents of the extension when you click on it in `popup.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="popup.css">
    
  </head>
  <body>
    <h3 id="unityDisplay">This page doesn't appear to be using Unity WebGL.</h3>
    <script src="popup.js"></script>
  </body>
</html>
```
To make it dynamic, we add in `popup.js`
```js
let display = document.getElementById("unityDisplay")

chrome.storage.sync.get("unity", ({ unity }) => {
  if (unity) {
    display.innerHTML = "This page is using the production build of Unity WebGL."

  }
}); 
```

## Website Blocking

Lastly, we have `content.js`, which is run whenever the page is loaded. 
This is where we perform a chunk of our blocking website logic and unity detection:

```js
var htmlString = document.body.innerText;


if (document.body.innerHTML.includes("Unity")){
  chrome.storage.sync.set({ unity : true });
} else {
  chrome.storage.sync.set({ unity : false });
}
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});


let llist;

fetch('https://files.zhehaizhang.com/keyword-blocker/blacklist.json').then(function(response){
    return response.json();
}).then(function(obj) {
    llist = obj;
    for (const link in llist) {
      console.log(location.href)
      if (location.href.includes(link) && !location.href.includes("404")) {
        location.replace(link+"/"+llist[link]);
      }

    }
}).catch(function(error){
    console.error()
});

```

To check for unity, I simply look for the string Unity inside the html. If it's detected, 
then I set the unity flag to true. I do this by sending an event to `background.js`, using the `sendMessage` listener. 

For blocking websites, I fetch a json object which will contain the websites I want to block and what url I want to redirect it to. This way, I can continuously add/remove websites that I want to block without changing the actual chrome extension every single time.

This is an example of a json object I use:
```json
{
  woomy-arras.io: "404",
  diep.io: "404",
  arras.io: "404",
  youtube.com: "404",
  zombs.io: "404"
}
```

That's it for the extension portion! To add it to your Chrome browser, you must enable developer options in the extension settings page, and click load unpacked, in which you will load the folder you created everything in. Since the extension will stop working if you remove the folder or change its location, I suggest moving it into a folder that the user won't be suspicious about, and make sure that it's hidden from viewing.

# How would I make this even more dynamic?

Say you want to restrict certain websites during work time, but after your work is done, you would like to be able to go on those sites again. Well this is where cron jobs come in! I have my file hosted on my own VPS, so if you're hosting it, then it's very easy to set up:

To make a cron job, do 

```bash
crontab -e
```

This is where we will be adding our own cron job. I will add one for enabling the blacklist, 
and another one for disabling the blacklist.

```bash
0 9 * * * cp path/to/actualfile.json path/to/blacklist.json
0 18 * * * cp path/to/emptyfile.json path/to/blacklist.json
```

The first 5 numbers represent 
1. minute
2. hour
3. day of month
4. month
5. day of week

Use the star if it does not matter to you.
As seen, I am copying the file that stores my blacklist to the blacklist file that is being fetched, at 9 in the morning, and I'm subbing it with an empty file when it's 6pm.

# Source code

I have it on [Github](https://github.com/fairnightzz/block-websites).









