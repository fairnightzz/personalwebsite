---
title: HTN Frontend Challenge
description: Wrestled with persistent state, and made a nice nuxt web app!
img: https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/3075/nuxtjs-2.jpg
alt: HTN Frontend Challenge
author: 
  name: Zhehai Zhang
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags: 
  - hackthenorth
  - frontend
date: 2021-03-15
---
# HTN-Frontend-Challenge
View my frontend in action [here](https://htnweb.zhehaizhang.com)
Email: bairddixon@frolix.com
Password: password

## Part 2. Writeup

When I first looked at the Frontend Challenge, my first thought was to use Nuxt.js for these reasons:
- The Vue framework is easy to comprehend due to its code separation (html, js, and css are all separate but interconnected)
- Nuxt offers server-side rendering and better SEO, allowing for better search result pings!
- Nuxt is very modular and allows for a wide variety of modules to be integrated easily in the ``nuxt.config.js``
- Vue and Nuxt are not managed by a large company (good depending on your taste)

## ES-Lint 
I use ES-Lint in order to keep good coding practices, and also catch trivial errors I might unknowingly miss.
It really helped me speed up my development, as well as make my code as friendly as possible to other programmers.

## PWA
One of the reasons I chose Nuxt is to easily integrate PWA! My web app is for the most part mobile friendly, 
and allows for people to "install" it.

## The Problem
Afterwards, I needed to decide the structure and design of my web app. Since the whole goal was to efficiently 
display events to public and private users, I automatically used **Vuex** store option to store the state of my app - for example,
the email, or if the client is logged in.
One problem with SSR (server sided rendering), however, is that there's no easy way to 
persist the state after a refresh. In my previous projects, I've always solved this problem by *not* using SSR and storing everything in localStorage,
but I didn't want to shy away from this problem. This was my greatest problem, since no one really thought of how to solve it.
After a lot of research, I founded a **vuex persisted state** module, that is meant for vanilla Vue.js, but it isn't really optimized for Nuxt. The solution
was that whenever Nuxt detects a refresh, it assigns everything in the state to a predefined key, and then they set it into cookies. Hence, after the refresh is done, 
it will be able to take everything out of cookies and then reassign them to the state. This seems to work perfectly fine, but unfortunately after hours of debugging 
and research, I was not able to get the state to persist. Although I did not fix it, I still found the learning experience to be very valuable and I aim to develop a solution
that works seamlessly with Nuxt.

## The Show Goes On
Although I wasn't able to persist the state in my refreshes, the store still works as expected.
Hence, my problem with state refreshes did not discourage me and I continued on with development. In addition to the store, I decided to
add in middleware so that unauthorized users wouldn't be able to access certain routes (which I will be talking more about later)

## GraphQL
Normal people would send an HTTP request to the endpoint. However, 
I used a module (not just for the sake of it) but since it's specifically catered to 
sending GraphQL queries, it was really easy for me to send queries.

## Design
I didn't want to spend my _WHOLE_ weekend designing UX and UI, so I used Vuetify, a 
material Vue framework to make my development easier. 

## Structure
I decided that I will make 4 pages:
1. [Home](https://htnweb.zhehaizhang.com)
This is the main dashboard that lists all the events and their info.
2. Schedule
Thinking from a client's point of view, I would like an overview of all the events. Hence, I included a calendar where users will be able to view all the events, all in one piece.
3. Profile
This was not required, but I found it impertinent to at least somewhat connect the frontend and backend part of the challenge. 
Using my [backend](https://htn.zhehaizhang.com/graphql) api, I was able to pull a certain user's information to be displayed in this page.
4. [Login](https://htnweb.zhehaizhang.com/Login)
The user can log in and see private events.

I also created a navigation bar on the left so it is easy for users to navigate throughout the app, 
as well as a light/dark mode toggle.

## Notable Features I'm Proud Of
- Search: I'm able to easily search for a specific event.
- Related Events: Clicking on the related events will allow you to view those events, allowing for easy navigation.
- SEO: I used the twitter card meta tags, as well as generated a sitemap for good SEO.
- PWA: PWA is easily integrated without any extra work.
- Adaptable: The way I structured my code allows for an easy addition of extra event types, events, and additional pages.

## Future Improvements
1. Due to the limited time we were given, I wasn't able to completely solve the persisted state problem.
I was considering in starting an issue in the Github so that I would get the resources in order to solve the problem, but 
given the amount of time, I wasn't able to. 
2. I would also aim to refine my schedule page (it should only display the months in which there are events), as well as be clickable
so that users can also view events on the schedule page.
3. I would add better mobile breakpoints so its completely flawless on mobile.
4. Fully connect the frontend to the backend - I've already started the first step (profile), and using graphql api, everything will come naturally.

### Conclusion
Over these past few days, I had a lot of fun creating every part of this app. Thank you for creating this challenge!
-Sincerely,

Zhehai Zhang