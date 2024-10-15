# Make sure my Sitecore-specific environment variables are all set correctly
(
    Invoke-RestMethod `
        -Uri ( 
        [Environment]::GetEnvironmentVariable('SITECORE_API_HOST', 'User') `
            + [Environment]::GetEnvironmentVariable('SITECORE__LAYOUTSERVICEPATH', 'User') 
    ) `
        -Method 'GET' `
        -Body @{
        sc_site   = [Environment]::GetEnvironmentVariable('SITECORE_SITE_NAME', 'User')
        sc_apikey = [Environment]::GetEnvironmentVariable('SITECORE__API_KEY', 'User')
        item      = '/'
    }
).sitecore.route
# https://github.com/kkgthb/openapispec-sitecorecms/blob/main/layoutservice.yml