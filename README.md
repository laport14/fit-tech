## Project Name

Fit-Tech

## Project Description

Fit-Tech is an application that allows the user to log a workout (run, bike, lift, and yoga) and see their logged posts on their respective pages. The user will also have the capability of deleting their logged posts if need be. There will be a home page that has icons for running, biking, lifting, and yoga. When the user selects their preferred icon then they will be brought to the respective page.

Project web-address: https://fit-tech.netlify.app

## Wireframes

https://www.figma.com/file/WXPo94ISmhQ4R8egrKvwSL/Untitled?node-id=0%3A1

## Component Hierarchy
https://lucid.app/invitations/accept/998ccdc5-8dc4-4a01-8d78-35c23ea4ed3a

## API and Data Sample

REACT_APP_AIRTABLE_BASE=appnoC3yRAvOfC5YO

EXAMPLE RESPONSE
{
    "records": [
        {
            "id": "recsqFTVfbfpHsXDV",
            "fields": {
                "date": "January 3, 2020",
                "distance": "4.5",
                "runTime": "39",
                "createdAt": "2020-10-03T22:37:38.000Z",
                "record id": "recsqFTVfbfpHsXDV"
            },
            "createdTime": "2020-10-03T22:37:38.000Z"
        },
        {
            "id": "rechU84lpyWg9Ck9N",
            "fields": {
                "date": "January 5, 2020",
                "distance": "4.1",
                "runTime": "39",
                "createdAt": "2020-10-03T22:37:38.000Z",
                "record id": "rechU84lpyWg9Ck9N"
            },
            "createdTime": "2020-10-03T22:37:38.000Z"
        },
        {
            "id": "recAP8Lcw1cFj3AVD",
            "fields": {
                "date": "January 25, 2020",
                "distance": "5.4",
                "runTime": "46",
                "createdAt": "2020-10-03T22:37:38.000Z",
                "record id": "recAP8Lcw1cFj3AVD"
            },
            "createdTime": "2020-10-03T22:37:38.000Z"
        }
    ],
    "offset": "recAP8Lcw1cFj3AVD"
}

### MVP/PostMVP

#### MVP 

- Build Airtable and import data to the React App 
- Use Icons on my homepage to link to the logged data from my Air Table
- When selecting the Icons, render the data specific to the icon on the page.
- Add workouts from a form and append to page
- Ability to delete existing data on the log page

#### PostMVP  

- Add a weather app API and append weather Data to the Home Page for the user.
- Add a separate card or link for updating the existing workouts in the log
- Tracker for calories burned appended to the Home Page
- Tracker for Miles Ran/Biked appended to the Home Page & Goal tracker
- Darkmode / Lightmode toggle


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|October 8| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|October 9| Project Approval | Complete
|October 12| Core React structure built | Complete
|October 13| Functional Components and Site Functionality | Complete
|October 14| CSS integrated with Functional Components  | Complete
|October 15| MVP & Advanced CSS | Complete
|October 16| Post MVP & Presentations | Complete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Header and Nav Component | H | 2hrs| 1hr | 1hr |
| Home Page Component | H | 3hrs| 2.5hrs | 2.5hrs |
| Footer Component | H | 1.5hrs| 1hr | 1hr |
| RunLog Component | H | 3hrs| 3.5hrs | 3.5hrs |
| BikeLog Component | H | 3hrs| 1.5hrs | 1.5hrs |
| Lift Component | H | 3hrs| 1.5hrs | 1.5hrs |
| Linking and Routing the Components | H | 3.5hrs| 3hrs | 3hrs |
| Implementing Icons in Linking | H | 3.5hrs| 3hrs | 3hrs |
| useEffects and API calls | H | 3hrs| 3hrs | 3hrs |
| Update Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Delete Logged Post | H | 2hrs| 3hrs | 3hrs |
| Building AirTable | H | 1.5hrs| 1hr | 1hr |
| Component Tree Structure | H | 3hrs| 1.5hrs | 1.5hrs |
| Troubleshooting conversion and sorting of API data | H | 3hrs| 3.5hrs | 3.5hrs |
| Debugging | H | 3hrs| 3hrs | 3hrs |
| ReadMe Updates | H | 1.5hrs| .5hrs | .5hrs |
| Total | H | 42.5hrs| 36hrs | 36hrs |

## SWOT Analysis
https://drive.google.com/file/d/1C5gVK4SiCbpJbR5RJUL_uqiSyr0LxjD_/view?usp=sharing
