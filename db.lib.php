<?php



#


function my_query ($query, $debug = false)
{
	if (!$link = mysql_pconnect (SQL_HOST, SQL_USER, SQL_PWD)) {
			echo 'Could not connect to mysql';
			exit;
	}

	if (!mysql_select_db(SQL_DB, $link)) {
			echo 'Could not select database';
			exit;
	}

	$sql    = $query;
	$result = mysql_query($sql, $link);

	if (!$result) {
			echo "DB Error, could not query the database\n";
			echo 'MySQL Error: ' . mysql_error();
			exit;
	}
	if ($debug) {
		$tmp = mysql_query($sql, $link);
		echo "<hr>$query<hr>" . mysql_error ();
		return $tmp;
	} else {	
		return $result;
	}
}


#


function my_fetch_row ($res)
{
	return mysql_fetch_row ($res);
}


#


function my_num_rows ($res)
{
	return mysql_num_rows ($res);
}


#


function my_fetch_array ($res)
{
	return mysql_fetch_array ($res);
}


#


function my_ff ($query)
{
	$row = my_fetch_row (my_query ($query));
	return $row[0];
}


#


function my_row ($query)
{
	return my_fetch_row (my_query ($query));
}


#


function my_array ($query)
{
	return my_fetch_array (my_query ($query));
}


#


function last_insert_id ($table_name = '')
{
	//return my_ff ("select id from $table_name order by id desc");
	return my_ff ('select last_insert_id()');
}


#



function my_quid ($query)
{
	my_query ($query);
	return last_insert_id ();
}


#


function next_pos ($table_name, $where = '')
{
	if (! empty ($where)) $where = "where $where";
	$last_pos = my_ff ("select pos from $table_name $where order by pos desc");
	$next_pos = (! empty ($last_pos)) ? $last_pos + 1 : 1;
	return $next_pos;
}


#


function field_move ($table_name, $id, $way, $where = '')
{
	$old_pos = my_ff ("select pos from $table_name where id = '$id'");
	$pos = $old_pos + $way;
	if (! empty ($where)) $where = " and $where";
	$old_id = my_ff ("select id from $table_name where pos = '$pos' $where");
	if ($pos && $pos < next_pos ($table_name))
	{
		my_query ("update $table_name set pos = '$pos' where id = '$id'");
		my_query ("update $table_name set pos = '$old_pos' where id = '$old_id'");
	}
}


#


function del_pos ($table_name, $pos, $where = '')
{
	if (! empty ($where)) $where = " and $where";
	$res = my_query ("select id, pos from $table_name where pos > '$pos' $where order by pos");
	while ($row = my_fetch_array ($res))
		my_query ("update $table_name set pos = '" . ($row['pos'] - 1) . "' where id = '$row[id]'");
}


#


function del_field_with_pos ($table_name, $field_id, $where = '')
{
	$pos = my_ff ("select pos from $table_name where id = '$field_id'");
	my_query ("delete from $table_name where id = '$field_id'");
	del_pos ($table_name, $pos, $where);
}

#


function del_dir ($dirname)
{
	if ($dir = @opendir ($dirname))
	{
		while ($file = readdir($dir))
			if ($file != '.' && $file != '..')
				unlink ($dirname . '/' . $file);
		closedir($dir);
		rmdir ($dirname);
	}
}

#


function replace_table ($content)
{
	define ('TABLE_STRING', '<TABLE BORDER="1" CELLSPACING=0 CELLPADDING=0 style="border-collapse: collapse" bordercolor="#111111" width="100%">');
	$new_content = '';
	do
	{
		$pos = strpos (strtolower ($content), '<table');
		if ($pos !== false)
		{
			for ($i = $pos; $i < strlen ($content); $i++)
				if ($content{$i} == '>')
				{
					$pos2 = $i;
					break;
				}
			$new_content .= substr ($content, 0, $pos) . TABLE_STRING;
			$content = substr ($content, $pos2 + 1, strlen ($content));
		}
	}
	while ($pos !== false);
	return $new_content . $content;
}



#


function object_validity ($object_id)
{
	return my_ff ("select count(*) from object where (validity = '0000-00-00' or validity >= NOW()) and act = 'enabled' and id = '$object_id'");
}


#


function is_bug ($bug_array)
{
	$is_bug = false;
	reset ($bug_array);
	while (list (, $temp) = each ($bug_array))
		if (! empty ($temp))
		{
			$is_bug = true;
			break;
		}
	return $is_bug;
}

?>