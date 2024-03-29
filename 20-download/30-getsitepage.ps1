<#---
title: Get Site Page
connection: graph
output: pages.json
---#>

param (
    $sharepointTenant = "https://christianiabpos.sharepoint.com",
    $pageId = "68d6979e-4300-4d3a-b49c-cf21751c5a9f",
    $sitePath = "sites/welcome-to-nexi"
    
    #$pageId = "e4cc0327-d6bc-4a76-8e2e-c93c7022c609",
    #$sitePath = "sites/intra365"

    #
)
$siteUrl = "$sharepointTenant/$sitePath"

if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = Resolve-Path $workdir

if ((Split-Path -Leaf (Split-Path  -Parent -Path $PSScriptRoot)) -eq "sessions") {
    $path = join-path $PSScriptRoot ".." ".."
}
else {
    $path = join-path $PSScriptRoot ".." ".koksmat/"

}

$koksmatDir = Resolve-Path $path

$dataDir = join-path $koksmatDir "web" "app" "sites" "data" 
$dataPath = join-path  $dataDir  $sitePath 

if (-not (Test-Path $dataPath)) {
    New-Item -Path $dataPath -ItemType Directory | Out-Null
}


$siteId = FindSiteIdByUrl $env:GRAPH_ACCESSTOKEN $siteUrl

#$site | Set-Clipboard
#write-host $site

$page = GraphAPI $env:GRAPH_ACCESSTOKEN "GET" "https://graph.microsoft.com/beta/sites/$siteId/pages/$pageId/microsoft.graph.sitePage?expand=canvasLayout"

$result = join-path $dataPath "page.json"

$page | ConvertTo-Json -Depth 16 | Out-File -FilePath $result -Encoding utf8NoBOM


# https://graph.microsoft.com/v1.0/sites/christianiabpos.sharepoint.com,97c479ab-06d4-4dfc-bb2c-270157f142d3,9c053798-4b71-4f57-9b70-10f2a03b424f
 
