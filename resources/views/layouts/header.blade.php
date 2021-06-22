<div class="container">
    <a href="/" class="{{ request()->is('/') ? 'active' : '' }}">Home</a>

    <a href="/manuals/install" class="{{ request()->is('install') ? 'active' : '' }}">
        Installation
    </a>

    <a href="/manuals/tabs" class="{{ request()->is('tabs') ? 'active' : '' }}">
        Tabs
    </a>

    <a href="/manuals/pers" class="{{ request()->is('pers') ? 'active' : '' }}">
        Personalisierung
    </a>

    <a href="about" class="{{ request()->is('about') ? 'active' : '' }}">
        About
    </a>
    <input type="text" placeholder="Suchen.." id="suchbar">
</div>
