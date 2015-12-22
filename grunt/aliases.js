module.exports = {
	'default': ['build', 'watch'],
	'build': ['clean:build', 'wintersmith:local', 'sass', 'copy']
};