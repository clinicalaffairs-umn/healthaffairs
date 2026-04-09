# THEME-INSTALL.md

## ABOUT OACA SUBTHEME

For Drupal 10, OACA Subtheme uses the Folwell UMN theme starting place, and is meant to expand on that to theme OACA sites.

This theme is compiled using Dart Sass via the Dart VM. This is the fastest, cleanest, most modern way of using Sass. All Sass is written in partial _scss files which are forwarded to a single _index.scss file in each folder of the theme. These index files are then compiled in the main style.scss file and ouput to compressed CSS using the command line.

## GETTING STARTED

Working with oaca_subtheme requires a few things:

To get started:
(a) get a local site instance spun up following the instructions in the project root.
(b) Make sure you have Dart Sass installed globally.  On Macs and Linux you can install it with a single command using Homebrew.  From your root ./~ folder, run
```
brew install sass/sass/sass
```
(d) cd into the folder for OACA Subtheme and you are ready to start running the theme. The theme can be ran in multiple different ways from the theme root:
(d1) Create a .bash_profile or .zshrc alias for the sass watch command:
```
sass --watch scss:dist  --style compressed
```
Using a profile will allow your to simply type whatever the profile is and the theme command will run, watch and compile the Sass.
(d2) Add a package.json file to the theme (if you do this, do not commit it to the repo) and create a script to run the same theme command. This is a theme-specific version of creating a profile alias.
(d3) Simply run the verbose theme command from the project root:
```
sass --watch scss:dist  --style compressed
```

## WORKING

(a) cd into the OACA Subtheme folder
(b) run whichever theme command you prefer from above.


## File Structure

OACA Subtheme applies a variation of the atmoic design structure. All mixins and variables are kept in folders in 00-Base. Site building elements scale up from there in 01-Parts, 02-Chunks, 03-Composites. Miscellaneous, front-end admin, print and other global files are stored in 04-Assembly.  CKE.scss uses parts of the main theme to compile the styles for the CKE5 Editor in a separate style sheet.

Individual stylesheets in each main folder are all forwarded into single index files at each level. Example: _parts_index indexes all the main files in 01-parts.  There is also a _form_index files in 01-parts/forms that forwards the individual form element files to the parts_index which passes them onto the styles.scss sheet.  No SASS code should be written in index files.  For general SASS (like global paragraph theming), use a _general file at the same level as the index file.

This method of forwarding via _index wills is recommended to prevent namspacing loops and to ensure that base variables and mixins and can be safely and easily used anywhere in the theme.

When adding a new .scss file anywhere in the, simple make sure that it is forwarded in its immediate parent's index file. To have all variables and mixins available in the new file simply include the base folder: `@use '../../00-base' as *;` at the start of the file.
