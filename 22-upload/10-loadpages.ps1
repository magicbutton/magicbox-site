<#---
title: Import info SQL
tag: import-sql
api: post
---

#>


if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = (Resolve-Path $workdir).Path

$sqldir = join-path $workdir "sites"

Push-Location
Set-Location $psscriptroot

$sql = ""
Get-ChildItem -Path  $sqldir  -Filter "page.json" | ForEach-Object {
    $sql = get-content $_.FullName  -Raw
    
    # Write-Host   magic-devices sql exec $sql

}
$rowsAffected = magic-sites sql exec $sql
write-host $rowsAffected "rows affected executing" $_.Name


