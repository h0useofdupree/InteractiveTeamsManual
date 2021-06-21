<div class="topnav" id="topNav">
    <a href="/" class=" {{ request()->is('/') ? 'active' : 'links' }} ">
        Home
    </a>

    <a href="install" class=" {{ request()->is('install') ? 'active' : 'links' }} ">
        Installation
    </a>
    <a href="tabs">Tabs</a>
    <a href="pers">Personalisierung</a>
    <a href="about" class=" {{ request()->is('about') ? 'active' : 'links' }} ">
        About
    </a>
    <input type="text" placeholder="Suchen.." id="suchbar">
</div>
