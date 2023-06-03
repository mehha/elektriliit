<div class="entry-meta-container mb-3 d-flex gap-2">
  <time class="updated" datetime="{{ get_post_time('c', true) }}">
    {{ get_the_date() }}
  </time>

  @if($categories)
    <div class="category-list">
      @foreach($categories as $category)
        <a class="link-secondary" href="{{get_category_link($category->term_id)}}">{{$category->name}}</a>
      @endforeach
    </div>
  @endif
</div>

