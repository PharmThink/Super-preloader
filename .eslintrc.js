module.exports = {
    "env": {
        "browser": true,
        "greasemonkey": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "plugins": ["compat"],
    "rules": {
        "no-useless-escape": 1,
        "no-unused-vars": 1
    }
};