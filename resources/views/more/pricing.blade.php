@extends('layouts.app')
@section('title', 'Pricing')
@section('content')
<div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h3 class="text-montserrat text-indigo">Pricing</h3><br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="card card-form">
                    <div class="card-body text-left">
                        <h3 class="text-montserrat text-center">Free</h3>
                        <h3 class="text-montserrat  color-indigo text-center">$0 USD</h3>
                        <h6 class="text-center">No account.</h6>
                        <br>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Access to every Colorffy's tools</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Color codes for Colorffy gradients</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Color blindness filter for Colorffy gradients and palettes.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> Save your favorites gradients and palettes.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> Create and save unlimited gradients.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> No ads in the website.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> Preview icons with color palettes & colors from images.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> Access to templates.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> No account.</h6>
                        <hr>
                        <a href="/" class="btn btn-secondary btn-block shadow-medium">Browse</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card card-form">
                    <div class="card-body text-left">
                        <h3 class="text-montserrat text-center">1 Month</h3>
                        <h3 class="text-montserrat text-indigo text-center">$2.99 USD</h3>
                        <h6 class="text-center">No subscription. Only pay for the month that you want to use Colorfy.</h6>
                        <br>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Access to every Colorffy's tools.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Save your favorites gradients and palettes.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Color codes for every gradient, personal gradients and palettes.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Color blindness filter for every gradients, saved gradients and palettes.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Create and save unlimited gradients.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> No ads in the website.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Preview icons with color palettes & colors from images.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Access to templates.</h6>
                        <h6><i class="fas fa-times-circle text-danger"></i> Forever</h6>
                        <hr>
                        <a href="/register" class="btn btn-primary btn-block shadow-medium">Join Colorffy</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card card-form">
                    <div class="card-body text-left">
                        <h3 class="text-montserrat text-center">Lifetime</h3>
                        <h3 class="text-montserrat text-indigo text-center">$35 USD</h3>
                        <h6 class="text-center">Only one payment forever.</h6>
                        <br>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Access to every Colorffy's tools.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Save your favorites gradients and palettes.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Color codes for every gradient, personal gradients and palettes.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Color blindness filter for every gradient, saved gradients and palettes.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Create and save unlimited gradients.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> No ads in the website.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Preview icons with color palettes & colors from images.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Access to templates.</h6>
                        <h6><i class="fas fa-check-circle text-indigo"></i> Forever</h6>
                        <hr>
                        <a href="/register" class="btn btn-secondary btn-block shadow-medium">Join Colorffy</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection