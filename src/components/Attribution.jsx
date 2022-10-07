import "/src/styles/Attribution.css";

export function Attribution() {
    function giveThanks() {
        alert(
            "Extremely grateful to the individuals and orgranizations who, through their work, made this application fun to make:\n\nRandom Data API provided cool robo-pictures and names which consist of both users' profile pictures and names\n\nLorem Picsum rovided valuable stock photos which consist of users' \"commented\" pictures\n\nDecathlon Developers provided a myriad of sport names found in the world which consist of users' groups\n\nAnimechan provided quotes from almost every anime out there which consist of users' post\n\nJokeAPI provided hilarious programming jokes which consist of messages sent to users\n\nFrontendmentor provided both the challenge in the first place and the initial design\n\nFlaticon provided both sun and moon images\n\nThank You! 👏🏼"
        );
    }

    return (
        <div className="attribution" onClick={giveThanks}>
            <span>i</span>
        </div>
    );
}
