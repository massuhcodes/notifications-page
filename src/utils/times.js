// Intended for providing notification times

/**
 * Return an array of notifications times
 * @param {Number} count - the number of times needed
 * (based on the number of notifications)
 * @returns {Object} - an array of times
 */
const times = (count) => {
    let times = [];
    const maxMins = 59;
    for (let i = 0; i < count; i++) {
        times.push(Math.ceil(Math.random() * maxMins));
    }
    // sorted in ascending order
    return times.sort(a - b);
};

export { times };
