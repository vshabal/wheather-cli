# wheather-cli
cli which outputs data about wheather

## Getting started
Cli accepts the following params
+ `-h` - display help, for example `-h`;
+ `-c` - city, for example `-c Kyiv`;
+ `-t` - token, for example `-t 123kjl`

## Under the hood
Token and city are used with https://api.openweathermap.org/data/2.5/weather
Params are persisted in `~/wheather-data.json`