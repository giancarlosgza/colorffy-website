@extends('layouts.app')
@section('title', 'Palettes')
@section('googleads')
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
@endsection
@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-12"> 
            <h4 class="font-weight-bold text-indigo">Palettes</h4>
        </div>
        <div class="col-sm-12">
            <form action="" method="get">
                <div class="input-group mb-3">
                    <input type="text" name="q" id="query" value="{{ $searchQuery }}" class="form-control search-input"
                        placeholder="Search something cool...." aria-label="Search something...." aria-describedby="button-addon2">
                    <div class="input-group-append ml-2">
                        <button class="btn btn-primary btn-sm btn-round my-0" type="submit" id="button-addon2"><i class="material-icons">search</i></button>
                    </div>
                </div>
            </form>
            <div class="table-responsive">
                <table class="table table-borderless table-sm">
                    <thead>
                        @foreach($filters as $filter)
                            <th scope="col">
                                <a class="btn btn-round btn-outline ripple ripple-dark" href="{{ route('palettesCatalog', ['q' => $filter]) }}">
                                    <div class="h6-responsive">{{ $filter }}</div>
                                </a>
                            </th>
                        @endforeach   
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>
<br>
<div class="container">
    <div class="row">
        <div id="imgNotResult" class="col-12 text-center d-none">
            <img src="{{asset('assets/img/illustrations/search_engine.svg')}}" width="200px" alt="">
            <br><br>
            <h3>Sorry, we couldn't find any palette with that name.....</h3>
        </div>
        <div class="col-12 col-md-4 col-lg-3 text-center mb-3">
            @guest
            <br>
            <!-- colorffy_ads_md -->
            <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEBI6K7Y&placement=wwwcolorffycom" id="_carbonads_js"></script>
            @else
            @endguest
        </div>
        @foreach($palettes as $palette) 
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card">
                <div class="card-body">
                    <h6 class="text-center text-uppercase h6-responsive">{{$palette->name}}</h6>
                    <a href="/palettes/{{$palette->id}}" title="{{$palette->name}}">
                        <ul class="list-group card-palette">
                            <li class="list-group-item list-palette" style="background-color:{{$palette->color_1}}"></li>
                            <li class="list-group-item list-palette" style="background-color:{{$palette->color_2}}"></li>
                            <li class="list-group-item list-palette" style="background-color:{{$palette->color_3}}"></li>
                            <li class="list-group-item list-palette" style="background-color:{{$palette->color_4}}"></li>
                            <li class="list-group-item list-palette" style="background-color:{{$palette->color_5}}"></li>
                        </ul>
                    </a>
                    <div class="row">
                        <div class="col-4 col-sm-6 col-md-4">
                            @if(Auth::user())
                            <div id="fav-heart-palette-{{$palette->id}}" class="text-left align-self-end fav-heart @if($user->favoritePalettes->contains($palette)) active-heart @endif" onclick="event.preventDefault(); newFavoritePalette({{$palette->id}})"><i class="material-icons">favorite</i></div>
                        </div>
                        <div class="col-8 col-sm-6 col-md-8">
                            <div id="fav-count-palette-{{$palette->id}}" class="text-right align-self-end text-primary font-weight-bold">
                                @if($palette->usersWhoFav->count() == 1) 
                                {{ $palette->usersWhoFav->count() }} like
                                @else
                                {{ $palette->usersWhoFav->count() }} likes
                                @endif 
                            </div>
                            @else
                            <a href="/favorites/palettes" title="Like palette"><i class="material-icons">favorite</i></a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    <div class="row my-3">
        <div class="col-12 col-md-12">
            {{ $palettes->appends($_GET)->onEachSide(1)->links()  }}
        </div>
    </div>
    <div class="row text-center justify-content-center">
        <div class="col-sm-12">
            @guest
            <br>
            <!-- colorffy_ads_md -->
            <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-5211873894116133"
            data-ad-slot="3087365012"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
            <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            @else
            @endguest
        </div>
    </div>
</div>
@endsection
@section('scripts') 
<script>
    function newFavoritePalette(paletteId) {
        $.post('{{route("storeFavPalette")}}', {
            paletteId: paletteId,
        }).done(response => {
            //alert(response.msg)
            const FAV_COUNT_ELEM = $('#fav-count-palette-' + paletteId)
            const FAV_HEART_ELEM = $('#fav-heart-palette-' + paletteId)
            let newCount = response.code == 0 ? (parseInt(FAV_COUNT_ELEM.html()) - 1) : (parseInt(FAV_COUNT_ELEM.html()) + 1) ;
            
            FAV_HEART_ELEM.toggleClass('active-heart')
            FAV_COUNT_ELEM.html( newCount );
        })
    }
</script>
<script>
    //NOT RESULT FOUND
    @if( $palettes->count() < 1 )
        $('#imgNotResult').removeClass('d-none');
    @endif
  </script>
@endsection