# Lagnajit Moharana's Portfolio

Welcome to my portfolio repository! This project showcases my skills, projects, and blogs.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Lagnajit09/lagnajitmoharana.com.git
   ```
2. Navigate to the project directory:
   ```sh
   cd lagnajitmoharana.com
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Customization

To personalize the portfolio with your own details, replace the contents of the following files in the `src/constants` folder:

### 1. `blogs.js`

Update the blog details with your own blog posts:

Keep your images in `src/assets/blogs` folder.

```js
// src/constants/blogs.js

export const blogs = [
  {
    name: "Your Blog Title",
    description: "Short description of your blog post.",
    link: "URL to your blog post",
    image: "Image path",
  },
  // Add more blogs here
];
```

### 2. `skills.js`

Update the skill details with your own skills:

Keep your images in `src/assets/skills` folder.

```js
// src/constants/skills.js

export const skillsList = [
  {
    name: "Skill Name",
    icon: "Path to your icon",
  },
  // Add more skills here
];
```

### 3. `projects.js`

Update the project details with your own projects:

```js
// src/constants/projects.js

export const projects = [
  {
    id: "A unique id",
    title: "Project Name",
    description: "Short description of your project.",
    link: "URL to your project",
    github: "GitHub URL of your project",
    tech: ["Array of technologies used"],
  },
  // Add more projects here
];
```

### 4. `experiences.js`

Update the experience details with your own experience:

```js
// src/constants/projects.js

export const experiences = [
  {
    id: "An unique id",
    designation: "Your designation of experience",
    company: "Name of your company",
    startDate: "Date of joining",
    endDate: "Date of leaving",
    logo: "Logo of the company",
    description: "A brief description about your work."
  },
  // Add more projects here
];
```

## Contributing

If you have suggestions for improvements or find any issues, feel free to open a pull request or issue.
