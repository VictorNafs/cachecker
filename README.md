# Cachecker

**Cachecker** is a browser extension designed for developers. It quickly checks whether the displayed page is up-to-date by showing the time elapsed since its last modification, based on the `Last-Modified` header returned by the server.

## What is Cachecker for?

During development or in production, a browser may display an outdated version of a page due to caching. **Cachecker** helps identify this issue by displaying, in a popup, the time elapsed since the page was last modified. This allows you to:
- Ensure that your recent changes are properly reflected.
- Diagnose issues related to persistent caching.
- Save time by eliminating doubts about which version is being displayed.

## Features

- **Real-Time Elapsed Time Display**  
  The popup shows the time elapsed since the page's last modification, based on the `Last-Modified` header.

- **Minimalist Interface**  
  A simple and intuitive interface for quick verification.

- **Debugging Assistance**  
  Helps quickly detect if the displayed page is outdated due to caching.

## Installation

### For Google Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode** (top-right corner).
3. Click **Load unpacked** and select the folder containing the extension files.

### For Mozilla Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on** and select the `manifest.json` file of the extension.

## Usage

1. Navigate to the webpage you are developing or wish to check.
2. Click the **Cachecker** icon in the browser toolbar.
3. The popup will display the time elapsed since the last modification of the page (based on the `Last-Modified` header).
4. If the displayed time does not match your recent changes, it may indicate that caching is preventing the updated version from being shown. In such a case, consider clearing your browser's cache.

## Contributing

For any suggestions, please contact us at [cmoikvolelorange@gmail.com](mailto:cmoikvolelorange@gmail.com).

---

[Switch to French version](README_fr.md)
