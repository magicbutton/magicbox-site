--CREATE TABLE sharepoint_sites (LIKE original_table_name INCLUDING ALL);
INSERT INTO
    public.importsharepointsite (
        created_at,
        updated_at,
        deleted_at,
        tenant,
        name,
        description,
        isteamsconnected,
        localeid,
        hubsiteid,
        status,
        url,
        title,
        lastcontentmodified,
        releatedgroupid,
        groupid,
        isteamschannelconnected,
        ishubsite,
        sharingcapability,
        OWNER
    )
SELECT
    to_date(
        page_element ->> 'LastContentModifiedDate',
        'YYYY-MM-DD'
    ),
    to_date(
        page_element ->> 'LastContentModifiedDate',
        'YYYY-MM-DD'
    ),
    to_date(
        page_element ->> 'LastContentModifiedDate',
        'YYYY-MM-DD'
    ),
    '',
    -- tenant
    '',
    -- name
    '',
    -- description
    (page_element ->> 'IsTeamsConnected') :: BOOLEAN AS IsTeamsConnected,
    (page_element ->> 'LocaleId') AS LocaleId,
    (page_element ->> 'HusSiteId') AS HusSiteId,
    (page_element ->> 'Status') AS Status,
    (page_element ->> 'Url') AS Url,
    (page_element ->> 'Title') AS Title,
    to_date(
        page_element ->> 'LastContentModifiedDate',
        'YYYY-MM-DD'
    ) AS LastContentModifiedDate,
    (page_element ->> 'RelatedGroupId') AS RelatedGroupId,
    (page_element ->> 'GroupId') AS GroupId,
    (page_element ->> 'IsTeamsChannelConnected') :: BOOLEAN AS IsTeamsChannelConnected,
    (page_element ->> 'IsHubsite') :: BOOLEAN AS IsHubsite,
    (page_element ->> 'SharingCapability') AS SharingCapability,
    (page_element ->> 'Owner') AS OWNER
FROM
    (
        SELECT
            jsonb_array_elements(DATA) AS page_element
        FROM
            public.importdata
        WHERE
            name LIKE '%/tenant/allsites.json%'
    ) AS subquery_alias;