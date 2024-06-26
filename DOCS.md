# Component Library File Structure and Names
This file describes how files are organized inside the `src` folder.
To explain how the files should be named within each directory, `Animation Name` is
used as an example.

animation example name: `Animation Name`

<br>

## Main Scripts
### vanilla
The directory contains all the code files responsible for animation. All other folders
contain helpers and code that is used to display the animation in use.
The scripts are connected to the library website in index.html directly
using the `<script>` tag:

```html
<script defer type="module" src="/src/vanilla/animation-name.js"></script>
```

name: `animation-name.js`

<br>

### components
The directory contains React components that serve as showcases for each animation. Not connected to 
the animation files directly. Each component has `.jsx` and `.css` files with markup and styles respectively.

name: `AnimationName.jsx` / `AnimationName.css`

<br>

### controls
Components that can set/change animation settings by passing an object with all the necessary parameters.

name: `AnimationNameControls.jsx`

<br>

### docs
Components that contain tables with information about all animation settings/parametrs.
The directory contains one additional file `docs.css` with styles that are reused by each docs component.

name: `AnimationNameDocs.jsx`

<br>

## Additional
### cargo
Functions that are used when an animation is applied to websites built with Cargo Collective.

name: `discribe-the-purpose.js`

<br>

### assets
Files that are used in `components` to demonstrate the animation (images, videos, fonts).

<br>

### common
Common directory can be inside of any directory. Files that are shared by several or all components in this directory. Can contain only one `.css` file for all common `.jsx` files.

<br>

## Styles
`index.css` – reset file

`App.css` – global styles

<br>
