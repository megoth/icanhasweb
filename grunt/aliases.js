module.exports = {
	'default': ['dev', 'watch'],
	'dev': ['wintersmith:local', 'sass', 'copy'],
  'prod': ['clean:build', 'wintersmith:prod', 'sass', 'copy', 'webpack:prod']
};