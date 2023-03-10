# DaprDemo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

This demo ises the power of Nx generator to build up core microservices.
Dapr is used a a side car for inter service communications.


## Pre requisites

- Open the code using the devcontainer wich shall setup the following components
    - Dapr 
    - Node 18
    - Docker outside docker  

## Weather Api

### Overview

The weather api is a Nest.Js node server calling the `Weather Forecast API`.

### Serving the weather-api service 

```bash
dapr run --app-id "weather-api" --app-protocol http --app-port 3333 --dapr-http-port 3500 -- npx nx serve weather-api
```

## Weather Caller

### Overview

The weather caller is an express node server calling the `weather-api` mentionned above.

### Serving the weather-caller service 

```bash
dapr run --app-id "weather-caller" --app-protocol http --app-port 3000 --dapr-http-port 3501 --  npx nx serve weather-caller
```

## Testing service HTTP communication

```bash
 curl -G -H "dapr-app-id: weather-caller"   -d 'latitude=43.60' -d 'longitude=7.0' http://localhost:3501
```


