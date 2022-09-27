// Fetch notification data

import {
    backupUsers,
    backupPhoto,
    backupMessage,
    backupPost,
    backupGroup,
} from "/src/utils/backup-data.js";

/**
 * Fetch joke to be used as messages sent by users
 * Message is fetched from https://sv443.net/jokeapi/v2/
 * If fetching fails, return `backupMessage`
 * @returns {String} - a value to be used as message
 */
async function getMessage() {
    let response;
    let message;
    try {
        // some jokes are pretty dark so lets keep it professional
        response = await fetch(
            "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
        );
        response = await response.json();
        message = response.joke;
    } catch (error) {
        console.log(`Something went wrong when getting post: ${error}`);
        message = backupMessage;
    }
    return message;
}

/**
 * Fetch anime quotes to be used as post
 * These quotes are fetched from https://animechan.vercel.app/
 * If fetching fails, return `backupPost`
 * @returns {String} - a value to be used as post
 */
async function getPost() {
    let response;
    let post;
    try {
        response = await fetch(`https://animechan.vercel.app/api/random`);
        post = await response.json();
    } catch (error) {
        console.log(`Something went wrong when getting messages: ${error}`);
        post = backupPost;
    }
    return post;
}

/**
 * Fetch sport name to be used as group
 * Sport name is fetched from https://developers.decathlon.com/products/sports
 * If fetching fails, return `backupGroup`
 * @returns {String} - a value to be used as group
 */
async function getGroup() {
    let response;
    let group;
    let data;
    try {
        response = await fetch("https://sports.api.decathlon.com/sports");
        response = await response.json();
        data = response.data;
        group = data[Math.floor(Math.random() * data.length)].attributes.name;
    } catch (error) {
        console.log(`Something went wrong when getting group: ${error}`);
        group = backupGroup;
    }
    return group;
}

/**
 * Fetch photo being commented on
 * Photo is fetched from https://picsum.photos/
 * If fetching fails, return `backupPhoto`
 * @returns {String} - "url of where the photo is located"
 */
async function getPhoto() {
    let response;
    let photo;
    // fetch here
    try {
        response = await fetch("https://picsum.photos/200");
        photo = response.url;
    } catch (error) {
        console.log(`Something went wrong when getting photo: ${error}`);
        // return backup photo
        photo = backupPhoto;
    }
    return photo;
}

/**
 * Fetch array of users
 * If fetching fails, return `backupUsers`
 * @param {Number} count - based on the number of notifications to show (default = 1)
 * @returns {Object} users - returns an array of user data
 */
async function getUsers(count = 1) {
    let users;
    // fetch here
    try {
        const response = await fetch(
            `https://random-data-api.com/api/v2/users/?size=${count}`
        );
        users = await response.json();
        // sometimes, rather than fetching an array of a single value, `users`
        // will be an object, so make an array
        if (!Array.isArray(users)) {
            users = [users];
        }
    } catch (error) {
        console.log(`Something went wrong when getting users: ${error}`);
        // return backup data of users
        users = backupUsers;
    }
    return users;
}

export { getUsers, getPhoto, getGroup, getPost, getMessage };
