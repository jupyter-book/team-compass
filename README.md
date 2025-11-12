# The Jupyter Book Team Compass

✨ Live site: [compass.jupyterbook.org](https://compass.jupyterbook.org).
📚 Source files: [`docs/`](docs/)

## Build the documentation locally

This site is built with [the MyST Document Engine](https://mystmd.org).

### Option 1: Using Nox (recommended)

If you have [Nox](https://nox.thea.codes/) installed:

```bash
# Start a live preview server
nox -s docs-live

# Or build the static HTML
nox -s docs

# Clean build artifacts
nox -s clean
```

### Option 2: Manual setup

To build it manually:

1. Install MyST from PyPI:

   ```
   pip install mystmd
   ```
2. Clone the repository and change into the `docs/` folder:

   ```
   git clone https://github.com/jupyter-book/team-compass
   cd team-compass/docs
   ```
3. Start the MyST server:

   ```
   myst start
   ```

For more information on building sites with MyST, see [the MyST Guide](https://mystmd.org/guide).

## Where this site is hosted

The live site is hosted in the Jupyter Book Netlify account.
