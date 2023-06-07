<?php

$recepient = "apollo.groupp@yandex.ru";
// $recepient = "Magel1488@gmail.com";
$sitename = "'Apollo group' - Заказ обратного звонка";


$tel = trim($_POST["tel"]);


$message = "Заказ обратного звонка\n Номер телефона клиента: $tel\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
