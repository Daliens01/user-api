const queries = ()=>{
    const date = "2024-02-28"

    const licenciatura = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
    ,IF(DATEDIFF("${date}",FROM_UNIXTIME(timeaccess))>=9, CONCAT(DATEDIFF("${date}",FROM_UNIXTIME(timeaccess))," Días sin acceder"),"NUNCA") AS "ÚLTIMO ACCESO"
    FROM
    mdl_user u
    LEFT JOIN mdl_role_assignments r ON r.userid = u.id
    INNER JOIN mdl_context t ON t.id = r.contextid
    INNER JOIN mdl_course c ON c.id = t.instanceid
    INNER JOIN mdl_role rl ON rl.id = r.roleid 
    LEFT JOIN mdl_user_lastaccess lt ON  lt.courseid = c.id AND lt.userid = u.id
    WHERE
    r.roleid = 5
    AND c.id IN (965,964,963,962,961,960,959,958,957,956,955,954,953,952,951,950,949,948,947,946,945)
    AND u.id NOT IN (618)
    AND (DATEDIFF("${date}",FROM_UNIXTIME(timeaccess)) >=9 OR DATEDIFF("${date}",FROM_UNIXTIME(timeaccess)) IS NULL)
    ORDER BY ALUMNO, CURSOS DESC;`
    const posgrado = `SELECT u.username AS MATRICULA, CONCAT(u.firstname," ", u.lastname) AS ALUMNO, c.fullname AS CURSOS
    ,IF(DATEDIFF("${date}",FROM_UNIXTIME(timeaccess))>=9, CONCAT(DATEDIFF("${date}",FROM_UNIXTIME(timeaccess))," Días sin acceder"),"NUNCA") AS ACCESO
    FROM
    mdl_user u
    LEFT JOIN mdl_role_assignments r ON r.userid = u.id
    INNER JOIN mdl_context t ON t.id = r.contextid
    INNER JOIN mdl_course c ON c.id = t.instanceid
    INNER JOIN mdl_role rl ON rl.id = r.roleid 
    LEFT JOIN mdl_user_lastaccess lt ON  lt.courseid = c.id AND lt.userid = u.id
    WHERE
    r.roleid = 5
    AND c.id IN (925,926,928,917,918,919,920,921,922,923,924,929)
    AND u.id NOT IN (618)
    AND (DATEDIFF("${date}",FROM_UNIXTIME(timeaccess)) >=9 OR DATEDIFF("${date}",FROM_UNIXTIME(timeaccess)) IS NULL)
    ORDER BY CURSOS ASC, ALUMNO;`

    return {licenciatura,posgrado}
}

module.exports =  queries