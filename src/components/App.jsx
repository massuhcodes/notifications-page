import "/src/styles/App.css";
import { useEffect, useState } from "react";
import data from "/src/utils/notifications-data.js";
import Notification from "./Notification.jsx";

// notifications (plural); note (singular form of notifications)

export default function App(props) {
    const [notifications, setNotifications] = useState(data);
    const [count, setCount] = useState(
        notifications.filter((note) => note.unread).length
    );

    useEffect(() => {
        // whenever notifications changes, update count
        setCount(notifications.filter((note) => note.unread).length);
    }, [notifications]); // watch notifications for any changes

    // handles making ALL notifications to be either read or unread
    function toggleAllNotificationReads() {
        setNotifications(
            notifications.map((note) => ({
                ...note,
                // must toggle truth
                // if there are unread notifications, read it
                // if count is 0, unread it
                unread: !(count > 0),
            }))
        );
    }

    // handles a specific notification to be either read or unread based on selected id
    function toggleSingleNotificationRead(id) {
        setNotifications(
            notifications.map((note) => {
                return note.id === id
                    ? { ...note, unread: !note.unread }
                    : note;
            })
        );
    }

    // gather an array Notifications
    const notificationComponents = notifications.map((note) => (
        <Notification
            key={note.id}
            id={note.id}
            user={note}
            // callback to send back the selected id
            toggleSingleNotificationRead={toggleSingleNotificationRead}
        />
    ));
    return (
        <div className="app">
            <header>
                <div className="title--count">
                    <h2 className="title">Notifications</h2>
                    <h2 className="count">{count}</h2>
                </div>
                <span
                    onClick={toggleAllNotificationReads}
                    className="toggler-of-all-notifications"
                >
                    {count > 0 ? "Make all as read" : "Make all as unread"}
                </span>
            </header>
            <main>{notificationComponents}</main>
        </div>
    );
}
