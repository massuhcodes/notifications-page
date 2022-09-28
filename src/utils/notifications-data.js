// Get notifications data

// needed to assign unique key values
import { nanoid } from "nanoid";
// types of notifications
import { events } from "/src/utils/events.js";
// notification times
import { times } from "/src/utils/times.js";
// data retrieved from apis
import {
    getUsers,
    getPhoto,
    getGroup,
    getPost,
    getMessage,
} from "/src/utils/api/api-data.js";

/**
 * Get the notifications data
 * @param {Number} count - The random number of notifications to present to the user
 * @returns {Object} - An array of notification
 */
async function notificationsData(count) {
    let users;
    // fetch the number of users based on count
    try {
        users = await getUsers(count);
    } catch (error) {
        console.log(`Something went wrong when getting users: ${error}`);
    }

    // the array of notifications times based on number of notifications
    const notificationTimes = times(count);

    // will receive an array of Promises that each need to be resolved
    const notificationPromises = users.map(async (user, index) => {
        // events begins with 1 not 0 so must use ceil
        const type = Math.ceil(Math.random() * Object.keys(events).length);
        // notification can take a single event
        const event = events[type];
        // whether the notification is initially read or not
        const truth = [true, false];
        // notification will always start with these defined properties
        const notification = {
            id: nanoid(),
            profilePicture: user.avatar,
            name: `${user.first_name} ${user.last_name}`,
            type: type.toString(),
            event: event,
            post: "",
            group: "",
            message: "",
            picture: "",
            unread: truth[Math.floor(Math.random() * truth.length)],
            time: notificationTimes[index],
        };

        // based on event, populate the property with fetched data
        switch (event) {
            case events[1]: // a post will always be an anime quote (hopefully a One Piece quote)
                const response = await getPost();
                notification.post = `"${response.quote}" –– ${response.character}, [${response.anime}]`;
                break;
            case events[2]: // this just means someone followed, so just skip
                break;
            case events[4]:
                notification.message = await getMessage();
                break;
            case events[5]: // get a single photo
                notification.picture = await getPhoto();
                break;
            case events[3]: // joined or left group, same logic applies
            case events[6]:
                const group = await getGroup();
                const upperCasedGroup = group
                    .split(" ")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ");
                notification.group = upperCasedGroup;
                break;
            default: // this should never happen
                console.log("A wierd event just ocurred");
        }

        return notification;
    });

    return Promise.all(notificationPromises);
}

let data;
try {
    data = await notificationsData(Math.ceil(Math.random() * 7));
} catch (error) {
    console.log(
        `Something went wrong when getting notifactions data: ${error}`
    );
}

export default data;
