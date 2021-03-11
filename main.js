// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(str) {
    if (str.userRole === 'ADMIN') {
        return true;
    } else return false
}

function getEmail(str) {
    let first = str.firstName.toLowerCase() + ".";
    let last = str.lastName.toLowerCase();
    let com = "@codeimmersives.com"
    let email = first + last + com
    if (email) {
        return email;
    }
}

function getPlaylistLength(str) {
    let newStr = str.songs.length
    return newStr;
}

function getHardestHomework(object) {
    let smallest = 100;
    let nameOfHardest = '';
    for (const score of object) {
        if (score.averageScore < smallest) {
            smallest = score.averageScore;
            nameOfHardest = score.name;
        }
    } return nameOfHardest;
}
function createPhonebook(name, phone) {
    let whyIsThisSoComplicated = {};
    for (i = 0; i < name.length; i++) {
        whyIsThisSoComplicated[name[i]] = phone[i];
    }
    return whyIsThisSoComplicated;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};