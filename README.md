Berikut adalah contoh file `README.md` yang mendeskripsikan kode JavaScript yang telah Anda berikan:

---

# Drum Kit Interaction

This project is a simple interactive drum kit built with JavaScript, HTML, and CSS. Users can interact with the drum kit either by clicking on the drum buttons or by pressing specific keys on their keyboard. Each button or key corresponds to a different drum sound.

## Features

- **Button Click Interaction**: When the user clicks any of the buttons labeled `w`, `a`, `s`, `d`, `j`, `k`, or `l`, a corresponding drum sound will play.
- **Keyboard Interaction**: When the user presses any of the `w`, `a`, `s`, `d`, `j`, `k`, or `l` keys on the keyboard, the corresponding drum sound will play.
- **Button Animation**: When a button is clicked, it will temporarily change color to provide visual feedback.

## How It Works

### Button Click Events

The code adds an event listener to each button on the page. When a button is clicked, the event listener:
1. Changes the button's text color to red for 2 seconds.
2. Plays the corresponding drum sound based on the button's inner HTML content.

```js
for (let i = 0; i < totalButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let button = document.querySelectorAll("button")[i];
        button.style.color = "red";
        setTimeout(function () {
            button.style.color = "";
        }, 2000);

        switch (button.innerHTML) {
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            // Other cases...
        }
    });
}
```

### Keyboard Events

The code also listens for keydown events, and when the user presses one of the designated keys (`w`, `a`, `s`, `d`, `j`, `k`, `l`), the corresponding sound plays.

```js
document.addEventListener("keydown", event => {
    if (event.key.startsWith("w")) {
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    }
    else if (event.key.startsWith("a")) {
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    }
    // Other keys...
});
```

### Audio Files

The following sounds are mapped to specific buttons/keys:
- `w`: `tom-1.mp3`
- `a`: `tom-2.mp3`
- `s`: `tom-3.mp3`
- `d`: `tom-4.mp3`
- `j`: `snare.mp3`
- `k`: `crash.mp3`
- `l`: `kick-bass.mp3`

These sound files must be placed in the `sounds/` directory relative to the HTML file for the code to function properly.

## Getting Started

### Prerequisites

To run this project, you need:
- A modern web browser (Chrome, Firefox, etc.)
- The required audio files (`tom-1.mp3`, `tom-2.mp3`, `tom-3.mp3`, `tom-4.mp3`, `snare.mp3`, `crash.mp3`, `kick-bass.mp3`) located in a `sounds/` folder.

### Running the Project

1. Clone or download the project.
2. Ensure the HTML file contains buttons with the labels `w`, `a`, `s`, `d`, `j`, `k`, `l`.
3. Open the HTML file in a browser.
4. Click the buttons or press the corresponding keys to hear the drum sounds.

## Code Breakdown

1. **Query Selectors**: 
   - `document.querySelectorAll("button")` is used to select all the buttons on the page.
   - The number of buttons is determined using `.length`.
   
2. **Event Listeners**:
   - `addEventListener("click", function)`: Attaches a click event to each button.
   - `addEventListener("keydown", function)`: Attaches a keydown event to the entire document.

3. **CSS Manipulation**:
   - The buttons' text color is changed temporarily when clicked.

4. **Audio Playback**:
   - Audio objects are created using `new Audio('path_to_sound')` and are played using the `.play()` method.
