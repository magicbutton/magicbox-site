<#---
title: Download medias
tag : download-medias
input: analysed-pages.json
.output: downloaded-medias.json
connection: graph, sharepoint
api: post
---
#>

param ($siteUrl = "https://christianiabpos.sharepoint.com/sites/welcome-to-nexi")
Connect-PnPOnline -Url $siteUrl   -ClientId $PNPAPPID -Tenant $PNPTENANTID -CertificatePath "$PNPCERTIFICATEPATH"

if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = Resolve-Path $workdir

$inputFile = Join-Path $workdir  "analysed-pages.json"
$files = Get-Content $inputFile | ConvertFrom-Json

foreach ($file in $files) {
    if ($file.href.StartsWith("https://")) {
        Write-Host "Skipping $($file.href)" -ForegroundColor Yellow
        continue
    }

    $path = split-path $file.href -Parent
    $filename = split-path $file.href -Leaf
    $filename = [System.Web.HttpUtility]::UrlDecode($filename )
    $destDir = "$workdir$path"
    $destFilename = Join-Path $destDir $filename
    if ( (Test-Path $destFilename )) {
        continue
    }
    if (-not (Test-Path $destDir )) {
        New-Item -Path $destDir  -ItemType Directory | Out-Null
    }
    write-host $file.href -ForegroundColor Gray
    $oldPref = $ErrorActionPreference
    $ErrorActionPreference = "Continue"
    Get-PnPFile -Url $file.href -Path $destDir -filename $filename -AsFile -Force -ErrorAction SilentlyContinue
    $ErrorActionPreference = $oldPref
   
}

# $outputFile = Join-Path $workdir "analysed-pages.json"
# $contents | ConvertTo-Json -Depth 10 | Out-File -FilePath $outputFile -Encoding utf8NoBOM