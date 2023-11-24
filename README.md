<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/yujhenchen/password-generator">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Password Generator</h3>

  <p align="center">
    My solo project - Password Generator (from The Frontend Developer Career Path of Scrimba)
    <br />
    <a href="https://github.com/yujhenchen/password-generator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jen-password-generator.netlify.app/" target=”_blank”>View Demo</a>
    ·
    <a href="https://github.com/yujhenchen/password-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/yujhenchen/password-generator/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#issues-and-solutions">Issues and solutions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

My solo project - Password Generator (from The Frontend Developer Career Path of Scrimba).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![JavaScript]][JavaScript]
* [![CSS3]][CSS3]
* [![HTML5]][HTML5]
* [![UnoCSS][UnoCSS]][UnoCSS-url]
* [![FontAwesome][FontAwesome]][FontAwesome-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation
Right-click on the index.html file and select "Open with" and select the target browser.
<!-- 
1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/yujhenchen/password-generator.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ``` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [x] Use Font Awesome for button icons
- [x] Use UnoCSS
- [x] Generate random passwords
- [x] Allow password lengths within a given range (8 to 15, auto reset if the value is out of range)
- [x] Show ellipsis when there is text overflow
- [x] Copy on click
- [x] Added toast to notify that the password has been copied to the clipboard (`setTimeout` and `clearTimeout` to control the display of the toast)
- [x] Toggle mode light/ dark theme, store in the localStorage
- [x] Toggle symbols on/ off
- [x] Toggle numbers on/ off
- [ ] Refactor
    - [ ] Create a UnoCSS class file to load class names
    - [ ] Move out event handler functions
    - [ ] Project structure best practice
    
See the [open issues](https://github.com/yujhenchen/password-generator/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ISSUES AND SOLUTIONS -->
## Issues and solutions

### After setting layout of `body` to be `flex`, the hight of `body` becomes the same as its content

#### Solution
Set the minimum height of html and body
```
html,
body {
  min-height: 100vh;
}
```

### Refreshing page CSS styles do not apply immediately
Same as reported 
https://github.com/unocss/unocss/issues/2435

#### Solution
Have not found a solution yet.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
<!-- Jen Chen - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->
Jen Chen

Project Link: [https://github.com/yujhenchen/password-generator](https://github.com/yujhenchen/password-generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [How to create a toggle switch with CSS](https://www.educative.io/answers/how-to-create-a-toggle-switch-with-css)
* [HTML vs Body: How to Set Width and Height for Full Page Size](https://www.freecodecamp.org/news/html-page-width-height/)
* [Simple CSS3 Toggle Switch Button](https://www.htmllion.com/css3-toggle-switch-button.html)
* [How to Copy Text to the Clipboard with JavaScript](https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/)
* [The best light/dark mode theme toggle in JavaScript](https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yujhenchen/password-generator.svg?style=for-the-badge
[contributors-url]: https://github.com/yujhenchen/password-generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yujhenchen/password-generator.svg?style=for-the-badge
[forks-url]: https://github.com/yujhenchen/password-generator/network/members
[stars-shield]: https://img.shields.io/github/stars/yujhenchen/password-generator.svg?style=for-the-badge
[stars-url]: https://github.com/yujhenchen/password-generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/yujhenchen/password-generator.svg?style=for-the-badge
[issues-url]: https://github.com/yujhenchen/password-generator/issues
[license-shield]: https://img.shields.io/github/license/yujhenchen/password-generator.svg?style=for-the-badge
[license-url]: https://github.com/yujhenchen/password-generator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[UnoCSS]:https://img.shields.io/badge/unocss-333333.svg?style=for-the-badge&logo=unocss&logoColor=white
[UnoCSS-url]: https://unocss.dev/
[FontAwesome]: https://a11ybadges.com/badge?logo=fontawesome
[FontAwesome-url]: https://fontawesome.com/
