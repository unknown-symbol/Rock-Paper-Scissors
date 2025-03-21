# Rock-Paper-Scissors

Following [The Odin Project](https://www.theodinproject.com/).

Working version with only buttons and text result.

## Some code

Adds a listener to buttons to play a round by clicking on them:

```javascript
var playerButtons = document.querySelectorAll("button");

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
```

Generates random computer choice:

```javascript
Math.floor(Math.random() * 3);
```
