<!-- if user is logged in, then no need to come to this page -->
<?php
session_start();
  if(isset($_SESSION['username'])){
    header("Location: wifiRough.php");
  }



?>


    <?php  require "./small/headerRegister.php" ?>
    <div class="mega-wrap">
        <div class="wrapper">
            <?php  include "./db/registerDb.php" ?>

            <?php  require "./small/searchNav.php" ?>

            <form action="" class="entire" method="post">

                <div class="register">

                    <h3 id="create">CREATE ACCOUNT</h3>


                    <input type="email" placeholder="Email" name="email" value="" class="inputs" required><br>

                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Should be one number, one uppercase, one lowercase letter, and at least 8 characters"
                        placeholder="Password" name="password" value="" class="inputs" required><br>

                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Should be one number, one uppercase, one lowercase letter, and at least 8 characters"
                        placeholder="Confirm password" name="repeat" value="" class="inputs" required><br>

                    <input type="text" name='username' class="inputs" placeholder="Username" pattern="[a-Z]{4,10}" title="Username should only contain letters e.g Samy and from 4-10 char long"
                        required>

                    <div class="radio-btns">
                        Select your gender
                        <div> <input type="radio" name="genderMale" value="male"> Male<br></div>

                        <div><input type="radio" name="genderFemale" value="female"> Female<br></div>

                        <div><input type="checkbox" name="notifications" value="Notify"> Send me notifications<br></div>
                    </div>
                    <?php
                        if (isset($message)) {
                        echo '<label class="text-danger">'.$message.'</label>';
                        }
                     ?>


                        <input type="submit" name="btnRegister" class="button-filled" value="Register">
                        <p>Already have an account?</p>
                        <a class="button-outlined" type="submit" value="Submit" href="login.php">Sign in</a>


                </div>

            </form>


        </div>

    </div>
    <?php  require "./small/footer.php" ?>