<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/iterateJSON.js') }}"></script>
    <title>Test Output</title>
</head>

<body>
    <div class="content">
        <div class="headers">
            <h3 id="header"></h3>
        </div>
        <div class="texts">
            <p id="text"></p>
        </div>
        <div class="pictures">
            <img id="img">
        </div>
        <div class="pages">
            <p id="page"></p>
        </div>
    </div>
    <div class="buttons">
        <button onclick="nextArticle()">Next</button>
        <button onclick="prevArticle()">Previous</button>
    </div>
</body>


</html>
