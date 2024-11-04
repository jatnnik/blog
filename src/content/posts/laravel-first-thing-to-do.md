---
title: The first thing I do in a fresh Laravel app
publishDate: 2024-11-04
isDraft: true
---

# The first thing I do in a fresh Laravel app

When I start a new Laravel app, the first thing I usually do is to set some opinionated configurations in the `boot` method of `AppServiceProvider.php`. I put each configuration into it's own method, to keep it clean. The methods can then be called inside `boot`.

## 1. Enable strict mode for Models

```php
protected function configureModels(): void
{
    Model::shouldBeStrict();
}
```

This does three things:

1. Prevent lazy loading
2. Prevent silently discarding attributes
3. Prevent accessing missing attributes

## 2. Configure commands

```php
protected function configureCommands(): void
{
    DB::prohibitDestructiveCommands(
        $this->app->isProduction()
    );
}
```
