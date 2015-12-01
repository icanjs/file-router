[![Build Status](https://travis-ci.org/marshallswain/file-router.svg?branch=master)](https://travis-ci.org/marshallswain/file-router)
[![npm version](https://badge.fury.io/js/file-router.svg)](https://badge.fury.io/js/file-router)

[![NPM](https://nodei.co/npm/file-router.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/file-router/)

## Installation
```
npm install file-router --save
```

You can use any of the builds in the dist folder to meet your project needs.

Using CanJS's built-in support for StealJS, you can now import the module directly inside your templates.  For example:
```html
<can-import from="file-router"/>

<!-- This example shows how to use with the file-droplet component, but any array of File objects will work. -->
<file-droplet>

  <file-router {batch}="lastFileBatch"
      jpg="page='upload-photos', section='data-entry'"
      pdf="page='doc-viewer'" 
      multiple="page='file-manager'" >
  </file-router>

</file-droplet>
```

## Usage
The file-router component watches its `batch` array attribute and uses `can.route` to navigate based on the provided rules.  Rules can be set up as attributes by file extension.  When a list of files is dropped, the component will check to see if all files share a common extension.  If they do, the component looks up the rules on how to handle that extension based on the passed-in attributes.

In the example above, the `jpg` attribute configures the component to route to {page:'upload-photos', section: 'data-entry'} when a list of jpg Files is dropped.  The `pdf` attribute will route to {page:'doc-viewer'} when a list of pdf Files is dropped.  The `multiple` attribute will route to {page:'file-manager'} when a list of Files with multiple extensions is dropped.

The `file-router` component was built to work with the [file-droplet](https://www.npmjs.com/package/file-droplet) component, but can work with any list of File objects.

It comes with a single style: `file-router {display: inline-block;}`.

## API

- `batch`: The list of files to extract the extension from.


### Options:

Any file extension can be used as a configuration option.  See the usage section.


## Contributing
Pull requests are welcome.

## Authors

- [Marshall Thompson](https://github.com/marshallswain)

[![Built with StealJS](./dist/build-with-stealjs.jpg)](http://StealJS.com)

