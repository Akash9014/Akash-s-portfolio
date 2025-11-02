# Portfolio Website

This is a portfolio website project that showcases the work and skills of the portfolio owner. It includes various sections such as an about page, a projects page, and a dynamic header and footer.

## Project Structure

The project is organized as follows:

```
portfolio-website
├── src
│   ├── index.html          # Main entry point of the website
│   ├── about.html          # Information about the portfolio owner
│   ├── projects.html       # Showcases completed projects
│   ├── components          # Contains reusable components
│   │   ├── header.js       # Header component with navigation
│   │   └── footer.js       # Footer component with copyright info
│   ├── styles              # Contains stylesheets
│   │   └── main.css        # Main stylesheet for the website
│   ├── scripts             # Contains JavaScript files
│   │   └── main.js         # Main JavaScript file for initialization
│   └── data               # Contains data files
│       └── projects.json    # JSON file with project data
├── package.json            # npm configuration file
├── .gitignore              # Files and directories to ignore in version control
└── README.md               # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Open `src/index.html` in a web browser to view the portfolio website.

## Features

- **Responsive Design**: The website is designed to be responsive and accessible on various devices.
- **Dynamic Content**: The projects page dynamically loads project data from a JSON file.
- **Reusable Components**: The header and footer are implemented as reusable JavaScript components.

## License

This project is licensed under the MIT License.