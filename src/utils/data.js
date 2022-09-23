import { nanoid } from "nanoid";
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

const truth = [true, false];

export const data = [
    {
        id: nanoid(),
        profilePicture: markWebber,
        name: "Mark Webber",
        type: "1",
        event: events[1],
        post: "My first tournament today!",
        group: "",
        message: "",
        picture: "",
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "1m ago",
    },
    {
        id: nanoid(),
        profilePicture: angelaGray,
        name: "Angela Gray",
        type: "2",
        event: events[2],
        post: "",
        group: "",
        message: "",
        picture: "",
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "5m ago",
    },
    {
        id: nanoid(),
        profilePicture: jacobThompson,
        name: "Jacob Thompson",
        type: "3",
        event: events[3],
        post: "",
        group: "Chess Club",
        message: "",
        picture: "",
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "1 day ago",
    },
    {
        id: nanoid(),
        profilePicture: rizkyHasanuddin,
        name: "Rizky Hasanuddin",
        type: "4",
        event: events[4],
        post: "",
        group: "",
        message:
            "Hello, thanks for setting up the Chess Club. I've been a memeber for a few weeks now and I'm already having lots of fun and improving my game.",
        picture: "",
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "5 days ago",
    },
    {
        id: nanoid(),
        profilePicture: kimberlySmith,
        name: "Kimberly Smith",
        type: "5",
        event: events[5],
        post: "",
        group: "",
        message: "",
        picture: chess,
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "1 week ago",
    },
    {
        id: nanoid(),
        profilePicture: nathanPeterson,
        name: "Nathan Peterson",
        type: "1",
        event: events[1],
        post: "5 end-game strategies to increase your win rate",
        group: "",
        message: "",
        picture: "",
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "2 weeks ago",
    },
    {
        id: nanoid(),
        profilePicture: annaKim,
        name: "Anna Kim",
        type: "6",
        event: events[6],
        post: "",
        group: "Chess Club",
        message: "",
        picture: "",
        unread: truth[Math.floor(Math.random() * truth.length)],
        duration: "2 weeks ago",
    },
];
