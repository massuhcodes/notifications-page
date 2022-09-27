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

// backup for message data
const backupMessage = "Hey, when are we gonna get coffee?";

// backup for post data
const backupPost =
    "After the Eiffel Tower was built, one person was killed during the installation of the lifts. No one was killed during the actual construction of the tower.";

//backup for group data
const backupGroup = "Chess";

export { backupUsers, backupPhoto, backupMessage, backupPost, backupGroup };
