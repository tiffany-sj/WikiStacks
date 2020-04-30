const Sequelize = require('sequelize')
const db = require('../db');

const Page = db.define('pages', {
    field: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

const User = db.define('users', {
    field: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = { Page, User };

/*
PAGE
field	description
title	the page's title
slug	a url-safe version of the page title, for links
content	the page content
status	if the page is open or closed

USER
field	description
name	full name of the user
email	a unique, identifying email address
*/