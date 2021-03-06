<template>
  <page
    title="Clickable Dropdown"
    intro="a clickable dropdown menu with CSS and JavaScript"
    class="clickable-dropdown-page">

    <template slot="header">
    <h2 class="title">Dropdown</h2>
    <p>A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:</p>
    </template>

    <sample>
      <dropdown title="Click Me">
        <a href="javascript:void(0)">Link 1</a>
        <a href="javascript:void(0)">Link 2</a>
        <a href="javascript:void(0)">Link 3</a>
      </dropdown>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create a Clickable Dropdown</h2>
    <p>Create a dropdown menu that appears when the user clicks on a button.</p>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>Use any element to open the dropdown menu, e.g. a &lt;button>, &lt;a> or &lt;p> element.</p>
    <p>Use a container element (like &lt;div>) to create the dropdown menu and add the dropdown links inside it.</p>
    <p>Wrap a &lt;div> element around the button and the &lt;div> to position the dropdown menu correctly with CSS.</p>
    <hr>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>We have styled the dropdown button with a background-color, padding, etc.</p>
    <p>The <code>.dropdown</code> class uses <code>position:relative</code>, which is needed when we want the dropdown content to be placed right below the dropdown button (using <code>position:absolute</code>).</p>
    <p>The <code>.dropdown-content</code> class holds the actual dropdown menu. It is hidden by default, and will be displayed on hover (see below). Note the <code>min-width</code> is set to 160px. Feel free to change this. <b>Tip:</b> If you want the width of the dropdown content to be as wide as the dropdown button, set the <code>width</code> to 100% (and <code>overflow:auto</code> to enable scroll on small screens).</p>
    <p>Instead of using a border, we have used the <code>box-shadow</code> property to make the dropdown menu look like a "card". We also use z-index to place the dropdown in front of other elements.</p>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    <h2 class="title">Right-aligned dropdown</h2>
    <example-code class="right-aligned-dropdown-example">
      <sample>
        <h2>Aligned Dropdown Content</h2>
        <p>Use <b>float: right</b> on the dropdown class to float the dropdown menu to the right, and <b>right:0</b> on the dropdown-content if you want the dropdown content to go from right to left.</p>
        <div class="buttons">
          <dropdown title="Dropdown" class="right">
            <a href="javascript:void(0)">Home</a>
            <a href="javascript:void(0)">About</a>
            <a href="javascript:void(0)">Contact</a>
          </dropdown>
        </div>
      </sample>
    </example-code>
    <example-code class="dropdown-menu-in-navbar-example">
      <sample>
        <top-nav>
          <a>Home</a>
          <a>News</a>
          <dropdown title="Dropdown" icon="fa-caret-down">
            <a href="javascript:void(0)">Link 1</a>
            <a href="javascript:void(0)">Link 2</a>
            <a href="javascript:void(0)">Link 3</a>
          </dropdown>
        </top-nav>
        <h3>Dropdown Menu inside a Navigation Bar</h3>
        <p>Click on the "Dropdown" link to see the dropdown menu.</p>
      </sample>
    </example-code>
    <h2 class="title">Search (Filter) Dropdown</h2>
    <example-code class="search-filter-dropdown-example">
      <sample>
        <h2>Search/Filter Dropdown</h2>
        <div class="buttons">
          <dropdown title="Dropdown">
            <div class="search-input">
              <i class="fa fa-search"></i>
              <input type="text" placeholder="Search.." v-model="searchText">
            </div>

            <a href="javascript:void(0)" v-for="(link, index) of filteredLinks" :key="index">{{link}}</a>
          </dropdown>
        </div>
      </sample>
    </example-code>
    </template>
  </page>
</template>

<script>
import Dropdown from '@/components/menus/Dropdown.vue'
import TopNav from '@/components/menus/TopNav.vue'

export default {
  name: 'clickable-dropdown-page',
  computed: {
    filteredLinks() {
      return this.searchLinks.filter(link => link.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },
  data() {
    return {
      searchText: '',
      searchLinks: ['About', 'Base', 'Blog', 'Contact', 'Custom', 'Support', 'Tools'],
      examples: [
        [
          '``` html',
          '<div class="dropdown">',
          '  <button onclick="myFunction()" class="dropbtn">Dropdown</button>',
          '  <div id="myDropdown" class="dropdown-content">',
          '    <a href="#">Link 1</a>',
          '    <a href="#">Link 2</a>',
          '    <a href="#">Link 3</a>',
          '  </div>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Dropdown Button */',
          '.dropbtn {',
          '  background-color: #4CAF50;',
          '  color: white;',
          '  padding: 16px;',
          '  font-size: 16px;',
          '  border: none;',
          '  cursor: pointer;',
          '}',
          '',
          '/* Dropdown button on hover & focus */',
          '.dropbtn:hover, .dropbtn:focus {',
          '  background-color: #3e8e41;',
          '}',
          '',
          '/* The container <div> - needed to position the dropdown content */',
          '.dropdown {',
          '  position: relative;',
          '  display: inline-block;',
          '}',
          '',
          '/* Dropdown Content (Hidden by Default) */',
          '.dropdown-content {',
          '  display: none;',
          '  position: absolute;',
          '  background-color: #f9f9f9;',
          '  min-width: 160px;',
          '  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);',
          '  z-index: 1;',
          '}',
          '',
          '/* Links inside the dropdown */',
          '.dropdown-content a {',
          '  color: black;',
          '  padding: 12px 16px;',
          '  text-decoration: none;',
          '  display: block;',
          '}',
          '',
          '/* Change color of dropdown links on hover */',
          '.dropdown-content a:hover {background-color: #f1f1f1}',
          '',
          '/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */',
          '.show {display:block;}',
          '```'
        ],
        [
          '``` js',
          '/* When the user clicks on the button, ',
          'toggle between hiding and showing the dropdown content */',
          'function myFunction() {',
          '  document.getElementById("myDropdown").classList.toggle("show");',
          '}',
          '',
          '// Close the dropdown menu if the user clicks outside of it',
          'window.onclick = function(event) {',
          '  if (!event.target.matches(\'.dropbtn\')) {',
          '    var dropdowns = document.getElementsByClassName("dropdown-content");',
          '    var i;',
          '    for (i = 0; i < dropdowns.length; i++) {',
          '      var openDropdown = dropdowns[i];',
          '      if (openDropdown.classList.contains(\'show\')) {',
          '        openDropdown.classList.remove(\'show\');',
          '      }',
          '    }',
          '  }',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    Dropdown, TopNav
  }
}
</script>

<style lang="scss">
.clickable-dropdown-page {
  .right-aligned-dropdown-example {
    .sample {
      min-height: 300px;
      flex-direction: column;

      .buttons {
        .right {
          float: right;

          .content {
            right: 0;
          }
        }
      }
    }
  }

  .dropdown-menu-in-navbar-example {
    .sample {
      min-height: 200px;
      flex-direction: column;

      .top-nav {
        overflow: inherit;

        .dropdown {
          button {
            background-color: #333;
            color: #f2f2f2;
            border-radius: 0;

            &:hover {
              background-color: #ddd;
              color: black;
            }
          }

          a {
            text-align: left;
          }
        }
      }
    }
  }

  .search-filter-dropdown-example {
    .sample {
      min-height: 480px;
      flex-direction: column;

      .search-input {
        i {
          position: absolute;
          padding: 10px 16px 10px 10px;
        }
        input {
          padding: 10px 5px 10px 26px;
        }
      }
    }
  }
}
</style>
