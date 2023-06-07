<?php

$recepient = "apollo.groupp@yandex.ru";
$sitename = "'Apollo group' - Заполнен квиз";


$tel = trim($_POST["tel"]);
$type = trim($_POST["type"]);
$region = trim($_POST["region"]);
$square = trim($_POST["square"]);
$reconstruct = trim($_POST["reconstruct"]);
$ready = trim($_POST["ready"]);
$social = trim($_POST["social"]);

$message = "
\nЗаполнен квиз\n
\nКакого объекта вас интересует ремонт: $type
\nВ каком районе вы проживаете: $region
\nОбщая площадь помещения: $square
\nКакой ремонт вас интересует: $reconstruct
\nКогда готовы начать: $ready
\nКуда вам направить предварительные расчёты: $social
\nНомер телефона клиента: $tel";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
