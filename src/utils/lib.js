export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}
export const Titleize = (string = '') => {
    return string
        .replace(/^[\s_]+|[\s_]+$/g, '')
        .replace(/[_\s]+/g, ' ')
        .replace(/\-/g, ' ')
        .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}