<?php
  $language = $_POST['language'];
  $voice = $_POST['voice'];
  $pdf_file = $_FILES['pdf_file']['tmp_name'];
  $output_file = 'output.mp3';

  $text = shell_exec('pdftotext '.$pdf_file.' -');
  $text = escapeshellarg($text);
  $command = 'text-to-speech '.$text.' '.$language.' '.$voice.' '.$output_file;
  shell_exec($command);

  header('Content-Type: audio/mpeg');
  header('Content-Disposition: attachment; filename="output.mp3"');
  readfile($output_file);
?>
