---
title: How to setup continuous delivery
description: Learn how to setup CD of a website on a VPS using Github Actions
img: https://github.blog/wp-content/uploads/2019/08/DL-V2-LinkedIn_FB.png
alt: Github Actions
author: 
  name: Zhehai Zhang
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags: 
  - github
  - continuousdelivery
  - react
  - website
date: 2021-11-07
---

<style>

</style>


# Setup

Make sure to have
* GitHub account
* Github repo
* VPS

# What will we get at the end?

Our end goal is to be able to push to a repository, and then on the VPS side:
1. Pull from the repository
2. Run the installation requirements
3. Reload things that are serving it (`pm2` in my case)
4. Step back and relax as your website auto deploys!


# Configuring the GitHub repository

In order to run actions on the vps, GitHub needs access. Hence, we'll create an ssh key for it.

```bash
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "your@email.here"
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

Copy the private key by displaying it:
```bash
cat ~/.ssh/id_rsa
```

Now head over to your GitHub repository, under `Settings -> Secrets -> New repository secret`
we will create 4 secrets:
```env
HOST: hostname/ip address of vps
USERNAME: username to ssh into vps
SSHKEY: the private key you copied earlier
PORT: 22
```

# Configuring the GitHub Action

Under your repo, create a `.github/workflows` folder and create a `deploy.yaml` with the contents below:
```yaml
name: Deploy Frontend
on:
  push:
    branches: [master]
    paths:
      - ./**
jobs:
  deploy-frontend-job:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Pull from GitHub repo
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          USERNAME: ${{ secrets.USERNAME }}
          PORT: ${{ secrets.PORT }}
          KEY: ${{ secrets.KEY }}
          script: |
            cd /var/www/personalwebsite
            git pull
            npm install
            npm run build
            pm2 reload 0
```

We only want pushes that go to the `master` branch, and this runs the `deploy-frontend-job` job.
Note that you can do whatever branch you want.
We are calling a `ssh-action`, which runs the script in the vps once we have logged on.

I am going to the directory, pulling from GitHub, installing packages, and then reloading pm2, which I'm using to serve.

