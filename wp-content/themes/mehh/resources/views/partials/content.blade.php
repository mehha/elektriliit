<article @php(post_class())>
  <header>
    <h2 class="entry-title">
      <a href="{{ get_permalink() }}">
        {!! $title !!}
      </a>
    </h2>

    <div class="d-flex gap-2">
      @include('partials/entry-meta')
      @include('partials/categories')
    </div>
  </header>

  <div class="entry-summary">
    @php(the_excerpt())
  </div>
</article>
