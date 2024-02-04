---
title: Building data tables with Laravel and HTMX
pubDate: 2024-02-04
published: false
---

One thing I need in almost every CRUD project I do is a data table. It's always a bit of a pain for me to build them, because you have to think of so much – pagination, sorting, search etc. I recently found a solution I'm very happy with, and this is how I do it:

## Ingredients

- [Laravel](https://laravel.com)
- [HTMX](https://htmx.org)
- [Tailwind CSS](https://tailwindcss.com)

## The Controller

Create a basic controller with an `index` method that gets the records from the database, orders them and returns either the full view or the table partial, based on if the `hx-request` header exists:.

```php
class CustomerController extends Controller
{
    public function index(Request $request): View
    {
        // Set some defaults for ordering.
        $sortField = $request->input('orderBy', 'name');
        $sortDirection = $request->input('orderDir', 'asc');

        $customers = Customer::orderBy($sortField, $sortDirection)->get();

        /**
         * If the request is a HTMX request and the target is the table
         * container, return just the table partial.
         */
        if ($request->header('hx-request') && $request->header('hx-target') === 'customer-table-container') {
            return view('customers.partials.table', compact('customers'));
        }

        return view('customers.index', compact('customers'));
    }
}
```

## Views and Components

Now we have a controller, let's add the according views. To start with, you need a view structure like this:

```
views
└── customers
    ├── partials
    │   └── table.blade.php
    └── index.blade.php
```

The table itself will be a Blade component that consists of multiple sub-components:

```
components
├── table
│   └── heading.blade.php
└── table.blade.php
```

> TODO: Add contents of the views and components!
