# Joey Schroeder's Online Résumé
[![Breadbox.io](http://i.imgur.com/vAw3l8H.png)](http://breadbox.io)

An application using [Preact](https://github.com/developit/preact) and [Webpack](https://github.com/webpack/webpack).

[![JoeySchroeder.com](https://i.imgur.com/P4De99k.gif)](http://joeyschroeder.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node.js & Node Package Manager
You'll need to download and install Node.js version 6 or higher and Node Package Manager for installing dependencies.  Node Package Manager is installed when installing Node.js.  Download the latest version of Node.js for [macOS](https://nodejs.org/dist/v6.11.0/node-v6.11.0.pkg) or [Windows (64-bit)](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x86.msi).

### Installing

First, you'll need to clone this repo to your working directory on your local machine.  Second, install the project dependencies using Node Package Manager through the command line.

#### Installing Dependencies

1. Open your command line.
2. Navigate to your working directory.
3. Clone this repo to your working directory.
4. Navigate inside the joey-schroeder-dot-com directory.
5. Install the dependencies.

```
cd /path/to/working/directory
hg clone github.com/joeyschroeder/joey-schroeder-dot-com
cd /joey-schroeder-dot-com
npm install
```

## Development

During development you can start the app using `npm run start`.  This will begin running the app at a specificed local server (typically localhost:8100/).  You can then view the app in any web browser or browser simulator.  Any time you make a change to the `src` folder while the app is running, the app will automatically refresh in your browser.

```
npm run start
```

## Deployment

After completing development you can run `npm run build`.  This will minifiy and compile the `src` folder into a `public` folder.  The contents of the `public` folder can be uploaded to a web server for hosting.

```
npm run build
```

## Built With

* [Preact](https://github.com/developit/preact) - A 3kb React alternative with the same ES6 API
* [Webpack](https://github.com/webpack/webpack) - A JavaScript module bundler

## Authors

* **Joey Schroeder** - *Initial work* - [Breadbox.io](https://github.com/BreadBoxIO)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details

## Acknowledgments

* Hat tip to anyone who's code was used
