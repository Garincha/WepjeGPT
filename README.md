
<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Garincha/WepjeGPT">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">WepjeGPT</h3>

  <p align="center">
    A Clone of the recently popular ChatGPT with some improvements in functionality.
    <br />
    <a href="https://github.com/Garincha/WepjeGPT"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Garincha/WepjeGPT">View Demo</a>
    ·
    <a href="https://github.com/Garincha/WepjeGPT/issues">Report Bug</a>
    ·
    <a href="https://github.com/Garincha/WepjeGPT/issues">Request Feature</a>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


A Clone of the recently popular ChatGPT with some improvements in functionality such as being able to go back to previous chats based on your saved session. Using NextAuth and Firebase for Authentication with Google. Full functionality of the capabilties of ChatGPT through the OpenAI API. Obviously subject to the constraints that the API gives.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Firebase][Firebase.js]][Firebase-url]
* [![Tailwindcss][Tailwind.css]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
 * Firebase project
 * openai account

### Installation

1. Get a free API Key at [https://openai.com](https://openai.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Garincha/WepjeGPT.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Fill in Firebase Info in `firebase.ts`
   ```js
       // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "yourapikey",
      authDomain: "your-app-name.firebaseapp.com",
      projectId: "your-app-name",
      storageBucket: "your-app-name.appspot.com",
      messagingSenderId: "messagingSenderId",
      appId: "appID"
    };
   ```
5. Create .env.local in the main folder
    ```js
     // Your .env.local configuration
      GOOGLE_ID=googleID
      GOOGLE_SECRET=googlesecret
      NEXTAUTH_URL=domainname or when local http://localhost:3000
      NEXTAUTH_SECRET=any secret passphrase will do.
      ```
 6. Run app
    ```sh
      npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Dashboard integration
- [ ] Multiple layout templates
- [ ] Prompt library

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Garincha - [@wepjenl](https://instagram.com/wepjenl) - contact@wepje.nl

Project Link: [https://github.com/Garincha/WepjeGPT](https://github.com/Garincha/WepjeGPT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/Garincha/WepjeGPT/stargazers
[issues-shield]: https://img.shields.io/github/issues/Garincha/WepjeGPT.svg?style=for-the-badge
[issues-url]: https://github.com/Garincha/repo_name/issues
[license-shield]: https://img.shields.io/github/license/Garincha/WepjeGPT.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/wepje
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Firebase.js]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=whit
[Firebase-url]: https://firebase.google.com/
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

