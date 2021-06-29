<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    {{-- App Meta --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <meta charset="utf-8">

    {{-- Fonts --}}
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">

    {{-- ChatBot Meta --}}
    <meta name="description">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
</head>

<body>
    <header>
        @include('layouts.header')
    </header>

    @yield('content')
    {{-- <footer>
        @include('layouts.footer')
    </footer> --}}

</body>

</html>
