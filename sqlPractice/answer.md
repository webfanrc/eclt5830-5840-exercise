#1 Question on SQL

## 1
```
select title
from course
join
(select course_id, dept_name from student, takes where student.ID = takes.ID and student.dept_name = 'SEEM')
as a
on course.course_id = a.course_id
```

## 2
```
select title
from course
join
(select course_id, dept_name from student, takes where student.ID = takes.ID and student.dept_name = 'SEEM')
as a
on course.course_id = a.course_id and course.dept_name != 'SEEM'
```

## 3
```
select count(*) as SUM
from section, course
where section.course_id = course.course_id
and
section.year = 2020
```

## 4
```
select dept_name
from (
select count(*) as SUM, course.dept_name
from section, course
where section.course_id = course.course_id
and
section.year = 2020
group by course.dept_name
order by SUM desc
limit 1
) as T
```

## 5
```
select N/M as AVERAGE, A.dept_name
from
(select count(*) as N, dept_name from student group by dept_name) as A
,
(select count(*) as M, dept_name from instructor group by dept_name) as B
where A.dept_name = B.dept_name
```

## 6
```
select distinct A.name
from 
(select student.ID, student.name, i_ID
from student, advisor
where student.ID = advisor.s_ID) as A
,
(select takes.ID as studentID, teaches.ID as teacherID
from takes, teaches
where takes.course_id = teaches.course_id) as B
where A.i_ID = B.teacherID and A.ID = B.studentID
```

## 7
```
select M.ID, M.name, M.course_id
from (
    select count(*) as N, T.ID, T.name, T.course_id
    from(
        select student.ID, student.name, takes.course_id, takes.year
        from takes, student
        where takes.ID = student.ID
    ) as T
    group by T.ID, T.name, T.course_id
) as M
where M.N >= 3
```

## 8
```
select instructor.ID, instructor.name
from
(
    select A.ID from
    (
        select count(*) as M, teaches.ID
        from teaches, takes
        where takes.course_id = teaches.course_id and grade != 'A'
        group by teaches.ID
    ) as A
    ,
    (
        select count(*) as N, teaches.ID
        from teaches, takes
        where takes.course_id = teaches.course_id
        group by teaches.ID
    ) as B
    where A.ID = B.ID and A.M = B.N
) as C
,
instructor
where
instructor.ID = C.ID
```

## 9
```
select instructor.name, instructor.ID
from
instructor
where ID not in (

    select instructor.ID
        from
        (
            select course.dept_name, teaches.ID
            from course, teaches
            where course.course_id = teaches.course_id
        ) as A
        ,
        instructor
        where A.ID = instructor.ID and instructor.dept_name != A.dept_name
)
```

## 10
```
select *
from department
where budget > some (
    select budget
    from department
    where dept_name = 'Philosophy'
)
```

#2 Parallel SQL Processing


