/*
<<<<<<< HEAD
 * Top bar title auto change while scrolling in mobile screens.
*/

$(function() {

  const topbarTitle = $("#topbar-title");
  const postTitle = $("div.post>h1");

  const DEFAULT = topbarTitle.text().trim();

  let title = (postTitle.length > 0) ?
    postTitle.text().trim() : $("h1").text().trim();

  if ($("#page-category").length || $("#page-tag").length) {
    /* The title in Category or Tag page will be "<title> <count_of_posts>" */
    if (/\s/.test(title)) {
      title = title.replace(/[0-9]/g, "").trim();
    }
  }

  /* Replace topbar title while scroll screens. */
  $(window).scroll(function () {
    if ($("#post-list").length /* in Home page */
      || postTitle.is(":hidden") /* is tab pages */
      || topbarTitle.is(":hidden") /* not mobile screens */
      || $("#sidebar.sidebar-expand").length) { /* when the sidebar trigger is clicked */
      return false;
    }

    if ($(this).scrollTop() >= 95) {
      if (topbarTitle.text() !== title) {
        topbarTitle.text(title);
      }
    } else {
      if (topbarTitle.text() !== DEFAULT) {
        topbarTitle.text(DEFAULT);
      }
    }
  });

  /* Click title remove hover effect. */
  topbarTitle.click(function() {
=======
 * Top bar title auto change while scrolling up/down in mobile screens.
*/

$(function() {
  const titleSelector = "div.post>h1:first-of-type";
  const $pageTitle = $(titleSelector);
  const $topbarTitle = $("#topbar-title");

  if ($pageTitle.length === 0 /* on Home page */
      || $pageTitle.hasClass("dynamic-title")
      || $topbarTitle.is(":hidden")) {/* not in mobile views */
    return;
  }

  const defaultTitleText = $topbarTitle.text().trim();
  let pageTitleText = $pageTitle.text().trim();
  let hasScrolled = false;
  let lastScrollTop = 0;

  if ($("#page-category").length || $("#page-tag").length) {
    /* The title in Category or Tag page will be "<title> <count_of_posts>" */
    if (/\s/.test(pageTitleText)) {
      pageTitleText = pageTitleText.replace(/[0-9]/g, "").trim();
    }
  }

  // When the page is scrolled down and then refreshed, the topbar title needs to be initialized
  if ($pageTitle.offset().top < $(window).scrollTop()) {
    $topbarTitle.text(pageTitleText);
  }

  let options = {
    rootMargin: '-48px 0px 0px 0px', // 48px equals to the topbar height (3rem)
    threshold: [0, 1]
  };

  let observer = new IntersectionObserver((entries) => {
    if (!hasScrolled) {
      hasScrolled = true;
      return;
    }

    let curScrollTop = $(window).scrollTop();
    let isScrollDown = lastScrollTop < curScrollTop;
    lastScrollTop = curScrollTop;
    let heading = entries[0];

    if (isScrollDown) {
      if (heading.intersectionRatio === 0) {
        $topbarTitle.text(pageTitleText);
      }
    } else {
      if (heading.intersectionRatio === 1) {
        $topbarTitle.text(defaultTitleText);
      }
    }
  }, options);

  observer.observe(document.querySelector(titleSelector));

  /* Click title will scroll to top */
  $topbarTitle.click(function() {
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
    $("body,html").animate({scrollTop: 0}, 800);
  });

});
