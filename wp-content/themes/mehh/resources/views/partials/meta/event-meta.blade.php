<div class="meta d-flex flex-column gap-2 mb-4">
  @if($date)
    <div class="date d-flex align-items-center gap-2">
      @svg('calendar-duotone')
      {{$date}}
    </div>
  @endif

  @if($time)
    <time class="d-flex align-items-center gap-2">
      @svg('timer-duotone')
      {{$time}}
    </time>
  @endif

  @if($location)
    <div class="location d-flex align-items-center gap-2">
      @svg('location-dot-duotone')
      {{$location}}
    </div>
  @endif
</div>
