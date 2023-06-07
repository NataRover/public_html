<?php
$recepient = "apollogrouprussia.ru@yandex.ru";
$sitename = "'Apollo group' - Вызов замерщика";


$tel = trim($_POST["tel"]);


$message = "Вызов замерщика\n Номер телефона клиента: $tel\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
