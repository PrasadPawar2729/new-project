function normalizeString(input) {

    const a = input.trim();


    const b = a.replace(/[^a-zA-Z0-9 ]/g, "");


    const c = b.replace(/\s+/g, " ");


    return c.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}


const str = " Hello! World@ This is a Test!.";
const ans = normalizeString(str);
console.log(ans); 
