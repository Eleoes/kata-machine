export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;

    do {
        //grab the midpoint 
        const m = Math.floor(lo + (hi -lo) / 2);
        // assign the value to a variable
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            // reduce the high side to the midpoint 
            hi = m;
        } else {
            lo = m +1;
        }     
    } while (lo < hi);

    return false;
}