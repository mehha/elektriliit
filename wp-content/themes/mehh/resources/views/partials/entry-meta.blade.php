<div class="entry-meta-container mb-3 d-flex gap-2">
  <time class="updated" datetime="{{ get_post_time('c', true) }}">
    {{ get_the_date() }}
  </time>

  @if($categories)
    <div class="category-list">
      @foreach($categories as $category)
        <span class="text-secondary">{{$category->name}}</span>
      @endforeach
    </div>
  @endif
</div>

