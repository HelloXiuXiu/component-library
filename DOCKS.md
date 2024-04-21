# Component Library File Sctructure and Names
This file describes how files are organized inside the `src` folder.
To explain how the files should be named within each directory, `Animation Name` is
used as an example.

animation example name: `Animation Name`

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

### components
The directory contains React components that serve as showcases for each animation in use. Not connected to 
the animation files directly. Each component has `.jsx` and `.css` files with markup and styles respectively.

name: `AnimationName.jsx` / `AnimationName.css`

### controls
Components that can set/change animation settings by passing an object with all the necessary parameters.

name:


## Additionals 
### cargo
Functions that are used when an animation is applied to websites built with Cargo Collective.

name: `discribe-the-purpose.js`

### assets
???

## Styles
`index.css` – reset file
`App.css` – global styles
