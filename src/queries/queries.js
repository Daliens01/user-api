const queries = ()=>{
    const fecha = new Date()
    const TodaysDate = `${fecha.getFullYear()}-${fecha.getMonth()+1 > 9?fecha.getMonth()+1:`0${fecha.getMonth()+1}`}-${fecha.getDate() > 9? fecha.getDate(): `0${fecha.getDate()}`}`;
    //bloque 3 24-25
    const licenciatura = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
    ,CASE
	WHEN u.id =618 THEN "NO APLICA"
	WHEN u.id =1461 THEN "NO APLICA"
	WHEN u.id =748 THEN "NO APLICA"
	WHEN u.id =1368 THEN "NO APLICA"
	WHEN u.id =1142 THEN "NO APLICA"
	WHEN u.id =915 THEN "NO APLICA"
	WHEN u.id =1529 THEN "NO APLICA"
    WHEN u.id = 1779 THEN "NO APLICA"
	WHEN DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))>=9 THEN CONCAT(DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))," Días sin acceder")
	ELSE "NUNCA"
      END AS ACCESO
    FROM
    mdl_user u
    LEFT JOIN mdl_role_assignments r ON r.userid = u.id
    INNER JOIN mdl_context t ON t.id = r.contextid
    INNER JOIN mdl_course c ON c.id = t.instanceid
    INNER JOIN mdl_role rl ON rl.id = r.roleid 
    LEFT JOIN mdl_user_lastaccess lt ON  lt.courseid = c.id AND lt.userid = u.id
    WHERE
    r.roleid = 5
    AND c.id IN (1379,1378,1377,1376,1375,1374,1373,1372,1371,1370,1369,1368,1367,1366,1365,1364,1363,1362,1361,1360,1359,1358,1357,1356,1355,1354,1353)
    AND u.id NOT IN (618)
    AND (DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess)) >=9 OR DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess)) IS NULL)
    ORDER BY ALUMNO, CURSOS DESC;`

    const administrativosLicenciatura = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
    ,IF(DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))>=0, CONCAT(DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))," Días sin acceder"),"NUNCA") AS "ÚLTIMO ACCESO"
    FROM
    mdl_user u
    LEFT JOIN mdl_role_assignments r ON r.userid = u.id
    INNER JOIN mdl_context t ON t.id = r.contextid
    INNER JOIN mdl_course c ON c.id = t.instanceid
    INNER JOIN mdl_role rl ON rl.id = r.roleid 
    LEFT JOIN mdl_user_lastaccess lt ON  lt.courseid = c.id AND lt.userid = u.id
    WHERE
    r.roleid = 4
    AND c.id IN (1379,1378,1377,1376,1375,1374,1373,1372,1371,1370,1369,1368,1367,1366,1365,1364,1363,1362,1361,1360,1359,1358,1357,1356,1355,1354,1353)
    AND u.id IN (55,497,1547)
    ORDER BY ALUMNO, CURSOS DESC;`
    //bloque 4 24-25
    const posgrado = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
    ,CASE
	WHEN u.id =618 THEN "NO APLICA"
	WHEN u.id =1461 THEN "NO APLICA"
	WHEN u.id =748 THEN "NO APLICA"
	WHEN u.id =1368 THEN "NO APLICA"
	WHEN u.id =1142 THEN "NO APLICA"
	WHEN u.id =915 THEN "NO APLICA"
	WHEN u.id =1529 THEN "NO APLICA"
    WHEN u.id =1480 THEN "NO APLICA"
	WHEN DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))>=9 THEN CONCAT(DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))," Días sin acceder")
	ELSE "NUNCA"
      END AS ACCESO
    FROM
    mdl_user u
    LEFT JOIN mdl_role_assignments r ON r.userid = u.id
    INNER JOIN mdl_context t ON t.id = r.contextid
    INNER JOIN mdl_course c ON c.id = t.instanceid
    INNER JOIN mdl_role rl ON rl.id = r.roleid 
    LEFT JOIN mdl_user_lastaccess lt ON  lt.courseid = c.id AND lt.userid = u.id
    WHERE
    r.roleid = 5
    AND c.id IN (1391,1392,1393,1394,1382,1383,1384,1385,1386,1387,1388,1389,1390,1396,1397,1395)
    AND u.id NOT IN (618)
    AND (DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess)) >=9 OR DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess)) IS NULL)
    ORDER BY CURSOS ASC, ALUMNO;`


    const administrativosPosgrado = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
,IF(DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))>=0, CONCAT(DATEDIFF("${TodaysDate}",FROM_UNIXTIME(timeaccess))," Días sin acceder"),"NUNCA") AS "ÚLTIMO ACCESO"
FROM
mdl_user u
LEFT JOIN mdl_role_assignments r ON r.userid = u.id
INNER JOIN mdl_context t ON t.id = r.contextid
INNER JOIN mdl_course c ON c.id = t.instanceid
INNER JOIN mdl_role rl ON rl.id = r.roleid 
LEFT JOIN mdl_user_lastaccess lt ON  lt.courseid = c.id AND lt.userid = u.id
WHERE
r.roleid = 4
AND c.id IN (1321,1322,1323,1324,1325,1327,1326,1328,1329,1330,1331,1332,1333,1335,1336,1334)
AND u.id IN (476)
ORDER BY CURSOS ASC, ALUMNO;`
    const threadsConnnected = "SHOW STATUS WHERE `variable_name` = 'Threads_connected';"

    return {licenciatura,posgrado,threadsConnnected, administrativosLicenciatura, administrativosPosgrado}
}

module.exports =  queries