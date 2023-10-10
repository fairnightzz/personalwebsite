---
title: VPS Tips and Tricks
description: Some tips that will improve your experience in setting up a vps
img: https://www.global-dms.com/wp-content/uploads/2022/04/vps-hosting-534x321.png
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

# Docker

For going into docker files with bash, do 

```bash
docker exec-it [container] /bin/bash
```

# SSH

SSH keys are a useful way to prevent single sign in passwords that 
could be predicted. 
On your local machine:

```bash
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "your@email.here"
```

There's no need to input a password, although you can choose to name your key something different. Note that the command above generates 2 files: a file with the name you created, and another file with the name you created plus `.pub`. You can think of a public key as the lock to your door - you need to copy that to your server, and the other file is known as the private key, the key you need to safeguard on your local machine. 

To make it so that the server knows how to use your public key, on your server you need to copy it to `~/.ssh/authorized_keys`. You could just `scp` or copy and paste the contents in directly, but the easiest way is to use an in built command:

```
ssh-copy-id -i ~/.ssh/name_of_file.pub user@host
```

Why use the command from the openssh package? For instance, if you don't have the `.ssh` folder or the `authorized_keys` file, it creates it all for you, hassle free.

Now that that is done, you should be able to ssh into your server without a password. 

## SSH configs

This is really useful if you don't want to type out the domain or server ip whenever you ssh. To make a config file, `vim ~/.ssh/config`, and add this:

```
Host ${server_name}
User ${user}
IdentityFile ${~/.ssh/public_key_file}
HostName ~{url or ip address}
```

Note that the `${}` is for you to substitute your own things.

This way, just call `ssh server_name` and you're good to go.
