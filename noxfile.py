"""Nox sessions for Jupyter Book Team Compass documentation."""

import nox

# Use uv for faster installs
nox.options.default_venv_backend = "uv|virtualenv"


@nox.session(name="docs")
def docs(session):
    """Build the documentation as static HTML."""
    session.chdir("docs")
    session.install("mystmd")
    session.run("myst", "build", "--html", "--strict")


@nox.session(name="docs-live")
def docs_live(session):
    """Start a live development server for the documentation."""
    session.chdir("docs")
    session.install("mystmd")
    session.run("myst", "start")


@nox.session
def clean(session):
    """Clean the documentation build artifacts."""
    session.chdir("docs")
    session.install("mystmd")
    session.run("myst", "clean", "-y")
