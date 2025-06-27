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
    WHEN u.id =970 THEN "NO APLICA"
	WHEN u.id =1296 THEN "NO APLICA"
	WHEN u.id =1684 THEN "NO APLICA"
	WHEN u.id =1413 THEN "NO APLICA"
	WHEN u.id =1830 THEN "NO APLICA"
	WHEN u.id =1485 THEN "NO APLICA"
	WHEN u.id =1573 THEN "NO APLICA"
    WHEN u.id = 1570 THEN "NO APLICA"
    WHEN u.id =1367 THEN "NO APLICA"
    WHEN u.id = 1693 THEN "NO APLICA"
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
    AND c.id IN (1499,1498,1497,1496,1495,1494,1493,1492,1491,1490,1489,1488,1487,1486,1485,1484,1483,1482,1481,1480,1479,1478,1477,1476,1475,1474,1473,1472)
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
    AND c.id IN (1426,1425,1424,1423,1422,1421,1420,1419,1418,1417,1416,1415,1414,1413,1412,1411,1410,1409,1408,1407,1406,1405,1404,1403,1402,1401)
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
    AND c.id IN (1504,1503,1501,1502,1500,1511,1512,1513,1514,1505,1506,1507,1508,1509,1510,1515)
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