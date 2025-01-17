// /**
//  * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
//  */

// //==============================================================================
// // Welcome to scripting in Spark AR Studio! Helpful links:
// //
// // Scripting Basics - https://fb.me/spark-scripting-basics
// // Reactive Programming - https://fb.me/spark-reactive-programming
// // Scripting Object Reference - https://fb.me/spark-scripting-reference
// // Changelogs - https://fb.me/spark-changelog
// //
// // Spark AR Studio extension for VS Code - https://fb.me/spark-vscode-plugin
// //
// // For projects created with v87 onwards, JavaScript is always executed in strict mode.
// //==============================================================================

// // How to load in modules
// const Scene = require('Scene');

// // Use export keyword to make a symbol available in scripting debug console
// export const Diagnostics = require('Diagnostics');

// // To use variables and functions across files, use export/import keyword
// // export const animationDuration = 10;

// // Use import keyword to import a symbol from another file
// // import { animationDuration } from './script.js'

// (async function () {  // Enables async/await in JS [part 1]

//   // To access scene objects
//   // const [directionalLight] = await Promise.all([
//   //   Scene.root.findFirst('directionalLight0')
//   // ]);

//   // To access class properties
//   // const directionalLightIntensity = directionalLight.intensity;

//   // To log messages to the console
//   // Diagnostics.log('Console message logged from the script.');

// })(); // Enables async/await in JS [part 2]

// modules
const Scene = require ("Scene");
const Animation = require ("Animation");
const FaceTracking = require("FaceTracking");
const mouth = FaceTracking.face(0).mouth.openness;
const mouthDriver = Animation.valueDriver(mouth, 0.1, 0.5);
const linearSampler = Animation.samplers.linear(0, 1.0);
const scaleAnimation = Animation.animate(mouthDriver,linearSampler);
// access beam
Promise.all([
 Scene.root.findFirst('Cylinder'),
]).then(function(results){
 const plane = results[0];
 plane.transform.scaleX = scaleAnimation;
 plane.transform.scaleY = scaleAnimation;
 plane.transform.scaleZ = scaleAnimation;
});