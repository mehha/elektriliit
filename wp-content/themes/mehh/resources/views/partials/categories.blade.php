@if($categories)
  <div class="category-list">
    @foreach($categories as $category)
      <a href="{{get_category_link($category->term_id)}}">{{$category->name}}</a>
    @endforeach
  </div>
@endif
