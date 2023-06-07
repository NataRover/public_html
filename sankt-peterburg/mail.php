<?php
$recepient = "apollogrouprussia.ru@yandex.ru";
$sitename = "'Apollo group' - Заказ сметы";


$tel = trim($_POST["tel"]);


$message = "Заказ сметы\n Номер телефона клиента: $tel\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
