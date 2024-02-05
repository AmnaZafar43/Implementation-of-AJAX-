# Implementation-of-AJAX-

###Developer Name

Amna Zafar(2021-CS-27)

###***Project Name:***		

Product API Fetching

###***Project Description:***

This web application fetch product data from api based on two different categories of product by implementing ajax. When project runs, it asks you to select product category which type of product data you want to fetch. By clicking on dropdown button 2 options of category are shown one is electronics and other one is jewelry. Select category according to desire and data from api is shown on webpage. Basic goal of using ajax is it is possible to update parts of a web page, without reloading
 the whole page.

###*How to run project locally*

1. **Create Project Directory:**Create a new directory for your project. Place the `index.html`file and `script.js` file in this directory.

2. **Include Bootstrap Library:**In your `index.html` file, make sure the Bootstrap CSS and JS files are correctly included. You're already using CDN links, so you should be fine. However, if you want to work offline, you can download Bootstrap and host it locally.

3. **Include jQuery (Optional):**If you decide to uncomment the jQuery script link in your `index.html`, make sure to download jQuery and include it in your project directory.

4. **Start a Local Server:**To avoid potential cross-origin issues with fetching data using AJAX, it's recommended to run a local server. You can use Python's built-in HTTP server for this.

   Open a terminal or command prompt, navigate to your project directory, and run the following command:

   ```python -m http.server```

   If you're using Python 2, use:

   ```python -m SimpleHTTPServer```

   This will start a local server, and you can access your project at `http://localhost:8000` or `http://127.0.0.1:8000` in your web browser.

5. **Access the Project:**Open your web browser and go to `http://localhost:8000` or `http://127.0.0.1:8000`. You should see your `index.html` page. Interact with the dropdown and click the "Fetch Data" button to see the AJAX implementation in action.