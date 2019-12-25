module.exports = {
    'default': {
        options: {
            compass: true
        },
        files: {
            'build/css/style.css': 'minimalist/sass/style.scss',
            'build/css/style.medium.css': 'minimalist/sass/style.medium.scss',
            'build/css/style.large.css': 'minimalist/sass/style.large.scss'
        }
    },
    'prod': {
        options: {
            compass: true,
            sourcemap: 'none',
            style: 'compressed'
        },
        files: {
            'build/css/style.css': 'minimalist/sass/style.scss',
            'build/css/style.medium.css': 'minimalist/sass/style.medium.scss',
            'build/css/style.large.css': 'minimalist/sass/style.large.scss'
        }
    }
};