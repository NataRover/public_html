<?php
$recepient = "apollo.groupp@yandex.ru";
$sitename = "'Apollo group' - Заказ прайс листа";


$tel = trim($_POST["tel"]);


$message = "Заказ прайс листа\n Номер телефона клиента: $tel\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
