module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                debug: false,
                targets: {
                    node: 'current',
                },
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        [ "inline-react-svg" ]
    ]
};