---
title: How to set up Pint as PHP formatter in Zed
publishDate: 2024-07-16
isDraft: false
---

# How to set up Pint as PHP formatter in Zed

Just as [Pint](https://github.com/laravel/pint) is an excellent formatter for PHP files,
[Zed](https://zed.dev) is an excellent new code editor that I mostly use these days.

Since there's no official plugin yet, it's a bit tricky to set up Pint as the default formatter for PHP files.
You can set it up by adding this snippet to `.zed/settings.json`:

```json
{
  "languages": {
    "PHP": {
      "formatter": {
        "external": {
          "command": "bash",
          "arguments": [
            "-c",
            "temp=$(mktemp) && cat > $temp && ./vendor/bin/pint --quiet $temp && cat $temp"
          ]
        }
      }
    }
  }
}
```
