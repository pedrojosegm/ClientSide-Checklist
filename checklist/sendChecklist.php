<?php

$sendTo = "pedro.gonzalez@possible.com";//"jonathan.ramirez@possible.com,alberto.gil@possible.com,francisco.martinez@possible.com";

$subject = "Client-Side Checklist: A project has been checked!";

$sender = $mail;

$additionalSendTo = $more_emails;

$message = "

Project Name: $project

Project Manager: $pm

Developer Name: $developer

E-mail Adress: $mail


----------------------------------------------------
HTML Validation: $html_validation
Notes about HTML: $html_notes


JSlint: $jslint
Notes about JSlint: $jslint_notes


Minify CSS and JS for production: $minify
Notes about Minify: $minify_notes


Google PageSpeed: $google_pagespeed
Notes about Google PageSpeed: $pagespeed_notes


Image optimization: $image_opt
Notes about Image optimization: $image_notes


Check in all browsers: $browsers
Notes about browsers: $browsers_notes
";

mail($sendTo,$subject,$message,"From:$sender");

include("checklistSent.html");

?>