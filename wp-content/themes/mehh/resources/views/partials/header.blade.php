<header class="banner fixed-top">
  @if (has_nav_menu('top_navigation'))
    <nav class="navbar navbar-top d-flex navbar-expand">
      <div class="container">
        <div class="navbar-top-left d-flex gap-3 align-items-center">
          @php(dynamic_sidebar('sidebar-header'))
          @if(get_current_blog_id() === 2)
            @include('components.contact-form-modal-btn')
          @endif
        </div>
        <div class="navbar-top-right d-flex align-items-center gap-2">
          <div aria-label="{{ wp_get_nav_menu_name('top_navigation') }}">
            {!! wp_nav_menu(['theme_location' => 'top_navigation', 'menu_class' => 'navbar-nav me-auto mb-0', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
          </div>

          <div class="d-none d-lg-block">
            @include('forms.search-expandable', ['id' => 2])
          </div>
        </div>
      </div>
    </nav>
  @endif

  <nav class="navbar navbar-primary navbar-expand-xl">
    <div class="container">

      <a class="navbar-brand" href="{{ home_url('/') }}" aria-label="{{$siteName}} logo">
        <div class="navbar-brand-inner">
          <img width="140" height="68" alt="Logo" src="@asset('/images/logo.png')"/>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrimary"
              aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      @if (has_nav_menu('primary_navigation'))
        <div id="navbarPrimary" class="collapse navbar-collapse justify-content-end"
             aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-nav me-auto mb-2 mb-lg-0', 'after' => '<button class="expander border-0 bg-transparent p-0" aria-label="'.__('expander', 'eklips_lang').'"><span class="visually-hidden">Expander</span></button>', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
        </div>
      @endif

    </div>
  </nav>
</header>

@if(get_current_blog_id() === 2)
  @include('components.contact-form-modal-body')
@endif
