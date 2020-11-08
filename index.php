<!DOCTYPE html>
<!---Parses a given list of spent purchases for numeric values and adds them up, 
comparing against a given spending limit. -->
<html>
    <head>
        <title> Spending Calculator </title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;300&display=swap" rel="stylesheet">
        <script src="js/app.js"></script>
    </head>
    <body class="text-center">
            
    
        <h1><br> Spending Calculator <br><br></h1>
        <br>
        
        <form>
            <h4>Enter list of purchases:</h4>
            <textarea id="arrField" rows="20" cols="60" placeholder="List items with dollar amounts preceding, for example:&#13&#13$50 Groceries&#13$20 Movies&#13$15 Haircut"></textarea>
        </form>
          
        <br>
        <h3 id="spendingFdbk" class="bg-secondary text-white"></h3>
        <br>
        <button id="calcButton" class="btn btn-outline-info">Calculate</button>
        <br>
        

    
        <footer>
            <hr>
            CST336 Internet Programming - &copy;2020 Josh Hansen
            <br><br>
        </footer>
    </body>
</html>