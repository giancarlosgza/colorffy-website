@extends('layouts.app')
@section('title', 'Home')
@section('content')
@include('inc.main')
<div class="main">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <form action="" method="get">
                    <div class="input-group mb-3">
                        <input type="text" name="q" id="query" value="{{ $searchQuery }}" class="form-control shadow-medium no-border search-input" placeholder="🔍 Search colors or hexadecimal"
                            aria-label="Search colors or hexadecimal" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-primary shadow-medium" type="submit" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-6">
                <h3 class="text-montserrat text-body">Last Gradients</h3>
            </div>
            <div class="col-6 text-right">
                <a href="/gradients/catalog" class="color-indigo text-montserrat">
                    🔥 View all
                </a>
            </div>
        </div>
        <br>
        <div class="row">
            @foreach($gradients as $gradient)
            <div class="col-6 col-md-3">
                <div class="card shadow-medium">
                    <div class="card-body">
                        <h6 class="bold-500 text-center uppercase h6-responsive">{{$gradient->name}}</h6>
                        <a href="/gradients/{{$gradient->id}}" class="gradient-link">
                            <div class="card text-center">
                                <div class="card-body card-gradient" title="{{$gradient->name}}" 
                                     @if($gradient->color_3)
                                    style="background: linear-gradient(to right, {{$gradient->color_1}}, {{$gradient->color_2}}, {{$gradient->color_3}});">
                                    @else
                                    style="background: linear-gradient(to right, {{$gradient->color_1}}, {{$gradient->color_2}});">
                                    @endif   
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
