import { formatName } from "./name";

export function greeting(name) {
    const hour = new Date().getHours()

    const greet = useData.texts.greetings;
    const greeting =
        hour < 12 && hour >= 4
            ? greet.day
            : hour >= 12 && hour < 18 ?
                greet.evening
                : greet.night

    return `${greeting} ${formatName(name)} `
}