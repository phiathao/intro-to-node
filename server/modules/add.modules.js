function add(a, b) {
    return a + b;
}

// make add available to other files //
// can only export one thing per file
module.exports = add;