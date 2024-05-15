/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.asset
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,url character varying COLLATE pg_catalog."default"  NOT NULL
    ,slug character varying COLLATE pg_catalog."default"  NOT NULL
    ,majorversion character varying COLLATE pg_catalog."default"   NOT NULL
    ,minorversion character varying COLLATE pg_catalog."default"   NOT NULL
    ,isCurrentVersion boolean   NOT NULL
    ,content JSONB  


);




---- create above / drop below ----

DROP TABLE public.asset;

