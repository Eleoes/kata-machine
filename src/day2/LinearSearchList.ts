export default function linear_search(haystack: number[], needle: number): boolean {
    // confirm if we have found the number (needle) we're looking for in numbers(haystack)
    for (let i=0; i < haystack.length; i++) {
        if(haystack[i] === needle) {
            return true;
        }
    }

    return false;
}