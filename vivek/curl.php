<?php
     error_reporting(0);
        $vidUrl = $_SERVER['REQUEST_URI'];
$videoVid = explode("vfy=https://youtu.be/", $vidUrl);
        $videoVid = $videoVid[1];
        $vidDe = urldecode($videoVid);
        $vidEn = urlencode($videoVid);
$url = "https://ssyoutube.com/api/convert?url=https://youtu.be/$vidDe";
if(!empty($vidDe)){
               
               $curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Content-Type: application/json",
   "Content-Length: 0",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
 $jsonData = json_decode($resp);
              
    
    //collecting basic data 
  
       
  $playLink = $jsonData->url[11]->url;
              
         $playLinkk00 = $jsonData->mp3Converter;
if (!empty($playLink00)) {
header("location: $playLink00");
}elseif (!empty($playLink)) {
header("location: $playLink");
}
}
else echo "<h1>Error Please Check Url </h1>";
   ?>

