module.exports = {
	files: ['config.json', 'contents/**/*.md', 'minimalist/sass/**/*.scss', 'templates/*.pug', 'plugins/*'],
  tasks: ['wintersmith:local', 'sass:default']
};
