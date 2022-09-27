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
    getPropertyData,
} from "/src/utils/api/api-data.js";

/**
 * Get the notifications data
 * @param {Number} count - The random number of notifications to present to the user
 * @returns {Object} - An array of notification
 */
async function notificationsData(count) {
    // notification properties to be fetched
    let [users, photo, group, post, messages] = [];
    // fetch data for each property
    try {
        const response = await Promise.allSettled([
            getUsers(count),
            getPhoto(),
            getPropertyData("group"),
            getPropertyData("post"),
            getPropertyData("messages", count),
        ]);
        [users, photo, group, post, messages] = response.map(
            (element) => element.value
        );
    } catch (error) {
        console.log(`Something went wrong in Promise.all: ${error}`);
    }

    // the array of notifications times based on number of notifications
    const notificationTimes = times(count);
    // uppercase group name
    group = group.hobby
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

    return users.map((user, index) => {
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
            case events[1]:
                notification.post = `${post[0].fact}.`;
                break;
            case events[2]:
                break;
            case events[3]:
                notification.group = group;
                break;
            case events[4]:
                const index = Math.floor(Math.random() * messages.length);
                // choose from an array of messages
                notification.message = messages[index].question;
                break;
            case events[5]:
                // returns an array with a single element
                notification.picture = photo
                break;
            case events[6]:
                notification.group = group;
        }
        return notification;
    });
}

// determine the number of notifications to display (min = 1, max = 7)
// used ceil because count should never be 0
const count = Math.ceil(Math.random() * 7);
let data;
try {
    data = await notificationsData(count);
} catch (error) {
    console.log(
        `Something went wrong when getting the notifications data: ${error}`
    );
}

export default data;
