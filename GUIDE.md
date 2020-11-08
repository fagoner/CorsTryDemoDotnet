#### Install keys

```
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

#### Instal Sdks

```
sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-3.1
```

#### Install runtime
```
sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y aspnetcore-runtime-3.1
```

Creating publish package
```
dotnet publish --configuration Release
```

#### Test the app

From the command line, run the app: `dotnet <app_assembly>.dll`
In a browser, navigate to http://`<serveraddress>:<port>` to verify the app works on Linux locally.


#### Use a reverse proxy server(optional)
Invoke the UseForwardedHeaders method at the top of Startup.Configure before calling other middleware. Configure the middleware to forward the X-Forwarded-For and X-Forwarded-Proto headers:
```
// using Microsoft.AspNetCore.HttpOverrides;

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.UseAuthentication();
```

#### Install nginx
```
sudo apt-get update
sudo apt-get install nginx

### If ther are any problem
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys $key
sudo apt-get update
sudo apt-get install nginx
```
#### Start nginx
```
sudo service nginx start
```


### Nginx Configuration
To configure Nginx as a reverse proxy to forward requests to your `ASP.NET Core app`, modify `/etc/nginx/sites-available/default`. 
```
server {
    listen        80;
    server_name   example.com *.example.com;
    location / {
        proxy_pass         http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```
#### Check Nginx Configuration

```
nginx -t
```

#### Reload nginx 
```
sudo nginx -s reload
```