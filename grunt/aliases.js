module.exports = {
	'default': ['build', 'watch'],
	'build': ['clean:build', 'wintersmith:local', 'sass', 'copy'],
  'deploy': ['clean:build', 'wintersmith:prod', 'sass', 'copy', 'webpack:prod']
};