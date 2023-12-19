# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

- Mobile: ![Mobile](/src/design/mobile-design.jpg)
- Dekstop: ![Dekstop](/src/design//desktop-preview.jpg)

### Links

- Live Site URL: [Preview](https://card-component-parfume.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- react 
- vite

### What I learned

```component
Card.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  residence: PropTypes.string.isRequired,
  number_follower: PropTypes.string.isRequired,
  follower: PropTypes.string.isRequired,
  number_likes: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  number_photos: PropTypes.string.isRequired,
  photos: PropTypes.string.isRequired
};

Card.defaultProps = {
  name: "Victor Crest",
  age: 26,
  residence: "London",
  number_follower: "80K",
  follower: "F o l l o w e r s",
  number_likes: "803K",
  likes: "L i k e s",
  number_photos: "1.4K",
  photos: "P h o t o s" 
}

```

## Author

- Frontend Mentor - faozan099(https://www.frontendmentor.io/profile/faozan099)
- LinkedIn - [Muhammad Faozan](https://www.linkedin.com/in/muhammad-faozan)