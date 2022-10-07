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
    const timeUnits = {};
    const past = new Date(time);
    const current = new Date();
    const elapsed = (current - past) / 1000;
    timeUnits.seconds = Math.floor(elapsed % 60);
    timeUnits.mins = Math.floor((elapsed / 60) % 60);
    timeUnits.hours = Math.floor((elapsed / 3600) % 24);
    timeUnits.days = Math.floor((elapsed / 86400) % 7);
    timeUnits.weeks = Math.floor((elapsed / 604800) % 4);
    timeUnits.months = Math.floor((elapsed / 2592000) % 12);

    let timeFormat;
    if (timeUnits.months) {
        timeForamt = `${timeUnits.months}M ago`;
    } else if (timeUnits.weeks) {
        timeFormat = `${timeUnits.weeks}w ago`;
    } else if (timeUnits.days) {
        timeFormat = `${timeUnits.days}d ago`;
    } else if (timeUnits.hours) {
        timeFormat = `${timeUnits.hours}h ago`;
    } else if (timeUnits.mins) {
        timeFormat = `${timeUnits.mins}m ago`;
    } else {
        timeFormat = "now";
    }

    return (
        <section
            // update background color based on truth
            className={`section-notification ${
                unread ? "notification-unread" : ""
            }`}
            // give back selected id
            onClick={() => props.toggleSingleNotificationRead(props.id)}
        >
            <div className="outer-div">
                <img
                    className="profile-picture"
                    src={profilePicture}
                    alt={`Profile Picture of ${name}`}
                />
                <div className="inner-div">
                    <span className="name">{name}</span>
                    <span className="event">{event}</span>
                    {type === "1" ? (
                        <span className="post">{post}</span>
                    ) : type === "3" || type === "6" ? (
                        <span className="group">{group}</span>
                    ) : (
                        ""
                    )}
                    {unread && <span className="dot">•</span>}
                    <p></p>
                    <time>{`${timeFormat}`}</time>
                    {message && (
                        <p
                            // update based on truth
                            className={`message ${
                                !unread ? "message-read" : ""
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </div>
            </div>
            {picture && (
                <img
                    className={`picture ${!unread ? "picture-read" : ""}`}
                    src={picture}
                    alt={`${name}'s commented picture`}
                />
            )}
        </section>
    );
}
