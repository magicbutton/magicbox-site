INSERT INTO
    public.user(
        id,
        created_at,
        updated_at,
        deleted_at,
        tenant,
        name,
        description,
        url,
        email
    )
VALUES
    (
        DEFAULT,
        DEFAULT,
        DEFAULT,
        DEFAULT,
        '',
        'Default',
        '',
        'super'
    );

-- INSERT INTO public.zonetype(id, created_at, updated_at, deleted_at, tenant, name, description) 
-- VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, '', 'Default', '');
-- do $ $ declare arow record;
-- BEGIN FOR arow IN
-- SELECT
--     ID as zonetype_id,
-- (
--         select
--             id
--         from
--             person
--     ) as person_id
-- FROM
--     public.zonetype LOOP
-- INSERT INTO
--     public.ZONE(
--         id,
--         created_at,
--         updated_at,
--         deleted_at,
--         tenant,
--         name,
--         description,
--         unique_zone_id,
--         zonetype_id,
--         primaryowner_id,
--         accountable_id,
--         secondaryowner_id
--     )
-- VALUES
--     (
--         DEFAULT,
--         DEFAULT,
--         DEFAULT,
--         DEFAULT,
--         '',
--         'Publish site',
--         '',
--         'default',
--         arow.zonetype_id,
--         arow.person_id,
--         arow.person_id,
--         arow.person_id
--     );
-- END LOOP;
-- END;
-- $ $;