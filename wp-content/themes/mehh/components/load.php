<?php

$acf_fields = array(
    'seo/seo.php',
    'page/page.php',
    'contact-form/contact-form.php',
    'accordion/accordion.php',
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
