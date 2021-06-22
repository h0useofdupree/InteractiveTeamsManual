<div class="container">
    <a href="/" class="{{ request()->is('/') ? 'active' : 'container' }}">Home</a>

    <a href="/manuals/install" class="{{ request()->is('install') ? 'active' : 'container' }}">
        Installation
    </a>

    <a href="/manuals/tabs" class="{{ request()->is('tabs') ? 'active' : 'container' }}">
        Tabs
    </a>

    <a href="/manuals/pers" class="{{ request()->is('pers') ? 'active' : 'container' }}">
        Personalisierung
    </a>

    <a href="about" class="{{ request()->is('about') ? 'active' : 'container' }}">
        About
    </a>
    <input type="text" placeholder="Suchen.." id="suchbar">
</div>
