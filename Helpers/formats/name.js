export function formatName(name) {
    name = name.split(' ')
    return name[0].charAt(0).toUpperCase() + name[0].slice(1);
}