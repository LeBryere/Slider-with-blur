# [Slider with blur](https://lebryere.github.io/Slider-with-blur.git/)

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Samsung Internet](https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png)
--- | --- | --- | --- | --- | --- |
94+ ✔ | 92+ ✔ | 89+ ✔ | 82+ ✔ | 87+ ✔ | 55+ ✔ |

## Preview

[![Resume Preview](preview.png)](https://lebryere.github.io/Slider-with-blur.git/)

**[View Live Preview](https://lebryere.github.io/Slider-with-blur.git/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-green?&style=plastic)](https://raw.githubusercontent.com/LeBryere/Slider-with-blur.git/master/LICENSE).

## Usage

### Basic Usage

Thank you for the inspiration Nathan Taylor-nak.

This code implements a simple slideshow that allows us to navigate forward and backward between the images.

For the DOMContentLoaded event, we create an event handler that runs the code when all HTML content has loaded. This ensures that the JavaScript code only runs when all HTML content is available.

Then we calculate all the slides, and create an indicator for each within the element with the class slider__indicators.

We use the setTimeout function to add a CSS class (slider__wrap--hacked) to the slider__wrap element after 1 second. This is a timed operation that allows, for example, animations or other modifications to be executed after the page has finished loading.

The goToSlide function sets the active slide determined by the number provided as an argument. It adds the slider__slide--active class to the active slide, and removes this class from all other slides.

The nextButtons variable selects all buttons that we can click to navigate to the next slide. We add event handlers to these buttons so that each click advances the active slide.
-

### Variables
```css
$main: #777;
$back: #aaa;
$accent: hsl(220, 50%, 40%);

$sans: 'Open Sans', sans-serif;
$heebo: 'Heebo', sans-serif;

$base: 3vh;

$time: 1800ms;

$ease-out: cubic-bezier(0.260, 0.005, 0.135, 1.000);
$ease-in-out: cubic-bezier(0.785, 0.135, 0.150, 0.860);
```

## Copyright and License

Copyright 2024 Lebryere. Code released under the [![GitHub license](https://img.shields.io/badge/license-MIT-green?&style=plastic)](https://raw.githubusercontent.com/LeBryere/Slider-with-blur.git/master/LICENSE).
