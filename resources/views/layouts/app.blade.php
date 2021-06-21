<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <link rel="stylesheet" href="css/home.css">
    <meta charset="utf-8">
    <title></title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap" rel="stylesheet">
    {{-- @include('main.header') --}}
</head>

<body>
    <header>
        @include('layouts.header')
    </header>
    {{-- @include('main.home') --}}
    <form method="post" action="#">

        @yield('content')

        <footer>
            @include('layouts.footer')
        </footer>

</body>

</html>
