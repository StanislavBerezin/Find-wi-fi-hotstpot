<?php
    if(isset($_POST["submitsearch"])){
        try{
            $pdo = new PDO('mysql:host=localhost;dbname=hotspot_database', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $statement = $pdo->query('SELECT name, address FROM items WHERE name LIKE $_POST[$selectname], 
            AND suburb LIKE $_POST[$selectsuburb], AND suburb LIKE $_POST[$selectpostcode]');
            $data=$statement->fetchAll();
            session_start();
            $_SESSION['searchresults']=$results['$data'];
        }
        } catch(PDOException $e){
            echo $e->getMessage();
        }
    }
    else {
        catch(PDOException $e){
            echo $e->getMessage();
        }
    }
?>