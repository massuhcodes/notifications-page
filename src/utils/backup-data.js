// Intended as backup data in the event that any fetching fails

import angelaGray from "/src/assets/avatar-angela-gray.webp";
import annaKim from "/src/assets/avatar-anna-kim.webp";
import jacobThompson from "/src/assets/avatar-jacob-thompson.webp";
import kimberlySmith from "/src/assets/avatar-kimberly-smith.webp";
import markWebber from "/src/assets/avatar-mark-webber.webp";
import nathanPeterson from "/src/assets/avatar-nathan-peterson.webp";
import rizkyHasanuddin from "/src/assets/avatar-rizky-hasanuddin.webp";
import chess from "/src/assets/image-chess.webp";

// backup for user data
const backupUsers = [
    {
        avatar: angelaGray,
        first_name: "Angela",
        last_name: "Gray",
    },
    {
        avatar: annaKim,
        first_name: "Anna",
        last_name: "Kim",
    },
    {
        avatar: jacobThompson,
        first_name: "Jacob",
        last_name: "Thompson",
    },
    {
        avatar: kimberlySmith,
        first_name: "Kimberly",
        last_name: "Smith",
    },
    {
        avatar: markWebber,
        first_name: "Mark",
        last_name: "Webber",
    },
    {
        avatar: nathanPeterson,
        first_name: "Nathan",
        last_name: "Peterson",
    },
    {
        avatar: rizkyHasanuddin,
        first_name: "Rizky",
        last_name: "Hasanuddin",
    },
];

// backup for picture being commented on
const backupPhoto = chess;

// backup for post data
const backupPost = [
    {
        quote: "The world’s greatest swordsman, that’s great! And it’s fitting since your new boss is going to be King of the Pirates! Anything else would make me look bad!",
        character: "Luffy",
        anime: "One Piece",
    },
    {
        quote: "Push through the pain. Giving up hurts more.",
        character: "Vegeta",
        anime: "Dragon Ball Z",
    },
    {
        quote: "If you can’t understand the darkness in your opponent’s heart, you will never understand the pain and suffering of others.",
        character: "Yami Yugi",
        anime: "Yu-Gi-Oh",
    },
    {
        quote: "Ooh, that look goes straight to the heart.",
        character: "Dandy",
        anime: "Space Dandy",
    },
    {
        quote: "Whatever happens, happens.",
        character: "Spike Spiegel",
        anime: "Cowboy Bebop",
    },
    {
        quote: "It’s Meaningless To Just Live, And It’s Meaningless To Just Fight. I Want To Win.",
        character: "Ichigo Kurosaki",
        anime: "Bleach",
    },
];

// backup for message data
const backupMessage =
    "After the Eiffel Tower was built, one person was killed during the installation of the lifts. No one was killed during the actual construction of the tower.";

//backup for group data
const backupGroup = "Chess";

export { backupUsers, backupPhoto, backupMessage, backupPost, backupGroup };
