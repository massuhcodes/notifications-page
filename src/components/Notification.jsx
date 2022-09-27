import "/src/styles/Notification.css";

export default function Notification(props) {
    const {
        profilePicture,
        name,
        type,
        event,
        post,
        group,
        message,
        picture,
        unread,
        time,
    } = props.user;

    return (
        <section
            className={`section-notification ${
                unread ? "notification-unread" : "notification-read"
            }`}
            onClick={() => props.toggleSingleNotificationRead(props.id)}
        >
            <div className="outer-div">
                <img
                    className="profile-picture"
                    src={profilePicture}
                    alt={`Profile Picture of ${name}`}
                />
                <div className="inner-div">
                    <p>
                        <span className="name">{name}</span>{" "}
                        <span className="event">{event}</span>{" "}
                        {type === "1" ? (
                            <span className="post">{post}</span>
                        ) : (
                            <span className="group">{group}</span>
                        )}
                    </p>
                    <time>{`${time} ${time === 1 ? "min" : "mins"} ago`}</time>
                    <span
                        className={`dot ${unread ? "dot-unread" : "dot-read"}`}
                    >
                        •
                    </span>
                    {message && <p className={`message ${unread ? "message-unread" : "message-read"}`}>{message}</p>}
                </div>
            </div>
            {picture && (
                <img
                    className="notification-picture"
                    src={picture}
                    alt={`${name}'s commented picture`}
                />
            )}
        </section>
    );
}
