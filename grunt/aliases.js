module.exports = {
	'default': ['dev', 'watch'],
	'dev': ['wintersmith:local', 'sass:default', 'copy'],
  'prod': ['clean:build', 'wintersmith:prod', 'sass:prod', 'copy', 'webpack:prod']
};