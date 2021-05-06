---
title: PostgreSQL Cheat Sheet
description: Are you tired of forgetting postgres commands? Well look no further!
img: https://stackify.com/wp-content/uploads/2018/11/Performance-Tuning-PostgreSQL-3-1280x720.jpg
alt: PostgreSQL
author: 
  name: Zhehai Zhang
  img: 
tags: 
  - postgres
  - db
  - sql
date: 2021-05-05
---


# PostgreSQL Cheat Sheet

For every project I've done, I always need to search up - how on earth do I create a table again? 
How do I get into psql? What about my root password? Every time, I end up spending an hour trying to find the 
right commands. So, look no further, for I've compiled a cheat sheet of most commands you will most likely use to get started in postgres!

## Setup
Assuming that you have postgres already installed, 
start postgres service with 

```sudo service postgresql start```

Get into the postgresql server by

```sudo -u postgres psql```

## Postgres Commands

```\l``` Lists all databases

```\c [name of database]``` to connect to actual database

```\d [name of table/nothing]``` for a description of table/tables

```CREATE DATABASE [database name]```

```grant all privileges on database [database name] to [username]```

## PostgreSQL database dump

```pg_dump [database name] -U postgres -h localhost > template``` to backup database

```psql -h localhost -d [database name] -U [username] -f template``` to add database to existing db

Note: the user may not have permision, so you could alter the user if you really wanted to.

## SQL Commands

Most are searchable, but I will update this section if I realize that I'm using it a lot.



