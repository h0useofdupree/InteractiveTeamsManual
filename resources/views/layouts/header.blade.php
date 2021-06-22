<link rel="stylesheet" href="css/home.css">
<div class="container">
    <a href="/" class="{{ request()->is('/') ? 'active' : 'links' }}">Home</a>

    <a href="/manuals/install" class="{{ request()->is('install') ? 'active' : 'links' }}">
        Installation
    </a>

    <a href="/manuals/tabs" class="{{ request()->is('tabs') ? 'active' : 'links' }}">
        Tabs
    </a>

    <a href="/manuals/pers">
        Personalisierung
    </a>

    <a href="about" class="{{ request()->is('about') ? 'active' : 'links' }}">
        About
    </a>
    <input type="text" placeholder="Suchen.." id="suchbar">
</div>
