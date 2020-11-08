dotnet restore -v n || true
dotnet publish --configuration Release

dotnet bin/Release/netcoreapp3.1/CorsTry.dll