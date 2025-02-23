



const DNA_to_RNA = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
}

const RNA_to_DNA = {
    "C": "G",
    "G": "C",
    "A": "T",
    "U": "A"
}




function RNA(string) {
    let new_str = ""
    for (let char of string) {
        if (char in DNA_to_RNA) new_str += DNA_to_RNA[char]
        else {
            return ""
        }
    }
    return new_str
}


function DNA(string) {
    let new_str = ""
    for (let char of string) {
        if (char in RNA_to_DNA) new_str += RNA_to_DNA[char]
        else {
            return ""
        }
    }
    return new_str
}
