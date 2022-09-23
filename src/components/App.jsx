import "/src/styles/App.css";
import { useEffect, useState } from "react";
import { data } from "../utils/data.js";
import Notification from "./Notification.jsx";

export default function App() {
    const [users, setUsers] = useState(data);
    const [count, setCount] = useState(
        users.filter((user) => user.unread).length
    );

    useEffect(() => {
        setCount(users.filter((user) => user.unread).length);
    }, [users]);

    function toggleAllNotificationReads() {
        setUsers(
            users.map((user) => ({
                ...user,
                // must toggle truth
                unread: !(count > 0),
            }))
        );
    }

    function toggleSingleNotificationRead(id) {
        setUsers(
            users.map((user) => {
                return user.id === id
                    ? { ...user, unread: !user.unread }
                    : user;
            })
        );
    }

    const notifications = users.map((user) => (
        <Notification
            key={user.id}
            id={user.id}
            user={user}
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
            <main>{notifications}</main>
        </div>
    );
}
