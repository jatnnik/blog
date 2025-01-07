---
title: Fixing the Backspace Key in Ghostty SSH Sessions
publishDate: 2025-01-07
isDraft: false
---

# Fixing the Backspace Key in Ghostty SSH Sessions

[Ghostty](https://ghostty.org/) is a fantastic new terminal emulator that has just been released. It's fast, customizable and just a pleasure to use.  

Today I noticed that the backspace key in an SSH session didn't work as expected. Instead of deleting characters, it was creating whitespaces.
Turns out that can happen if the `TERM` environment variable isn't set. A simple fix is to run `export TERM=xterm` in the remote session.