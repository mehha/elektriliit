<header class="banner fixed-top">
  @if (has_nav_menu('top_navigation'))
    <nav class="navbar navbar-top d-flex navbar-expand">
      <div class="container">
        <div class="navbar-top-left">
          @php(dynamic_sidebar('sidebar-header'))
        </div>
        <div class="navbar-top-right d-flex align-items-center gap-2">
          @if(is_user_logged_in())
            <div aria-label="{{ wp_get_nav_menu_name('top_protected_navigation') }}">
              {!! wp_nav_menu(['theme_location' => 'top_protected_navigation', 'menu_class' => 'navbar-nav me-auto mb-0', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
            </div>
          @endif

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
          <img width="158" height="78" alt="Logo" src="@asset('/images/logo.png')"/>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrimary"
              aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      @if (has_nav_menu('primary_navigation'))
        <div id="navbarPrimary" class="collapse navbar-collapse justify-content-start"
             aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-nav me-auto mb-2 mb-lg-0', 'after' => '<button class="expander border-0 bg-transparent p-0" aria-label="'.__('expander', 'eklips_lang').'"><span class="visually-hidden">Expander</span></button>', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
        </div>
      @endif

    </div>
  </nav>
</header>
