# Establecer la imagen base
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

# Establecer el directorio de trabajo
WORKDIR /app

# Restaurar los paquetes NuGet para cada proyecto
COPY Domain/*.csproj ./Domain/
RUN dotnet restore ./Domain/*.csproj

COPY Infrastructure/*.csproj ./Infrastructure/
RUN dotnet restore ./Infrastructure/*.csproj

COPY Contracts/*.csproj ./Contracts/
RUN dotnet restore ./Contracts/*.csproj

COPY Application/*.csproj ./Application/
RUN dotnet restore ./Application/*.csproj

COPY Api/*.csproj ./Api/
RUN dotnet restore ./Api/*.csproj

# Copiar todo el código fuente y construir la aplicación
COPY . ./
RUN dotnet publish -c Release -o out

# Establecer la imagen base para la aplicación en sí
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out .

# Exponer el puerto utilizado por la aplicación
EXPOSE 80

# Iniciar la aplicación
ENTRYPOINT ["dotnet", "Api.dll"]
