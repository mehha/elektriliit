<div class="entry-content">
  <article @php(post_class())>
    <header>
      <h1 class="entry-title">
        {!! $title !!}
      </h1>

      @include('partials.meta.event-meta')
    </header>

    <div class="entry-content">
      @php(the_content())
    </div>

  </article>
</div>
