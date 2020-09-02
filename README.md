# Authentication with Next.js

> This is the project for the blog post: Authentication in Next.js with SWR

## Installing Packages

In order to install the packages, you need to write the following command: <br />
`npm install `.

## Adding configuration

The config directory should contain _dev.js_ file while working in the development build. So, create a file called _dev.js_. Then, you need to export `MONGO_URI` and `SECRET`. The file should look something like this:

```

module.exports = {
    MONGO_URI: "",      // MongoDB's URI goes here
    SECRET: "",         // SECRET key goes here
};

```

## Final Project

To take a look at the final project, you ned to change the git branch to final project. You can just write `git checkout final-project`.
