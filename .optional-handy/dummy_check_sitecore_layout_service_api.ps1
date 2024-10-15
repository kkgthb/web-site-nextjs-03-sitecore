# Make sure my Sitecore-specific environment variables are all set correctly
$http_response = Invoke-RestMethod `
    -Uri ( 
    [Environment]::GetEnvironmentVariable('SITECORE_API_HOST', 'User') `
        + [Environment]::GetEnvironmentVariable('SITECORE_LAYOUT_SERVICE_PATH', 'User') 
) `
    -Method 'GET' `
    -Body @{
    sc_site   = [Environment]::GetEnvironmentVariable('SITECORE_SITE_NAME', 'User')
    sc_apikey = [Environment]::GetEnvironmentVariable('SITECORE_API_KEY', 'User')
    item      = '/'
}
Write-Output($http_response.sitecore.route)
Write-Output($http_response | ConvertTo-Json -Depth 100)
# https://github.com/kkgthb/openapispec-sitecorecms/blob/main/layoutservice.yml