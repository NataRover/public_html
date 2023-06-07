<?php
$recepient = "apollo.groupp@yandex.ru, agroupkrd@mail.ru";
$sitename = "'Apollo group - krasnodar ' - Заказ прайс листа";


$tel = trim($_POST["tel"]);


$message = "Номер телефона клиента: $tel\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
