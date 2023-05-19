<?php

$acf_fields = array(
    'seo/seo.php',
    'page/page.php',
    'members-area/members-area.php',
    'contact-form/contact-form.php',
    'accordion/accordion.php',
    'carousel/carousel.php',
);

foreach ($acf_fields as $key => $field) {

    require_once __DIR__ .'/'.$field;
}
