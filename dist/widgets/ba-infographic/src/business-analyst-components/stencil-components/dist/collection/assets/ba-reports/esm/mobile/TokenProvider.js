var TokenProvider=function(){function e(){}return e.getToken=function(){return new Promise((function(n){n(e.token.access_token)}))},e.setToken=function(e,n){e&&e.length>0&&n&&n.length>0&&(this.token.access_token=n,this.token.username=e)},e.token={access_token:"_It_RKcC9CUuiX4PdwbaLdMO9AQYfjZjTHy-YMDVkOPXEdMpbznCnLpWRgqYsL8II7Yqs2OTRr8VwMEI60Td8T8i4xgVcsnQgkv-7e1IxuV-0jAzK94fScw6Blt4T4t7RTGm13zpCqeF0yVTk_9PXGJ-41OHwBtI_cRYemQ1OvEO3l3CuJGOT8cqn_sZbM3Ut2Dr6MYrgvGLw8h3wNg6NkQskDX_9WJeW9Ur4UU2odk.",expires_in:null,persist:"true",ssl:"true",username:"mark_ba"},e}();export{TokenProvider};