{{--
  Template Name: No container
--}}

@extends('layouts.app')

@section('content')
  @if(has_post_thumbnail())
    <div class="top-image position-relative">
      @include('components.color-overlay')
      <div class="position-absolute start-50 top-50 translate-middle text-white z-1">
        @include('partials.page-header')
      </div>
      {!! get_the_post_thumbnail(null,'top_image') !!}
    </div>
  @endif

  @while(have_posts()) @php(the_post())
    <div class="wrap" role="document">
      <div class="content">
        <div class="main-content-wrapper">
          @if(!has_post_thumbnail())
            @include('partials.page-header')
          @endif
          @includeFirst(['partials.content-page', 'partials.content'])
        </div>
      </div>
    </div>
  @endwhile
@endsection
