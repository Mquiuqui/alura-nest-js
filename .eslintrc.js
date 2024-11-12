module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/no-unused-vars": "error",
        "block-spacing": "error",
        "arrow-spacing": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "default-case": "error",
        "default-case-last": "error",
        "eol-last": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        // "max-lines": [
        //     "error",
        //     {
        //         "max": 100,
        //         "skipBlankLines": true,
        //         "skipComments": true
        //     }
        // ],
        "max-params": [
            "error",
            {
                "max": 5
            }
        ],
        "max-depth": [
            "error",
            {
                "max": 4
            }
        ],
        "no-extra-boolean-cast": "error",
        "no-compare-neg-zero": "error",
        "no-confusing-arrow": "error",
        "no-console": "warn",
        "no-dupe-else-if": "error",
        "no-else-return": "error",
        "no-empty": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-irregular-whitespace": "error",
        "no-lonely-if": "error",
        "no-loss-of-precision": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-mixed-operators": "error",
        "no-multi-spaces": "error",
        "no-param-reassign": "error",
        "no-trailing-spaces": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "operator-assignment": "error",
        "padded-blocks": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-await": "error",
        "yoda": "error",
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
};
