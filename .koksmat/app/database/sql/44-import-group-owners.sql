--CREATE TABLE sharepoint_sites (LIKE original_table_name INCLUDING ALL);

INSERT INTO temp.owners(upn,groupid) )
SELECT 
 (page_element ->> 'UserPrincipalName') AS UserPrincipalName,
  (page_element ->> 'Id') AS GroupID
FROM
    (SELECT jsonb_array_elements(DATA) AS page_element
     FROM public.importdata
     WHERE name LIKE '%/tenant/%owners.json'
         AND jsonb_typeof(DATA) = 'array' ) AS owners