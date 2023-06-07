<?php

$recepient = "apollo.groupp@yandex.ru";
$sitename = "'Apollo group' - Новый вопрос";


$tel = trim($_POST["tel"]);
$answer = trim($_POST["answer"]);

$message = "Новый вопрос\n Номер телефона клиента: $tel\nВопрос: $answer";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
