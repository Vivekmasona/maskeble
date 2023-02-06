<?php
     error_reporting(0);
     $vidUrl = $_SERVER['REQUEST_URI'];
     $videoVid = explode("vkr=", $vidUrl);
     $videoVid = $videoVid[1];
     $vidDe = urldecode($videoVid);
     $vidEn = urlencode($videoVid);
$url = "https://yt-api.caprover.kodokku.xyz/api/trpc/yt.getAudioUrl?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22url%22%3A%22$vidEn%22%7D%7D%7D";

$arrContextOptions=array(
      "ssl"=>array(
            "verify_peer"=>false,
            "verify_peer_name"=>false,
        ),
    );  

$response = file_get_contents($url, false, stream_context_create($arrContextOptions));
$responses = json_decode($response);
header('location:'.$responses[0]->result->data->json->url);
