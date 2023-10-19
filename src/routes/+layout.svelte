<script>
  import "../app.css";
</script>

<div class="navbar bg-base-100">
  <div class="flex-start">
    <div class="drawer" style="z-index: 100;">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer" class="drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <li><a href="#doby">Doby 🐕</a></li>
          <li><a href="#maya">Maya 🐕‍🦺</a></li>
          <li><a href="/quiz">Take Doby's quiz!</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Doby & Maya</a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
        <label for="drop" tabindex="-1" class="btn btn-outline">Select a Theme 🌈</label>
        <ul tabindex="-1" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><button data-set-theme="cupcake" data-act-class="ACTIVECLASS">Home 🌼</button></li> 
          <li><button data-set-theme="valentine" data-act-class="ACTIVECLASS">Maya's Theme 🐕‍🦺</button></li>
          <li><button data-set-theme="aqua" data-act-class="ACTIVECLASS">Doby's Theme 🐕</button></li> 
        </ul>
      </div>
    <!-- <select
      data-choose-theme
      class="select select-bordered select-sm w-full max-w-xs"
    >
      <option disabled selected>Select a Theme 🌈</option>
      <option value="cupcake">Home 🌼</option>
      <option value="valentine">Maya's Theme 🐕‍🦺</option>
      <option value="aqua">Doby's Theme 🐕</option>
    </select> -->
  </div>
</div>


<slot />
<footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by Raul</p>
  </aside>
</footer>

