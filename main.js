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
    let newArr = [];
    for (i = 0; i < object.length; i++){
        if(object.name){
            if(object.score[i] < 100){
                newArr += object.score[i]
            }
        }
    }
    if (object !== getHardestHomework) {
        return "";
    }
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