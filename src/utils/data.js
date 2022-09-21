import angelaGray from "/src/assets/avatar-angela-gray.webp";
import annaKim from "/src/assets/avatar-anna-kim.webp";
import jacobThompson from "/src/assets/avatar-jacob-thompson.webp";
import kimberlySmith from "/src/assets/avatar-kimberly-smith.webp";
import markWebber from "/src/assets/avatar-mark-webber.webp";
import nathanPeterson from "/src/assets/avatar-nathan-peterson.webp";
import rizkyHasanuddin from "/src/assets/avatar-rizky-hasanuddin.webp";
import chess from "/src/assets/image-chess.webp";

const events = {
    1: "reacted to your recent post",
    2: "followed you",
    3: "has joined your group",
    4: "sent you a private message",
    5: "commented on your picture",
    6: "left the group",
};

export const data = [
    {
        profilePicture: { markWebber },
        name: "Mark Webber",
        event: events[1],
        post: "My first tournament today!",
        group: "",
        message: "",
        picture: "",
        read: false,
        duration: "1m ago",
    },
    {
        profilePicture: { angelaGray },
        name: "Angela Gray",
        event: events[2],
        post: "",
        group: "",
        message: "",
        picture: "",
        read: false,
        duration: "5m ago",
    },
    {
        profilePicture: { jacobThompson },
        name: "Jacob Thompson",
        event: events[3],
        post: "",
        group: "Chess Club",
        message: "",
        picture: "",
        read: false,
        duration: "1 day ago",
    },
    {
        profilePicture: { rizkyHasanuddin },
        name: "Rizky Hasanuddin",
        event: events[4],
        post: "",
        group: "",
        message:
            "Hello, thanks for setting up the Chess Club. I've been a memeber for a few weeks now and I'm already having lots of fun and improving my game.",
        picture: "",
        read: true,
        duration: "5 days ago",
    },
    {
        profilePicture: { kimberlySmith },
        name: "Kimberly Smith",
        event: events[5],
        post: "",
        group: "",
        message: "",
        picture: { chess },
        read: true,
        duration: "1 week ago",
    },
    {
        profilePicture: { nathanPeterson },
        name: "Nathan Peterson",
        event: events[1],
        post: "5 end-game strategies to increase your win rate",
        group: "",
        message: "",
        picture: "",
        read: true,
        duration: "2 weeks ago",
    },
    {
        profilePicture: { annaKim },
        name: "Anna Kim",
        event: events[6],
        post: "",
        group: "Chess Club",
        message: "",
        picture: "",
        read: true,
        duration: "2 weeks ago",
    },
];
