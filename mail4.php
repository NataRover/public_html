<?php

$recepient = "apollo.groupp@yandex.ru";
$sitename = "'Apollo group' - Запрос на доступ к каталогу проектов";


$tel = trim($_POST["tel"]);
$typecall = trim($_POST["typecall"]);

$message = "Запрос на доступ к каталогу проектов\n Номер телефона клиента: $tel\nОтправить через: $typecall";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
