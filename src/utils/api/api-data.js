// Fetch notification data

import { ninjasKeys, pexelKey } from "/src/utils/api/api-keys.js";
import { createClient } from "pexels";
import {
    backupUsers,
    backupPhoto,
    backupMessage,
    backupPost,
    backupGroup,
} from "/src/utils/backup-data.js";

/**
 * Fetch data for either "messages", "post", or "group"
 * Data is fetched from "https://api-ninjas.com/"
 * If fetching fails, return backup data
 * @param {String} property - either a value with "messages", "post", or "group"
 * @param {Number} count - based on the number of notifications to show (default = 1)
 * @returns {Object} retrievedData - value is returned and further processed in notificationsData.js
 */
async function getPropertyData(property, count = 1) {
    let retrievedData;
    let backupData;
    let url;
    let errorMessage;
    const domainV1 = "https://api.api-ninjas.com/v1";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "applications/json",
            "X-API-Key": ninjasKeys,
        },
    };
    // reduce code smell
    switch (property) {
        case "messages":
            // double the count just to get variety
            url = `${domainV1}/riddles?limit=${count * 2}`;
            errorMessage = "Something went wrong when getting messages";
            backupData = backupMessage;
            break;
        case "post":
            url = `${domainV1}/facts?limit=${count}`;
            errorMessage = "Something went wrong when getting post";
            backupData = backupPost;
            break;
        case "group":
            url = `${domainV1}/hobbies?category=general`;
            errorMessage = "Something went wrong when getting group";
            backupData = backupGroup;
            break;
    }
    // fetch here
    try {
        const response = await fetch(url, options);
        retrievedData = await response.json();
    } catch (error) {
        console.log(`${errorMessage}: ${error}`);
        // return backup data
        retrievedData = backupData;
    }
    return retrievedData;
}

/**
 * Fetch photo being commented on
 * Photo is fetched from "https://www.pexels.com/api/"
 * If fetching fails, return `backupPhoto`
 * @returns {String} - "url of where the photo is located"
 */
async function getPhoto() {
    // required based on documentation
    const client = createClient(pexelKey);
    // select a random page
    const randomPage = Math.ceil(Math.random() * 30);
    let photo;
    // fetch here
    try {
        const response = await client.photos.curated({
            page: randomPage,
            // one image is needed
            per_page: 1,
        });
        // get the single photo from the array
        photo = await response.photos[0].src.small;
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

export { getUsers, getPhoto, getPropertyData };
