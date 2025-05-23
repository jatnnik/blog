---
title: The First Thing I Do in a Fresh Laravel App
date: 2024-11-04
---

# The First Thing I Do in a Fresh Laravel App

When I start a new Laravel app, the first thing I usually do is to add some opinionated configurations in the `boot` method of `AppServiceProvider.php`. I put each configuration into it's own method, to keep it clean. The methods can then be called inside `boot`.

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

## 2. Configure Commands

```php
protected function configureCommands(): void
{
    DB::prohibitDestructiveCommands(
        $this->app->isProduction()
    );
}
```

This prohibits destructive DB commands like `db:wipe`, `migrate:fresh`, `migrate:refresh`, `migrate:reset` etc. when the app is in production.

## 3. Configure Dates

```php
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;

// ...

protected function configureDates(): void
{
    Date::use(CarbonImmutable::class);
}
```

Carbon instances are mutable objects by default, which can be a footgun. The above configuration enables immutable dates by default.

> Be aware that you have to use the `Date` facade instead of the `Carbon` class to make use of this.

The `boot` method then calls each method:

```php
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;

// ...

public function boot(): void
{
    // ...
    $this->configureModels();
    $this->configureCommands();
    $this->configureDates();
}
```

## Update on March 24, 2025

I published a custom starter kit, [Bento](https://github.com/jatnnik/bento), which includes the customizations mentioned in this post and more.
