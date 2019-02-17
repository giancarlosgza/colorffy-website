@extends('layouts.app')
@section('title', 'Edit Gradient')
@section('content')
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/jquery.minicolors.css') }}">

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-form">
                <div class="card-body">
                    <h4 class="bold">🆙 Edit Gradient</h4>
                    <!--FORM-->
                    <form method="POST" action="/gradients/edit" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" id="invisible_id" value="{{$gradient->id}}" name="gradient_id">

                        <div class="form-group">
                            <label for="name" class="bold">Name:</label>
                            <input type="name" id="name" value="{{ $gradient->name }}" name="nombre" class="form-control{{ $errors->has('nombre') ? ' is-invalid' : '' }}" >
                        </div>

                        <div class="form-group">
                            <label for="color_1" class="bold">Color 1:</label>
                            <input type="text" id="color_1" value="{{ $gradient->color_1 }}" name="color_1" class="hexcolor form-control{{ $errors->has('color_1') ? ' is-invalid' : '' }}" >
                        </div>

                        <div class="form-group">
                            <label for="color_2" class="bold">Color 2:</label>
                            <input type="text" id="color_2" value="{{ $gradient->color_2 }}" name="color_2" class="form-control{{ $errors->has('color_2') ? ' is-invalid' : '' }}" >
                        </div>

                        <div class="form-group">
                            <label for="color_filter" class="bold">Color Filter:</label>
                            <select id="color_filter" value="{{ $gradient->color_filter }}" class="form-control{{ $errors->has('color_filter') ? ' is-invalid' : '' }}"  name="color_filter">
                                <option>Red</option>
                                <option>Green</option>
                                <option>Blue</option>
                                <option>Cyan</option>
                                <option>Purple</option>
                                <option>Yellow</option>
                                <option>Orange</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Pink</option>
                                <option>Brown</option>
                                <option>Grey</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="color_filter_2" class="bold">Color Filter 2:</label>
                            <select id="color_filter_2" value="{{ $gradient->color_filter_2 }}" class="form-control{{ $errors->has('color_filter_2') ? ' is-invalid' : '' }}"  name="color_filter_2">
                                <option>Red</option>
                                <option>Green</option>
                                <option>Blue</option>
                                <option>Cyan</option>
                                <option>Purple</option>
                                <option>Yellow</option>
                                <option>Orange</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Pink</option>
                                <option>Brown</option>
                                <option>Grey</option>
                            </select>
                        </div><br>
                        <button type="submit" class="btn btn-primary button-block shadow-medium">
                            {{ __('Update') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
<script type="text/javascript" src="{{ asset('assets/js/jquery.minicolors.js') }}"></script>
 <script type="text/javascript">
     $(document).ready(function(){
        $('.hexcolor').mask('SAAAAAA', {
            'translation': {
                S: {
                    pattern: /[#]/
                },
                A: {
                    pattern: /[A-Fa-f0-9]/
                }
            }
        });
    });
    $('#color_1').minicolors({ animationEasing: 'swing'});
    $('#color_2').minicolors({ animationEasing: 'swing'});
 </script>   
@endsection