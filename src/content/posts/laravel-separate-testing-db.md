---
title: Use a separate database for running tests in Laravel
publishDate: 2024-11-06
isDraft: false
---

# Use a separate database for running tests in Laravel

One thing I _always_ stumble upon when creating a new Laravel app (with the Breeze starter kit) is the default behavior when running tests: By default, the whole database will be wiped out and re-created from scratch. This means that all data in the database will be gone after running tests!

One way to fix this is adjusting `phpunit.xml`. It doesn't matter if you use PHPUnit or Pest for testing, they both use this file for configuration. Inside the file, search for these two lines and un-comment them:

```xml
<!-- <env name="DB_CONNECTION" value="sqlite"/> -->
<!-- <env name="DB_DATABASE" value=":memory:"/> -->
```

After that, tests will from now on run in a separate database and no more data will be wiped out.
