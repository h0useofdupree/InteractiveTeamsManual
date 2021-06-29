@extends('layouts.app')
@section('content')
    <nav class="navigation">
        <ul class="menu-bar">
            <li class="menu-link"><a href="mainwebsite.php">Home</a></li>
            <li class="menu-link"><a href="#">Installation</a></li>
            <li class="menu-link">
                <a href="tabs.php">Tabs</a>
                <ul class="sub-bar">
                    <li class="sub-link"><a href="Tabs/aktivität.php">Aktivität</a></li>
                    <li class="sub-link"><a href="Tabs/chat.php">Chat</a></li>
                    <li class="sub-link"><a href="Tabs/teams.php">Teams</a></li>
                    <li class="sub-link"><a href="Tabs/aufgaben.php">Aufgaben</a></li>
                    <li class="sub-link"><a href="Tabs/Kalender.php">Kalender</a></li>
                    <li class="sub-link"><a href="Tabs/anrufe.php">Anrufe</a></li>
                    <li class="sub-link"><a href="Tabs/datein.php">Datein</a></li>
                    <li class="sub-link"><a href="Tabs/apps.php">Apps</a></li>
                </ul>
            </li>
            <li class="menu-link"><a href="#">Chatbot</a></li>
        </ul>
        <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>
@endsection
