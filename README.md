# Abdul-Samad O. Ahmed - KNES 381 Professional Portfolio

## 1. Project Purpose
This project serves as a professional digital portfolio for KNES 381 at the University of Calgary. It integrates core kinesiology research with computational analysis to demonstrate a "living résumé" of my academic and technical skills. Built on the [Jekyll al-folio](https://github.com/alshedivat/al-folio) theme, it acts as a central hub for my project work, publications, and professional background.

## 2. 🛠️ Kinesiology Analysis Tools (Computational Focus)
The core computational and visualization components designed for this course can be found as follows:
* **Python Data Pipeline**: Found in the `scripts/` directory (or within specific Jupyter notebooks), this tool automates curve fitting and data processing for biomechanics data (e.g., left ventricle biomechanics).
* **Dynamic Visualizations**: Programmatic charts and data visualizations are generated within the **Projects** section to demonstrate structural impacts, physical data trends, and other metrics directly related to coursework.

## 3. 🗺️ Project Navigation Guide
To quickly navigate the hierarchy and find the required course elements:
* **Home/About (`_pages/about.md`)**: Contains my professional bio, research background, and an overview of my core interests.
* **Projects (`_projects/`)**: Contains the core technical computational analysis, dynamic visualizations, and summaries of research topics.
* **CV (`assets/pdf/cv.pdf` & `assets/json/resume.json`)**: Digital, JSON-structured, and PDF versions of my academic experience and technical proficiencies.
* **Publications (`_bibliography/papers.bib`)**: Integrated bibliography representing academic work and research papers.
* **Blog (`_posts/`)**: A space for expanded thoughts, technical walkthroughs, and updates on ongoing projects.

---

## 🚀 Native Local Development

The easiest way to run and preview this site locally is using Ruby and Bundler.

### Setup Instructions

1. Ensure you have **Ruby** and **Bundler** installed on your system.
2. Install the necessary dependencies:
   ```bash
   bundle install
   pip install jupyter  # Required for converting Jupyter Notebook blog posts dynamically
   ```
3. Start the local development server:
   ```bash
   bundle exec jekyll serve --livereload
   ```
4. Access the live site at `http://localhost:4000/al-folio/`

*(Alternatively, if you happen to have Docker configured, you can run `docker compose up` to start the site in an isolated container).*

## 📝 Site Management & Content Editing Instructions

The site's content is heavily modularized using Markdown (`.md`) files, YAML configuration, and JSON/BibTeX data files.

### Basic Information
Global settings such as personal name, contact information, social handles, theme colors, and enabled plugins are managed in `_config.yml`.

### Contributing Content Directory Guide
- **Adding Publications**: Add your paper's BibTeX entry to `_bibliography/papers.bib`. (Jekyll-Scholar will automatically parse this and update the Publications page).
- **Writing Blog Posts**: Create files in the `_posts/` directory following the `YYYY-MM-DD-title.md` standard. Ensure proper YAML front matter is at the top of the file containing `layout: post` and `title: "Your Title"`.
- **Managing Projects**: Portfolio projects live within the `_projects/` directory as markdown files, which can be categorized automatically using tags.

## ☁️ Continuous Deployment
The site is configured to automatically deploy to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`). Whenever changes are pushed to the `main` branch, the workflow will automatically build the static site, publish the generated files to the `gh-pages` branch, and serve them to the public domain.

## 📚 Theme References
For deep architectural questions or complex customization, refer to the underlying theme's documentation:
- [al-folio Documentation](https://github.com/alshedivat/al-folio/wiki)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
