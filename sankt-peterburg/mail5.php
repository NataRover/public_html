<?php

$recepient = "apollogrouprussia.ru@yandex.ru";
$sitename = "'Apollo group' - Запрос на консультацию от руководителя";


$tel = trim($_POST["tel"]);


$message = "Запрос на консультацию от руководителя\n Номер телефона клиента: $tel\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
