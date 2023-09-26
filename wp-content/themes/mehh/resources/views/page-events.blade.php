{{--
  Template Name: Events archive
--}}

@extends('layouts.app')

@section('content')
    <div class="wrap container-narrow" role="document">
      <div class="content">

        @if(has_post_thumbnail())
          <div class="top-image">
            {!! get_the_post_thumbnail(null,'top_image') !!}
          </div>
        @endif

          @php
          $query_args = array(
            'post_type' => 'events',
            'post_status' => 'publish',
            'meta_key' => 'begin_date_time',
            'orderby' => 'meta_value',
            'order' => 'ASC',
            'meta_value'   => date( "Y-m-d H:i:s" ),
            'meta_compare' => '>',
            'posts_per_page' => -1,
          );

          $cpt_query = new WP_Query($query_args);

          $query_args_past = array(
            'post_type' => 'events',
            'post_status' => 'publish',
            'meta_key' => 'begin_date_time',
            'orderby' => 'meta_value',
            'order' => 'ASC',
            'meta_value'   => date( "Y-m-d H:i:s" ),
            'meta_compare' => '<',
            'posts_per_page' => -1,
          );

          $cpt_query_past = new WP_Query($query_args_past);
          @endphp

        <div class="main-content-wrapper">
          @include('partials.page-header')
          @includeFirst(['partials.content-page', 'partials.content'])

          <ul class="nav nav-tabs mb-4" id="eventsTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="upcoming-tab" data-bs-toggle="tab" data-bs-target="#upcoming-tab-pane" type="button" role="tab" aria-controls="upcoming-tab-pane" aria-selected="true">{{__('Upcoming events', 'sage')}}</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="past-tab" data-bs-toggle="tab" data-bs-target="#past-tab-pane" type="button" role="tab" aria-controls="past-tab-pane" aria-selected="false">{{__('Past events', 'sage')}}</button>
            </li>
          </ul>
          <div class="tab-content" id="eventsTabContent">
            <div class="tab-pane fade show active" id="upcoming-tab-pane" role="tabpanel" aria-labelledby="upcoming-tab" tabindex="0">
              @while($cpt_query->have_posts()) @php($cpt_query->the_post())
                  <div class="article-container d-flex flex-column flex-sm-row gap-3 mb-4 pb-4 border-bottom">
                      @if(has_post_thumbnail())
                          <div class="top-image text-start">
                              {!! get_the_post_thumbnail(null, 'large', ['class' => '']) !!}
                          </div>
                      @endif
                      @include('partials.content-event-list')
                  </div>
              @endwhile
            </div>
            <div class="tab-pane fade" id="past-tab-pane" role="tabpanel" aria-labelledby="past-tab" tabindex="0">
              @while($cpt_query_past->have_posts()) @php($cpt_query_past->the_post())
                  <div class="article-container d-flex flex-column flex-sm-row gap-3 mb-4 pb-4 border-bottom">
                      @if(has_post_thumbnail())
                          <div class="top-image text-start">
                              {!! get_the_post_thumbnail(null, 'large', ['class' => '']) !!}
                          </div>
                      @endif
                      @include('partials.content-event-list')
                  </div>
              @endwhile
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection
