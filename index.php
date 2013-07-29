<?php 
    $root = realpath($_SERVER["DOCUMENT_ROOT"]);
    $path = $root . "/quinnbridal";
    include "$path/header.php";
?>

        <dic id="container">
            <ul id="nav" class="brandon-grotesque">
                    <li id="designer"><a href="#designer" title"Designer">Designer</a></li>
                    <li id="clients"><a href="#clients" title"Clients">Clients</a></li>
                    <li id="logo-small"><a href="#home" title="QUINN Bridal"><img src="img/quinn-logo-small.png"></a></li>
                    <li id="process"><a href="#process" title"Process">Process</a></li>
                    <li id="contact"><a href="#contact" title"Contact">Contact</a></li>
            </ul>
            <div id="page">
                <?php include "$path/home.php"; ?>
            </div>
        </div>

<?php
    include "$path/footer.php";
?>