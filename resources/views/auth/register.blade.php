@extends('layouts.app')
@section('title', 'Register')
@section('styles')
<link type="text/css" rel="stylesheet" href="{{ asset('assets/css/register.css') }}">
@endsection
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="card card-form">
                <div class="card-body">
                    <h4 class="logo text-center color-blue">Colorffy</h4>
                    <h5 class="text-center">Register</h5>
                    <br>
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="form-group">
                                <label for="name" class="bold"><i class="fas fa-user"></i> {{ __('Name') }}</label>
                                    <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}"
                                        name="name" value="{{ old('name') }}" placeholder="Name" required autofocus >    

                                <span id="name-error" class="invalid-feedback @if(!$errors->has('name')) d-none @endif" role="alert">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="username" class="bold"><i class="fas fa-user-tag"></i> {{ __('Username') }}</label>
                                <input id="username" type="text" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}"
                                    name="username" value="{{ old('username') }}" placeholder="Username" required>
                                <span id="username-error" class="invalid-feedback @if(!$errors->has('username')) d-none @endif" role="alert">
                                    <strong>{{ $errors->first('username') }}</strong>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="email" class="bold"><i class="fas fa-envelope"></i> {{ __('E-Mail') }}</label>
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                    name="email" value="{{ old('email') }}" placeholder="Email" required>
                                <span id="email-error" class="invalid-feedback @if (!$errors->has('email')) d-none @endif" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="password" class="bold"><i class="fas fa-lock"></i> {{ __('Password') }}</label>
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                    name="password" placeholder="Password" required>

                                <span id="password-error" class="invalid-feedback @if (!$errors->has('password')) d-none @endif" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="password-confirm" class="bold"><i class="fas fa-lock"></i> {{ __('Confirm
                                    Password') }}</label>
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                                placeholder="Confirm Password" required>

                                <span id="password-confirm-error" class="invalid-feedback d-none" role="alert"></span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="disable-payments-overlay"></div>
                    <div class="form-group row">
                        <div class="col-sm-12 col-md-6">
                            <p class="bold">Register and pay monthly: $2.99 USD</p>
                            <div id="monthly-paypal-button-container"></div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <p class="bold">Register and once in a lifetime: $35 USD</p>
                            <div id="lifetime-paypal-button-container"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <hr>
                        <a class="btn btn-link" href="{{ route('login') }}">
                            {{ __('Already have an account? Login!') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-form">
                <div class="card-body">
                    <h5 class="bold">Join Colorffy and become Pro</h5>
                    <hr>
                    <h5>❤️ Save your <strong>favorites gradients</strong></h5>
                    <h5>💚 Save your <strong>favorites palettes</strong></h5>
                    <h5>👓 Access to <strong>color blindness</strong> filter</h5>
                    <h5>🙆‍♂️ <strong>Save gradients</strong> created with generators</h5>
                    <h5>🎨 <strong>Preview icons</strong> with color palettes</h5>
                    <h5>🎁 <strong>Access</strong> to icons, backgrounds and illustrations (coming soon)</h5>
                    <h5>📧 Do you want some <strong>feature? <a href="mailto:colorffy@gmail.com" class="color-darkblue" title="Contact Us">request here!</a></strong></h5>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript" src="{{ asset('js/validation.js') }}"></script>
    <script>
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '{{ env('MONTHLY_PRICE') }}'
                        }
                    }]
                })
            },
            onApprove: (data, actions) => {
                return actions.order.capture()
                    .then(details => registeringRequest(data))
                    .catch(details => {
                        swal("Payment connection failed", `{{ __('There was an error connecting to the payments platform. We are investigating, please, reload the page or try again later.') }}`,
                            "warning")
                        console.log(details)
                    }) //TODO: handling
            }
        }).render('#monthly-paypal-button-container');

        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '{{ env('LIFETIME_PRICE') }}'
                        }
                    }]
                })
            },
            onApprove: (data, actions) => {
                return actions.order.capture()
                    .then(details => registeringRequest(data))
                    .catch(details => {
                        swal("Payment connection failed", `{{ __('There was an error connecting to the payments platform. We are investigating, please, reload the page or try again later.') }}`,
                            "warning")
                        console.log(details)
                    }) //TODO: handling
            }
        }).render('#lifetime-paypal-button-container');

        function registeringRequest(data)
        {
            swal({
                title: 'Thank you!',
                text: '{{ _('Your payment was successful and your account has been created') }}',
                button: {
                    text: 'Loading...',
                    closeModal: false,
                }
            })

            $.ajax({
                type: 'POST',
                url: '{{ route('register')  }}',
                data: {
                    orderId: data.orderID,
                    name: $('input[name="name"]').val(),
                    email: $('input[name="email"]').val(),
                    password: $('input[name="password"]').val(),
                    password_confirmation: $('input[name="password_confirmation"]').val(),
                    username: $('input[name="username"]').val(),
                }
            }).done((response, status) => {
                if (response.success &&
                    status === 'success' &&
                    response.message === 'COMPLETED') {
                    swal.stopLoading()
                    swal.close()
                    window.location = "{{ route('home') }}"
                } else if (!response.success && response.status === 'INCORRECT_FORM') {
                    swal.stopLoading()
                    swal.close()
                    swal('Registration failed', `{{ __('We have registered the error and if payment went through, we will contact you as soon as possible to give you your account manually.') }}`,
                        'error')
                } else {
                    swal.stopLoading()
                    swal.close()
                    swal('Error connecting to server', '{{ __('Error while processing payment') }}', 'error')
                }
            })
        }
    </script>
@endsection