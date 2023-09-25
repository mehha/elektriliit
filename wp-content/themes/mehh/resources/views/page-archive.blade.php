{{--
  Template Name: Archive
--}}

@extends('layouts.app')

@section('content')
    <div class="wrap container" role="document">
      <div class="content">

        @if(has_post_thumbnail())
          <div class="top-image">
            {!! get_the_post_thumbnail(null,'top_image') !!}
          </div>
        @endif

        <div class="main-content-wrapper">
          @include('partials.page-header')
          @includeFirst(['partials.content-page', 'partials.content'])

          @include('forms.dropdown', ['years' => $years, 'active' => isset($_GET['y']) ? intval($_GET['y']) : null])

          @php
          $query_args = array(
              'post_type' => 'post',
              'orderby' => 'date',
              'order' => 'DESC',
              'posts_per_page' => -1,
              'cat' => get_field('category') ? get_field('category') : 5,
              'date_query' => array(
                  array(
                      'year' => isset($_GET['y']) ? intval($_GET['y']) : null,
                  ),
              ),
          );

          $cpt_query = new WP_Query($query_args);
          @endphp

          @while($cpt_query->have_posts()) @php($cpt_query->the_post())
              <div class="article-container d-flex flex-column flex-sm-row gap-3 mb-4 pb-3 border-bottom">
                  @if(has_post_thumbnail())
                      <div class="top-image text-start">
                          {!! get_the_post_thumbnail(null, 'square', ['class' => '']) !!}
                      </div>
                  @endif
                  @include('partials.content')
              </div>
          @endwhile
        </div>
      </div>
    </div>
@endsection
