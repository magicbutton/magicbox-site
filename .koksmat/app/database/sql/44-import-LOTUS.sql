-- INSERT INTO temp.user (userid, name, upn)
-- SELECT KEY,"Employee Name (column 5)", "colEmail (column 2)" FROM (
-- select  id
-- ,"Internal/External (column 0)"
-- ,"Vendor (column 1)"
-- ,"BU (column 2)"
-- ,"Hierarchy Level 5 (column 3)"
-- ,'NETS_' || "Employee No. (column 4)" as KEY
-- ,"Employee Name (column 5)"
-- ,"Position Name (column 6)"
-- ,"Employed first time (column 7)"
-- ,"Location (column 8)"
-- ,"Hiring Status (column 9)"
-- ,"Total (column 10)"
-- from lotus.users
-- ) as users
-- JOIN people.identities
-- ON users.KEY = "colEmployee ID (column 0)"
-- WHERE "colEmail (column 2)" <> ''
-- --WHERE identities.KEY IS NULL


SELECT distinct url,upn from 
(
SELECT TEMP.owners.groupid, TEMP.owners.upn
FROM "temp"."user"
JOIN TEMP.owners ON lower(TEMP.owners.upn) = lower("temp"."user".upn)
) as users
JOIN public.importsharepointsite ON public.importsharepointsite.groupid = users.groupid
JOIN people.identities ON lower(people.identities."colEmail (column 2)") = lower(users.upn)

WHERE public.importsharepointsite.url IS NOT NULL