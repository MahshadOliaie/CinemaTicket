

function login() {
    let template = `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="./assets/images/logo.png" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-500">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-purple-100">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-purple-200 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6 px-2">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-purple-100">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-purple-400 hover:text-purple-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-purple-200 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6 px-2">
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-purple-100 shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500">Sign in</button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-purple-100">
        Not a member?
        <a href="#" class="font-semibold leading-6 text-purple-400 hover:text-purple-500">Sign Up</a>
      </p>
    </div>
  </div>`;

    history.pushState({}, "", "/login");
    document.body.innerHTML = template;
    document.body.style.backgroundColor = "rgba(29, 0, 29, 0.932)"

}
