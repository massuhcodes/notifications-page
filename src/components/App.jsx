import "/src/styles/App.css";
import { useEffect, useState } from "react";
import newNotifications from "/src/utils/notifications-data.js";
import Notification from "./Notification.jsx";

// notifications (plural); note (singular form of notifications)

export default function App() {
    // create localStorage key for unread notifications
    const UNREAD_NOTIFICATIONS_KEY = "persistently_unread_notifications";
    // get the stored notifications (may initially be null)
    const persistentlyUnreadNotifications = JSON.parse(
        localStorage.getItem(UNREAD_NOTIFICATIONS_KEY)
    );
    // compose a new array containing both previous and new notifications, otherwise, use the new ones
    const allNotifications = persistentlyUnreadNotifications
        ? [...newNotifications, ...persistentlyUnreadNotifications]
        : newNotifications;

    // allNotifications is the state (calling it notifications to be general)
    const [notifications, setNotifications] = useState(allNotifications);
    // initialize count state
    const [count, setCount] = useState(
        notifications.filter((note) => note.unread).length
    );
    const setCounter = useState(0)[1];

    useEffect(() => {
        // get the notifications that are still unread
        const unreadNotifications = notifications.filter((note) => note.unread);
        // update the new count of unread notifications
        setCount(unreadNotifications.length);
        localStorage.setItem(
            UNREAD_NOTIFICATIONS_KEY,
            JSON.stringify(unreadNotifications)
        );
    }, [notifications]); // watch changes done in notifications

    // localStorage.clear()

    useEffect(() => {
        setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)
    }, [])

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
                    <div className="count--plus">
                        <h2 className="count">{count > 15 ? 15 : count}</h2>
                        {count > 15 && <h2 className="plus">+</h2>}
                    </div>
                </div>
                <span
                    onClick={toggleAllNotificationReads}
                    className="toggler-of-all-notifications"
                >
                    {count > 0 ? "Read all" : "Unread all"}
                </span>
            </header>
            <main>{notificationComponents}</main>
        </div>
    );
}
