module.exports = {
    "env": {
        "browser": true,
        "greasemonkey": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8
    },
    "plugins": ["compat"],
    "rules": {
        "curly": 0,
        "dot-notation": 1,
        "indent": ["error", 2, {
            "MemberExpression": 1,
            "VariableDeclarator": "first"}
        ],
        "no-confusing-arrow": 1,
        "arrow-spacing": 2,
        "no-multi-spaces": 1,
        "no-useless-escape": 0,
        "no-unused-vars": 2,
        "no-var": 0,
        "semi": 2,
        "semi-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "prefer-arrow-callback": 1,
        "prefer-const": 2,
        "require-await": 2,
        "no-warning-comments": [1, { "terms": ["todo", "fuck", "TODO"], "location": "start" }],
        "eqeqeq": 1,
        "no-eval": 1,
        "no-await-in-loop": 2,
        "no-bitwise": 2,
        "block-scoped-var": 1,
        "comma-spacing": 1,
        "comma-style": 1,
        "func-call-spacing": 1,
        "keyword-spacing": 1,
        "linebreak-style": [
            1,
            "unix"
        ],
        "no-constant-condition": 2
        // do not delete above basic code style requirement
    }
};