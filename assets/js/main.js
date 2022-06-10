
(function() {

    "use strict";

    
//     for (var i = 1; i <= 3; i++) {
//       var image = document.createElement("img");
//       image.setAttribute("src", "assets\\images\\course" + i + ".jpg");
//       document.querySelector(".course-details").appendChild(image);
//  }

  

  var images = ["course1.jpg", "course2.jpg", "course3.jpg", "course4.jpg", "course5.jpg", "course6.jpg", "course7.jpg", "course8.jpg"];
  var names=["Programming for Everybody (Getting Started with Python) | May 2020", "Python Data Structures | Jul 2020", "Introduction to HTML5 | Sep 2020",  "Crash Course on Python | Sep 2020", "Using Python to Interact with the Operating System | Oct 2020", "Front-End Web UI Frameworks and Tools: Bootstrap 4 | Dec 2021", "AWS Academy Cloud Foundations | April 2022", "AWS Academy Cloud Architecting | May 2022"]

  var placeHolder = document.getElementsByClassName("course-details");
  for (var i = 0; i < images.length; i++) {
    var markUp = ("<div class='col-md-4 mx-0.5 my-3 justify-content-center single-box'><img src='assets/images/" + images[i] + "' class='img-responsive'></img><div class='info'><p>"+names[i]+"</p></div></div>"); //<br><span class='view'>View</span>
    placeHolder[0].insertAdjacentHTML("beforeend", markUp);

  };
  var t_images = ["train1.jpg", "train2.jpg", "train3.jpg", "train4.jpg"];
  var t_names=["IIT Spoken Tutorial Cpp Training | Jan 2021", "IIT Spoken Tutorial C Training | Jan 2021", "IIT Spoken Tutorial Advanced Cpp Training | July 2021", "IIT Spoken Tutorial Python 3.4.3 Training | Dec 2021", ]

  var placeHolder1 = document.getElementsByClassName("train-details");
  for (var i = 0; i < t_images.length; i++) {
    var markUp1 = ("<div class='col-md-4 mt-3 justify-content-center single-box'><img src='assets/images/" + t_images[i] + "' class='img-responsive'></img><div class='info'><p>"+t_names[i]+"</p></div></div>");
    placeHolder1[0].insertAdjacentHTML("beforeend", markUp1);

  };
    var dark=document.getElementById("dark"); 
    var icon=document.getElementById("icon");
    console.log(icon.classList)
    console.log(icon.classList[1]);
    dark.onclick=function(){
        document.body.classList.toggle("dark-theme");
        icon.classList.toggle("bi-sun-fill");
    }
    
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
  
    
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
      
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      })
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('body').classList.toggle('mobile-nav-active')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let body = select('body')
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()