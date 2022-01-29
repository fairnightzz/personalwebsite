---
title: VPS Tips and Tricks
description: Some tips that will improve your experience in setting up a vps
img: https://www.atlantic.net/wp-content/themes/anet/img/vps-hosting/vps-hosting.png
alt: VPS
author: 
  name: Zhehai Zhang
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags: 
  - vps
  - github
  - ssh
  - permissions
  - web
date: 2022-01-29
---

<style>

</style>

I realized that sometimes my brain isn't large enough to contain all my knowledge.
So I decided to keep a list of some useful things I keep using over and over again.

# /var/www
You do not want to make the whole folder accessible since 
those aren't good practices. The best way is to use the `www-data` group.

```bash
sudo mkdir ${folder name}
sudo chown -R ${user}:www-data ${folder name}
```

Now I can use `git clone` without using sudo.

# PM2

For Node.js apps, simply do `pm2 start name.js --name "Name"`

# Nginx

## Making configs
Good practice is to make the configs in `sites-available` and 
create a symlink to `sites-enabled`. **Make sure it is the absolute path**

```bash
sudo ln -s source_file link_file
```
## Syntax check and reload

```bash
sudo nginx -t
sudo systemctl reload nginx
```


