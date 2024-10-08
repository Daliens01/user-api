const queries = ()=>{
    const fecha = new Date()
    const TodaysDate = `${fecha.getFullYear()}-${fecha.getMonth()+1 > 9?fecha.getMonth()+1:`0${fecha.getMonth()+1}`}-${fecha.getDate() > 9? fecha.getDate(): `0${fecha.getDate()}`}`;
    //bloque 3 24-24
    const licenciatura = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
    ,CASE
	WHEN u.id =618 THEN "NO APLICA"
	WHEN u.id =1461 THEN "NO APLICA"
	WHEN u.id =748 THEN "NO APLICA"
	WHEN u.id =1368 THEN "NO APLICA"
	WHEN u.id =1142 THEN "NO APLICA"
	WHEN u.id =915 THEN "NO APLICA"
	WHEN u.id =1529 THEN "NO APLICA"
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
    AND c.id IN (1144,1143,1142,1141,1140,1139,1138,1137,1136,1135,1134,1133,1132,1131,1130,1129,1128,1127,1126,1125,1124,1123,1122,1121,1120)
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
    AND c.id IN (1144,1143,1142,1141,1140,1139,1138,1137,1136,1135,1134,1133,1132,1131,1130,1129,1128,1127,1126,1125,1124,1123,1122,1121,1120)
    AND u.id IN (55,497,1547)
    ORDER BY ALUMNO, CURSOS DESC;`
    //bloque 4 24-24
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
    AND c.id IN (1105,1106,1107,1109,1110,1111,1112,1113,1114,1115,1116,1117,1108)
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
AND c.id IN (1105,1106,1107,1109,1110,1111,1112,1113,1114,1115,1116,1117,1108)
AND u.id IN (476)
ORDER BY CURSOS ASC, ALUMNO;`
    const threadsConnnected = "SHOW STATUS WHERE `variable_name` = 'Threads_connected';"

    return {licenciatura,posgrado,threadsConnnected, administrativosLicenciatura, administrativosPosgrado}
}

module.exports =  queries