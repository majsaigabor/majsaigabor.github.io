<?php
define('SQL_HOST', 'localhost');
define('SQL_USER', 'chriscosql3');
define('SQL_PWD', 'HKkuno11');
define('SQL_DB', 'chriscosql3');

setlocale('LC_ALL', 'hu_HU.utf-8');
require_once('db.lib.php');
my_query("SET NAMES 'utf8'");
$mq = my_query('select * from hirek order by id desc');
include('htmlparser.php');

function ContentExplode ($string) {
    // Create DOM from string
    $html = str_get_html($string);
    if($html->find('dl', 0)) {
      $dt = $html->find('dt');
      //$dd = $html->find('dd');
      $p = array();
      for($i=0;$i<count($dt);$i++) {
       array_push($p,$dt[$i]);
       array_push($p,$dt[$i]->next_sibling());
      }
      $par = $html->find('p');
      foreach($par as $pa) {
        array_push($p,$pa);
      }
    } else {
      $p = $html->find('*');
    }
    return $p;
  }

$data = [];

while($ma = my_fetch_array($mq)) {
    $content = ($ma['tartalom'] != '' ? ContentExplode($ma['tartalom']) : array());
    $count = count($content);
    $tart = '';
    for($i=0;$i<$count;$i++) {
        if(isset($content[$i])) {
            $tart .= $content[$i];
        }
    }
    array_push($data,[ 'id' => $ma['id'], 'content' => $tart, 'type' => $ma['type'] ]);
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);

?>