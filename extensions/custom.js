/*
INSTALLATION
============
To install the extensions, copy the file custom.js to folder ~/.jupyter/custom
To install each extension, copy each js file to folder ~/.jupyter/custom


REFERENCES
==========
 
 There is a list of icons here:
 - http://fortawesome.github.io/Font-Awesome/cheatsheet/
 - http://astronautweb.co/snippet/font-awesome/
 
 Some other cool IPython notebook extensions:
 - https://github.com/ipython-contrib/IPython-notebook-extensions
 */


$([IPython.events]).on('app_initialized.NotebookApp', function(){
	require(['/custom/toggle_prompt.js'])
	require(['/custom/toggle_input_output.js'])
	require(['/custom/TOC.js'])
	require(['/custom/TOC_links.js'])
    });

console.log("Custom estensions loaded successfully!")
