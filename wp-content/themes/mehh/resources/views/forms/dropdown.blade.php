<div class="dropdown mt-4 mb-5">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      @if($active) {{$active}}@else {{ __('Filter by Year', 'sage') }} @endif
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="{{ get_permalink() }}">{{ __('All Years', 'sage') }}</a></li>
        @foreach ($years as $year)
            <li><a class="dropdown-item @if($year == $active) active @endif" href="{{ get_permalink() }}?y={{ $year }}">{{ $year }}</a></li>
        @endforeach
    </ul>
</div>
