<template>
  <div>
    <div class="blog-post">
      <h3>Awesome blog post title
        <small>3/6/2016</small>
      </h3>
      <img class="thumbnail" src="https://placehold.it/850x350">
      <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
      <div class="callout">
        <ul class="menu simple">
          <li>
            <a href="#">Author: Mike Mikers</a>
          </li>
          <li>
            <a href="#">Comments: 3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
