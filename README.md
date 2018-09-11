# Best Practices for a NodeJS Project

Make separate folders for files,databases,frontend and server code.

How to run this?
1. Clone the repository.
2. Install dependencies.
3. Run src/run.js

## Database Setup

```mysql
create database sampleblogdb;
create user samplebloguser identified by 'sampleblogpass';
grant all privileges on sampleblogdb.* to samplebloguser;
flush privileges;
```