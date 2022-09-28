import "/src/styles/App.css";
import { useEffect, useState } from "react";
import notificationsData from "/src/utils/notifications-data.js";
import Notification from "./Notification.jsx";

// notifications (plural); note (singular form of notifications)

export default function App() {
    // fix here
    const [notifications, setNotifications] = useState([]);
    const [count, setCount] = useState(
        notifications.filter((note) => note.unread).length
    );

    useEffect(() => {
        setCount(notifications.filter((note) => note.unread).length);
    }, [notifications]);

    function toggleAllNotificationReads() {
        setNotifications(
            notifications.map((note) => ({
                ...note,
                // must toggle truth
                unread: !(count > 0),
            }))
        );
    }

    function toggleSingleNotificationRead(id) {
        setNotifications(
            notifications.map((note) => {
                return note.id === id
                    ? { ...note, unread: !note.unread }
                    : note;
            })
        );
    }

    const notificationComponents = notifications.map((note) => (
        <Notification
            key={note.id}
            id={note.id}
            user={note}
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
