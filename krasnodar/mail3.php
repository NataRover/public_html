<?php

$recepient = "apollo.groupp@yandex.ru, agroupkrd@mail.ru";
$sitename = "'Apollo group - krasnodar ' - Новый вопрос";


$tel = trim($_POST["tel"]);
$answer = trim($_POST["answer"]);

$message = "Номер телефона клиента: $tel\nВопрос: $answer";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
