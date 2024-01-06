export default function getWindowDimensions() {

    if (typeof window !== 'undefined') {
        const width = window.innerWidth
        const height = window.innerHeight
        return {
            width,
            height
        };
    } else {
        return null
    }
}