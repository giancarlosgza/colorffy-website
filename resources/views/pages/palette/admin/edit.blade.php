@extends('layouts.app')
@section('title', 'Editar Paleta')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-12">
            <div class="card card-form">
                <div class="card-body">
                    <h4>Editar paleta de colores</h4>
                    <!--FORM-->
                    <form method="POST" action="/palettes/edit" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" id="invisible_id" value="{{$palette->id}}" name="palette_id">

                        <div class="form-group">
                            <label for="name">Nombre:</label>
                            <input type="name" class="form-control" value="{{ $palette->name }}" id="name" name="nombre" placeholder="Rojo Fuego, Verde Hoja">
                        </div>

                        <div class="form-group">
                            <label for="color_1">Color 1:</label>
                            <input type="text" class="form-control" value="{{ $palette->color_1 }}" id="color_1" name="color_1" placeholder="#11998e">
                        </div>

                        <div class="form-group">
                            <label for="color_2">Color 2:</label>
                            <input type="text" class="form-control" value="{{ $palette->color_2 }}" id="color_2" name="color_2" placeholder="#38ef7d">
                        </div>

                        <div class="form-group">
                            <label for="color_3">Color 3:</label>
                            <input type="text" class="form-control" value="{{ $palette->color_3 }}" id="color_3" name="color_3" placeholder="#5421rs">
                        </div>

                        <div class="form-group">
                            <label for="color_4">Color 4:</label>
                            <input type="text" class="form-control" value="{{ $palette->color_4 }}" id="color_4" name="color_4" placeholder="#000000">
                        </div>
                        <!--
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Imagen: (Opcional)</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" name="imagen" id="image_name"
                                    aria-describedby="inputGroupFileAddon01">
                                <label class="custom-file-label" for="image_name">Seleccionar Archivo</label>
                            </div>
                        </div>
                        -->
                        <button type="submit" class="btn btn-primary">
                            {{ __('Actualizar') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection