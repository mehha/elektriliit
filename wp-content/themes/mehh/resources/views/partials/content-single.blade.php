<div class="entry-content">
  <article @php(post_class())>
    <header>
      <h1 class="entry-title">
        {!! $title !!}
      </h1>

      <div class="d-flex gap-2">
        @include('partials/entry-meta')
        @include('partials/categories')
      </div>
    </header>

    <div class="entry-content">
      @php(the_content())
    </div>

  </article>
</div>
