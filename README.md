<h1 align='center'>React template</h1>


<p>This is template for scaffolding react projects. Template includes webpack configuration with dev and build scripts. Enviroments settings. React base structure setup. Redux store setup with redux-saga, inversify and redux-chill.</p>


<p>
	There are only two simple scripts: 

	// start project on port provided in enviroments
	npm run start 

	// builds project to dist folder
	npm run build 
</p>

<p>
	Relative to project structure


	1) Component folder must contain : 
		- index.jsx - Here is component wrapped with some decorators like styled, connect and etc.
		- my-cool-cmp.component.tsx - Component file, online react component class / function ( prefered to have only one per file )
		- my-cool-cmp.scss - component styles
		- my-cool-cmp.props.ts - Component props type definition ( optionally here can be state also )
	2) Component composition: 
		- Shared across whole app components must be in components folder.
		- All components related to app features will be in pages folder
		- When component is part of another component and not shared for other components just place it between another files of components ( from 1. ). When component is shared between few components in feature, place it on level higher than that components
	3) Shared - common staff, mostly utils
	4) Public - assets
	5) Store - all related to state management. Here folders will mutch state slices. Folder contains following files: 
		- index.ts - exports all needed from folder
		- saga.ts - Saga class that related to that feature
		- reducer.ts - Reducer file which contains reducer definition for that state
		- actions - action creators 
		- selectors - selector class ( to avoid namespacing problems )
	Here goes same logic as we have in components. You can compose state with combine reducers or using reduceReducers ( approach better goes with reusability and not normalized states )
	6) Styles - global styles, utils.
</p>




