# ionic-framework-26132

Steps to reproduce bug:

1. Install dependencies using `npm install`.
2. Start the dev server using `npm run dev`.
3. Go to any page of the app (the root is fine). You should be immediately redirected to the login page.
4. Click the "login" button. You should be take to the settings page.
5. Click the back button. The URL will change to the root, but the login page will be displayed.

To compare behaviors, there are two extra buttons:

- A button on the settings page to go to the home page. This works fine, as it uses `push`, not `back`.
- A button on the login page to "login" and navigate using `replace` (instead of `push`).
