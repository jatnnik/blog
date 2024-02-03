---
title: Building a sortable table with Laravel and Alpine.js
pubDate: 2024-02-03
published: true
---

For a recent side project, I needed to build a table with sortable headers. This is one of those recurring tasks you have to do again and again – so I finally wrote down how I did it, as a reference for future me.

_Note:_ Normally I would use [Livewire](https://livewire.laravel.com) for this, but sometimes you just need a bit of interactivity in your app and Livewire feels too heavy for that. In such a case, [Alpine AJAX](https://alpine-ajax.js.org/) is a lightweight (4kB), elegant solution.

To get started, you should have a basic controller that fetches your records from the database and passes them to a Blade template.

## Extract a table heading component

To avoid redundancy, create a table heading component.

```html
<!-- The components props. -->
@props([ 'sortable' => null, 'direction' => null, 'field' => null ])

<th scope="col">
  <!-- Not sortable – just show the label. -->
  @unless ($sortable) {{ $slot }} @else
  <!-- Render a form with the sort icon (the svg) inside the submit button. -->
  <form>
    <input
      type="hidden"
      name="orderDirection"
      value="{{ request('orderBy') === $field ? request('orderDirection') === 'asc' ? 'desc' : 'asc' : 'asc' }}"
    />
    <button
      name="orderBy"
      value="{{ $field }}"
      class="group inline-flex items-center space-x-0.5"
    >
      <span>{{ $slot }}</span>
      <span>
        <!-- Display the active sort icon the correct way. -->
        @if ($direction === 'asc')
        <svg
          class="h-4 w-4 rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
        @elseif ($direction === 'desc')
        <svg
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
        @else
        <!-- If the current field is sortable but the table isn't ordered by the field right now, only show the icon on hover. -->
        <svg
          class="h-4 w-4 rotate-180 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
        @endif
      </span>
    </button>
  </form>
  @endunless
</th>
```

Replace every `th` in your table with the new component:

```html
<!-- Before -->
<th scope="col">Name</th>

<!-- After -->
<x-table.heading
  sortable
  field="name"
  :direction="request('orderBy') === 'name' ? request('orderDirection') : null"
>
  Name
</x-table.heading>
```

## Do the sorting

Next, let's update the controller to actually order the records (in my case, a Customer model) by the provided field and direction:

```php
class CustomerController extends Controller
{
    public function index(Request $request): View
    {
        // Use the 'name' field for default ordering.
        $sortField = $request->input('orderBy', 'name');
        // Use 'asc' as default order direction.
        $sortDirection = $request->input('orderDirection', 'asc');

        $customers = Customer::orderBy($sortField, $sortDirection)->get();

        return view('customers.index', compact('customers'));
    }
}
```

This will already work – but everytime you click a sort button, the whole page will reload. Let's improve this by adding Alpine AJAX.

## Improve UX with Alpine AJAX

First, install `alpinejs` and `@imacrayon/alpine-ajax` using your package manager:

```bash
npm i alpinejs @imacrayon/alpine-ajax
```

Then initialize it from your bundle (probably `app.js`):

```js
import Alpine from "alpinejs";
import ajax from "@imacrayon/alpine-ajax";

window.Alpine = Alpine;

Alpine.plugin(ajax);
Alpine.start();
```

Enable AJAX behavior by adjusting the table heading component. Add another prop and some simple attributes to the `form`:

```html
<!-- Old props -->
@props([ 'sortable' => null, 'direction' => null, 'field' => null ])

<!-- New props -->
@props([ 'sortable' => null, 'direction' => null, 'field' => null, 'target' =>
null ])

<!-- Old form -->
<form>...</form>

<!-- New form -->
<form x-init x-target="{{ $target }}" x-target.replace>...</form>
```

Don't forget to pass the target ID to the table heading component:

```html
<!-- Before -->
<x-table.heading
  sortable
  field="name"
  :direction="request('orderBy') === 'name' ? request('orderDirection') : null"
  target="customer-table"
>
  Name
</x-table.heading>
```

Here's a short explanation what these attributes do:

- `x-init` enables Alpine.js for the form
- `x-target` tells Alpine AJAX which DOM element we want to update by using it's `id`
- `x-target.replace` replaces the current URL with the new one – handy for sharing/saving links to a sorted table

Behind the scenes, Alpine AJAX will perform the `GET` request to the "new" page and replace the target element with the new element.
