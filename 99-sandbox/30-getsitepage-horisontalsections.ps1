<#---
title: Get Site
connection: graph
output: pages-horizontalSections.json
---#>

param (
    $siteUrl = "https://christianiabpos.sharepoint.com/sites/welcome-to-nexi",
    $pageId = "f125bb61-d413-4da1-aea3-27d53cc41224"
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

$results = @()
koksmat trace log "Reaading horizontal sections"
[Array]$sections = GraphAPIAll $env:GRAPH_ACCESSTOKEN "GET" "https://graph.microsoft.com/beta/sites/$siteId/pages/$pageId/microsoft.graph.sitePage/canvasLayout/horizontalSections"



foreach ($section in $sections) {
    $horizontalSectionId = $section.id
    koksmat trace log "Reaading columns for horizontal section $horizontalSectionId"
    $sectionContent = GraphAPI $env:GRAPH_ACCESSTOKEN "GET" "https://graph.microsoft.com/beta/sites/$siteId/pages/$pageId/microsoft.graph.sitePage/canvasLayout/horizontalSections/$horizontalSectionId/columns/1/webparts"
    $columns = @()

    $columnMax = 1

    switch ($x = $section.layout) {
        "oneColumn" { 
            $columnMax = 1
        }
        "twoColumn" { 
            $columnMax = 2
        }
        "threeColumn" { 
            $columnMax = 3
        }

        Default {}
    }

    for ($i = 1; $i -le $columnMax; $i++) {
        $column = GraphAPI $env:GRAPH_ACCESSTOKEN "GET" "https://graph.microsoft.com/beta/sites/$siteId/pages/$pageId/microsoft.graph.sitePage/canvasLayout/horizontalSections/$horizontalSectionId/columns/$i/webparts"
        $columns += $column
    }

    $results += @{

        section = $section
        columns = $columns
    }
}


$result = join-path $workdir $pageId "pages-horizontalSections.json"


$results | ConvertTo-Json -Depth 15 | Out-File -FilePath $result -Encoding utf8NoBOM


# https://graph.microsoft.com/v1.0/sites/christianiabpos.sharepoint.com,97c479ab-06d4-4dfc-bb2c-270157f142d3,9c053798-4b71-4f57-9b70-10f2a03b424f
 
