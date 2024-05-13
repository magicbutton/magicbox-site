SELECT
    (page_element->>'Editor') AS editor,
    (page_element->>'ID') AS id,
    (page_element->>'PageName') AS name,
     to_date(page_element->>'CreatedOn','YYYY-MM-DD') AS created,
    to_date(page_element->>'ModifiedOn','YYYY-MM-DD') AS modified,
    (page_element->>'HubSiteId') AS hubid,
   (page_element->>'RelativeURL') AS url
    
FROM
    (
        SELECT
            jsonb_array_elements(data->'pages') AS page_element
        FROM
            public.importdata
    ) AS subquery_alias;


       

   