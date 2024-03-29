



export default function App() {
  return (
    <body class="text-red-800">
  <div>
    <div>
        <nav>
            <div>
                <h1 class="text-3xl text-red-800 pt-10">Food Ninja</h1>
            </div>
            <ul>
              <li class="font-bold text-3xl mt-10">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
        </nav>
    </div>

    <main>
      <div>
        <a href="#">Log in</a>
      </div>
      <div>
        <a href="#">Sign Up</a>
      </div>

      <header>
        <div>
          <h2 class="font-bold text-3xl uppercase text-red-400">Recipes</h2>
          <h3 class="font-light text-3xl">For Ninjas</h3>
        </div>
      </header>

      <div>
        <h4>Latest Recipe</h4>

        <div>
          <div>
            <img src="/src/img/stew.jpg" alt="stew"/>
            <div>
              <span>Bean Chilli Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4>Most Popular</h4>
        <div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </main>
  </div>
</body>
  )
}