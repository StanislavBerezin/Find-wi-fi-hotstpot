<!-- removing all sessions -->
<?php
    session_start();
    unset($_SESSION['username']);
    unset($_SESSION['email']);
    header("Location: wifiRough.php");
?>