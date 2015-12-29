module.exports = {
	files: ['config.json', 'contents/**/*.md', 'minimalist/sass/**/*.scss', 'templates/*.jade', 'plugins/*'],
  tasks: ['wintersmith:local', 'sass:default', 'copy']
};