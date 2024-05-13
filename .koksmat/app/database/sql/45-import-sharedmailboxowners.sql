--CREATE TABLE sharepoint_sites (LIKE original_table_name INCLUDING ALL);
--delete from temp.owners where groupid is NULL
--INSERT INTO temp.owners(upn,groupid) 
SELECT 
 (page_element ->> 'Identity') AS MailboxIdentity,
  (page_element ->> 'User') AS User,
  (page_element ->> 'AccessRights') AS AccessRights

FROM
    (SELECT jsonb_array_elements(DATA) AS page_element
     FROM public.importdata
     WHERE name LIKE '%/sharedmailboxes/%owners.json'
         AND jsonb_typeof(DATA) = 'array' ) AS owners

