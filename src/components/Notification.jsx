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
        duration,
    } = props.user;

    return (
        <section
            className={`section-notification ${unread ? "unread" : "read"}`}
            onClick={() => props.toggleSingleNotificationRead(props.id)}
        >
            <div className="outer-div">
                <img className="profile-picture" src={profilePicture} />
                <div className="inner-div">
                    <p>
                        <span className="name">{name}</span>{" "}
                        <span className="event">{event}</span>{" "}
                        {type === "1" ? (
                            <span className="post">{post}</span>
                        ) : (
                            <span className="group">{group}</span>
                        )}{" "}
                        {unread && <span className="dot">•</span>}
                    </p>
                    <time>{duration}</time>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
            {picture && <img className="notification-picture" src={picture} />}
        </section>
    );
}
