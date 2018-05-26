   <!-- the nav bar that is used everywhere, if session username set, then show 1 nav, if not then another -->
   <div class="nav">
      <h1>Wifi hotspots Brisbane</h1>
      
      <?php
       if (isset($_SESSION["username"])) {
           echo "
           <div class='user-here'>
           <p class='welcome-user user-sign'> Username: ".$_SESSION["username"] ."</p>
           <a class='button-filled' href='wifiRough.php'> Search </a>
           <a class='button-filled' href='logout.php'> Logout</a>
           </div>" 
           
            ;
       }else{
           echo "
           <div class='user-here'>
           <a class='button-filled' href='wifiRough.php'> Search </a>
           <a class='button-filled' href='login.php'> Sign in</a>
           <a class = 'button-filled' href='register.php'>Register</a>
           </div>
           ";
       }
         ?>
    </div>