
  // Create the navigation bar
  const navbar = document.createElement('nav');

  // Create the left link
  const leftLink = document.createElement('a');
  leftLink.href = "/index.html";
  leftLink.className = "left-link";
  leftLink.textContent = "Starlight";
  navbar.appendChild(leftLink);

  // Create the div for nav links
  const navLinksDiv = document.createElement('div');
  navLinksDiv.className = "nav-links";

  // Array of link data
  const links = [
    { href: "/assets/html/exploits.html", imgSrc: "/assets/images/navicons/exploits.png", text: "Exploits" },
    { href: "/assets/html/arcade.html", imgSrc: "/assets/images/navicons/arcade.png", text: "Arcade" },
    { href: "/assets/html/utilities.html", imgSrc: "/assets/images/navicons/apps.png", text: "Utilities" },
    { href: "/assets/html/media.html", imgSrc: "/assets/images/navicons/movies.png", text: "Media" },
    { href: "/assets/html/ai.html", imgSrc: "/assets/images/navicons/ai.png", text: "AI" },
    { href: "/assets/html/search.html", imgSrc: "/assets/images/navicons/search.png", text: "Search" },
    { href: "/assets/html/extras.html", imgSrc: "/assets/images/navicons/extras.png", text: "Extras" }
  ];

  // Create each link
  links.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.href;

    const img = document.createElement('img');
    img.src = link.imgSrc;
    img.height = 12;
    img.width = 12;

    anchor.appendChild(img);
    anchor.appendChild(document.createTextNode(` ${link.text}`));
    navLinksDiv.appendChild(anchor);
  });

  // Append nav links to navbar
  navbar.appendChild(navLinksDiv);

  // Append the navbar to the container
  document.getElementById('navbar-container').appendChild(navbar);