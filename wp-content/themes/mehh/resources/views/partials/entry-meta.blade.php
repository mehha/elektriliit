<div class="entry-meta-container mb-3">
  <div class="d-flex gap-2">
    <time class="updated" datetime="{{ get_post_time('c', true) }}">
      {{ get_the_date() }}
    </time>

    <p class="byline author vcard mb-0 d-none">
      <a class="link-primary" href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn">
        {{ get_the_author() }}
      </a>
    </p>
  </div>

  @if($categories)
    <div class="category-list">
      @foreach($categories as $category)
        <a class="link-secondary" href="{{get_category_link($category->term_id)}}">{{$category->name}}</a>
      @endforeach
    </div>
  @endif
</div>

