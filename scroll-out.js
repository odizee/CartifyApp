<!--
<?php
$email="";
$mobile="";
if(isset($_POST['submit']))
{
    $email=$_POST['email'];
    
    $conn=new mysqli("localhost","root", "", "register");
    $cmd="INSERT into reg value('$email');";
    if(mysqli_query($conn, $cmd))
    {
    echo "Successful";
    }
    else
    {
    echo "Not Save";    
    }
}   
?>
-->

