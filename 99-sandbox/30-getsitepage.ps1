<#---
title: Get Site
connection: graph
output: pages.json
---#>

param (
    $siteUrl = "https://christianiabpos.sharepoint.com/sites/welcome-to-nexi",
    $pageId = "68d6979e-4300-4d3a-b49c-cf21751c5a9f"
)

if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = Resolve-Path $workdir
$oagedir = join-path $workdir $pageId
if (-not (Test-Path $oagedir )) {
    New-Item -Path $oagedir  -ItemType Directory | Out-Null
}
$siteId = FindSiteIdByUrl $env:GRAPH_ACCESSTOKEN $siteUrl

#$site | Set-Clipboard
#write-host $site

$page = GraphAPI $env:GRAPH_ACCESSTOKEN "GET" "https://graph.microsoft.com/beta/sites/$siteId/pages/$pageId"

$result = join-path $workdir $pageId "page.json"

$page | ConvertTo-Json -Depth 10 | Out-File -FilePath $result -Encoding utf8NoBOM


# https://graph.microsoft.com/v1.0/sites/christianiabpos.sharepoint.com,97c479ab-06d4-4dfc-bb2c-270157f142d3,9c053798-4b71-4f57-9b70-10f2a03b424f
 
