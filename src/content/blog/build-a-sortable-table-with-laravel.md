---
title: "Building a sortable table with Laravel and HTMX"
pubDate: 2024-02-02
# image: "/posts/2024/cooking-up-my-blog.jpg"
published: false
---

For a recent side project, I needed to build a table with sortable headers. This is one of those recurring tasks you have to do again and again – so I finally wrote down how I did it, as a reference for future me.

```php
<?php

class TableController {
    public function index()
    {
        return view('table.index');
    }
}
```
