<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <input id="first" value="10/1/2000" />
    <input id="second" value="1/1/2001" />
    <button type="submit" onclick="alert"  >Submit</button>



    <script>
        function parseDate(str) {
            var mdy = str.split('/');
            return new Date(mdy[2], mdy[0] - 1, mdy[1]);
            // alert("hello")
        }

        function datediff(first, second) {
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        }

        function alert() {
            alert(datediff(parseDate(first.value), parseDate(second.value)));
        }


    </script>

</body>

</html>