<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion de Formularios</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
<style>
    body {
        font-family: "Roboto", sans-serif;
    }

    div {
        width: 30%;
        border: black solid 1px;
        border-radius: 10px;
        padding: 12px;
        margin: 20px auto;
    }

    video{
        width:50%;
    }

    li {
        list-style-type: none;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 6px;


    }

    label {
        width: 90%;

    }

    .error-message {
        color: red;

    }

    img{
        width: 50%;
    }

    input[type="text"],
    input[type="email"],
    input[type="submit"],
    input[type="url"],
    select,
    textarea {
        margin: 3px;
    }
</style>

<body>

    <?php





    // define variables and set to empty values
    $nameErr = $emailErr = $genderErr = $commentErr = $websiteErr = "";
    $title = $name = $email = $gender = $website = "";
    $comment = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        //validacion nombre si esta vacio pide q es requerido si esta lleno llama la funcion "sanear";
        if (empty($_POST["name"])) {

            $nameErr = "Name is required";
        } else {

            $title = "Profile Info";

            $name = test_input($_POST["name"]);
        }

        //email
        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $email = test_input($_POST["email"]);
        }

        //url
        if (empty($_POST["url"])) {
            $websiteErr = "Please insert a valid URL";
        } else {
            $website = test_input($_POST["url"]);
        }

        //comment (me da problema el comment)

        //  if (!isset($_POST["comment"]) || empty($_POST("comment"))){

        //   $commentErr = "Comment is required";
        // } else {

        //      $comment = $_POST["comment"];

        //  } * db_escape($_POST['comment'])

        // if (isset($_POST["comment"])){ 

        //     $message = test_input(($_POST["comment"]));

        // } else  if



        //     if(empty($_POST['_fullMessage'])){ echo "* agrega el campo vacio
        //     "; } }



        if (!isset($_POST["gender"])) {
            $genderErr = "Gender is required";
        } else {
            $gender = test_input($_POST["gender"]);
        }
    }

    ?>


    <div class="form-content">


        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"method="POST" enctype="multipart/form-data"> <!--htmlspecialchars evita q te metan caracteres q no son por script te inyectan codigo-->
                                <h3>Registro de usuario</h3>
            <label for="name">
                Name: <input type="text" name="name" value = "<?php $name ?>"><br>

                <span class="error-message"><?php echo $nameErr ?></span>
            </label>

            <label for="email">

                E-mail: <input type="text" name="email" value = "<?php $email ?>"><br>

                <span class="error-message"><?php echo $emailErr ?></span>
            </label>


            <label for="url">

                Website:<input type='url' name="url"><br>
                <span class="error-message"><?php echo $websiteErr ?></span>
            </label>

            <label for="gender">

                Gender Orientation:<select name="gender">
                    <option selected disabled>Pick an option</option>
                    <option value="Fem">Fem</option>
                    <option value="Masc">Masc</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Non-disclosure">Prefer not to say</option>
                </select>
            </label>

            <label for="comment">Comentarios:</label>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
            

            <input type="file" name="profile-pic" id="profile-pic">

            <input type="submit" value="enviar" name="submit">

            <?php

            

            if (isset($_FILES['profile-pic'])){
                
                
                $imageName=$_FILES['profile-pic']['name'];

                       

                 if (move_uploaded_file($_FILES["profile-pic"]["tmp_name"], "uploaded-files/".$imageName )){
                echo "<h3>El archivo se ha cargado correctamente</h3>";

           ?>

           
            <h3><?php echo $title; ?></h3>
            <ul>
                <li><?php echo $name; ?></li>
                <li><?php echo $email; ?></li>
                <li><?php echo $website; ?></li>
                <li><?php echo $gender; ?></li>
                <li><?php echo $comment = test_input($_POST["comment"]); ?></li>
                <li>Nombre de archivo:<?php echo $imageName; ?></li>
                <li>
                   <img src="uploaded-files/<?php echo $imageName ?>" alt="user profile image">
                   <video src="uploaded-files/<?php echo $imageName ?>"></video>
                </li>

            </ul>

            <?php 
                     $ruta = "user-info/".$name."-".$email.".txt";
                    $archivo = fopen($ruta, "x");
                    $textcontent = "Los datos del usuario son: Nombre: ".$name." Email: ".$email." Web:".$website." Gender: ".$gender." Comentarios: ".$comment." Profile Pic File name: ".$imageName;
                    
                    fwrite($archivo, $textcontent);
                    echo file_get_contents($ruta);

                    fclose($archivo);
                    ?>


        
           <?php
                           
       } else{

               echo "<h3>Lo sentimos ha habido un problema al en el envío de tu formulario, por favor intenta de nuevo</h3>";
           }
        }
?>
            

           

                    
                     
        </form>
    </div>



    <?php



    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data); //quita los slash pa q no te escapen o inyecten code
        $data = htmlspecialchars($data);
        return $data;
    }

    ?>

   



</body>

</html>