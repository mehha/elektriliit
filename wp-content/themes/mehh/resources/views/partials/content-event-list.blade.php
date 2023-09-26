<article @php(post_class())>
  <header>
    <h2 class="entry-title mb-3">
      <a href="{{ get_permalink() }}">
        {!! $title !!}
      </a>
    </h2>
  </header>

  @include('partials.meta.event-meta')

  <div class="entry-summary">
    @php(the_excerpt())
  </div>

  <a href="{{ get_permalink() }}" class="btn btn-primary">{{__('Read More', 'sage')}}</a>
</article>
