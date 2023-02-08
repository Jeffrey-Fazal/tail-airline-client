# React Dashboard for Airlines

The dashboard uses the React JS framework to show users:
* Airplanes
* Flights
* Search
* Customer & Admin Users

## Running localy

The rails backend needs to be run first on port 3000. Read the documentation regarding the [backend here](https://github.com/Jeffrey-Fazal/tail-airline-server).

## Updating React & running backend 

```
git pull origin main
npm install
```
## Launching React development server

```
npm run
```

## Folder structure

* The src folder holds relevant project files. The folder contains subdirectories for common and pages. Each page has its own subdirectory. 

```
> src
src > common
Files for common components

src > pages
Folder for all pages and commponents 
src > pages > flight

src > pages > plane

src > pages > search
Contains the SearchPage.jsx component (home)
```

## Dependencies

* React DOM router