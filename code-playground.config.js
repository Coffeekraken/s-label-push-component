module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-label-push-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-label-push-component
				</h1>
				<p class="p m-b-bigger">
					Provide a nice label that will slide to the right of his input when the user has focus or content in it.
				</p>
				<label is="s-label-push">
					<input type="text" class="form-input" value="Cool value" />
					<span>Hello world</span>
				</label>
				<label is="s-label-push" color="primary">
					<input type="text" class="form-input" />
					<span>Hello world</span>
				</label>
				<label is="s-label-push" color="secondary">
					<input placeholder="Cool placeholder" type="text" class="form-input" />
					<span>Hello world</span>
				</label>
				<label is="s-label-push" color="success">
					<input type="text" class="form-input" />
					<span>Hello world</span>
				</label>
				<label is="s-label-push" color="warning">
					<input placeholder="Cool placeholder" type="text" class="form-input" />
					<span>Hello world</span>
				</label>
				<label is="s-label-push" color="error">
					<input type="text" class="form-input" />
					<span>Hello world</span>
				</label>
				<label is="s-label-push" color="info">
					<input type="text" class="form-input" />
					<span>Hello world</span>
				</label>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@import 'node_modules/coffeekraken-s-form-component/index';
				@import 'index';
				@include s-init();
				@include s-classes();
				@include s-form-classes();
				@include s-typography-classes();
				body {
					padding: s-space(big);
				}
				@include s-label-push-classes(
					$colors : default primary secondary success warning error info
				);
				label {
					margin-bottom:s-space(default);
				}
				label > span {
					font-weight:bold;
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import SLabelPushComponent from './dist/index'
			`
		}
	}
}
