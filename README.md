```                
options.AddPolicy(
    name: "open",
    builder =>
    {
        builder
            .WithOrigins("https://www.algo.net")
            // .AllowAnyMethod()
            // .AllowAnyOrigin()
            .WithMethods("GET")
            .AllowAnyHeader()
            // .WithExposedHeaders(HeaderNames.ContentType, "application/json")

            // .WithHeaders(HeaderNames.ContentType, "application/json")
            ;
    });
# #
app.UseCors();
# #

[EnableCors("open")]
[HttpGet]
public ....

```

