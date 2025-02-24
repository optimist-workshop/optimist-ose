# optimist-ose
This is the repository for https://optimist-ose.org/.

It uses the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

Source code for Minima:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

Source code for Jekyll:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll


# Local development

This repository contains the source code for the Optimist website. This guide explains how to locally build and run the website using **Docker** and **Jekyll**.

---

## 🚀 Prerequisites

Ensure you have the following tools installed:

- [Docker](https://docs.docker.com/get-docker/) (version 20.x or higher)
- [Git](https://git-scm.com/downloads)

---

## 📁 Project Structure

```
optimist-site/
├── docs/
│   ├── _layouts/
│   ├── _posts/
│   ├── _sass/
│   ├── assets/
│   ├── Gemfile
│   ├── Gemfile.lock
│   ├── _config.yml
│   └── index.markdown
└── README.md
```

---

## 🐳 Local Build Using Docker

Follow these steps to run the website locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/optimist-workshop/optimist-ose.git
cd optimist-ose/docs
```

### 2. **Run the Docker Container**

Start a Docker container with Ruby 3.2:

```bash
docker run -v $(pwd):/site -p 4000:4000 -it ruby:3.2 bash
```

### 3. **Install Bundler**

Inside the container, install the correct Bundler version:

```bash
gem install bundler:2.5.23
```

### 4. **Install Dependencies**

Navigate to the `/site` directory and install all Ruby dependencies:

```bash
cd /site
bundle install
```

### 5. **Fix Sass Dependency Issue**

If you encounter issues related to Sass dependencies, run the following command:

```bash
bundle update sass
```

### 6. **Serve the Jekyll Website**

Run the Jekyll server:

```bash
bundle exec jekyll serve --host 0.0.0.0
```

---

## 🌐 Access the Website

Open your browser and go to:

```
http://localhost:4000
```

You should see the website running locally.

