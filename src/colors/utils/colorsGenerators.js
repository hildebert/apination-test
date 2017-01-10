/**
 * @param count
 * @return {Array}
 */
export function main(count) {
    const colors = [];

    for (let i = 0; i < count; i++) {
        if (i === count - 2) {
            colors.push([255, 99, 71]);
        } else {
            colors.push(i % 2 === 0 ? 'white' : 'silver');
        }
    }

    return colors;
}

/**
 * @param lockedColors
 * @return {Function}
 */
export function secondary(lockedColors = {}) {
    const lockedIndexes = [];
    const lockedColorsValues = [];
    let redLocked = false;

    /**
     * Create array of locked indexes and plain array of values
     * for faster lookups. Set redLocked flag to true if one of
     * locked colors is red
     */
    for (let i in lockedColors) {
        lockedIndexes.push(parseInt(i));
        lockedColorsValues.push(lockedColors[i]);
        if (lockedColors[i][0] === 255) redLocked = true;
    }

    return count => {
        const colors = [];

        for (let i = 0; i < count; i++) {
            const color = lockedColors[i] || [0, getRandomInt(0, 255), getRandomInt(0, 255)];
            colors.push(color);
        }

        /**
         * Set color of a random stripe that is not locked to red
         */
        if (!redLocked) {
            let redIndex;
            do {
                redIndex = getRandomInt(0, count - 1);
            } while (lockedIndexes.includes(redIndex));

            colors[redIndex] = [255, 99, 77];
        }

        return colors;
    };
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}