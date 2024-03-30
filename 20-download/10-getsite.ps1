<#---
title: Get Site
connection: graph,sharepoint
output: site.json
---#>

param (
    $siteUrl = "https://christianiabpos.sharepoint.com/sites/welcome-to-nexi"
)

$siteId = FindSiteIdByUrl $env:GRAPH_ACCESSTOKEN $siteUrl

#$site | Set-Clipboard
#write-host $site

GraphAPI $env:GRAPH_ACCESSTOKEN "GET" "https://graph.microsoft.com/beta/sites/$siteId"
# https://graph.microsoft.com/v1.0/sites/christianiabpos.sharepoint.com,97c479ab-06d4-4dfc-bb2c-270157f142d3,9c053798-4b71-4f57-9b70-10f2a03b424f
 
