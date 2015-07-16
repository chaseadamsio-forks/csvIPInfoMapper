# IP Address Mapper

A package to map ip addresses to ip address data.

This IP Address Mapper does a really simple thing: It reads a .csv file with an IP address field, and fetches realdata from [ip-api](http://ip-api.com/) and pipes the data to an output .csv file.

## Requirements

- `NodeJS` > v-0.10.0 (for running the project)
- `git` (for cloning down the project)

## Setup

In the terminal, run `git clone https://github.com/chaseadamsio/csvIPInfoMapper.git` in your workspace, change into the new directory (`csvIPInfoMapper`) and run `npm install` followed by `npm link`

It is now a command-line tool with the command `csv-IP`

## Usage

`csv-IP` will take a .csv file as one argument (you must be in the current working directory of this file) and an IP address fieldname as another argument.

`-f, --file [fileName], '.CSV file to read from'`
`-k, --field [fieldName], 'ip address fieldname'`

It will generate a new CSV file (relative to the current working directory named `/data/output/ipInfo.csv`) with the following columns:

- ID
- IPAddress
- city
- state
- zip

ex: `csv-IP -f MOCKUP-DATA.csv -k IPAddress`

```
MOCK-DATA.csv

//contents of file...

ID,IPAddress
1,144.77.113.8
2,169.60.167.129
3,199.46.252.68
4,58.39.58.83
5,204.49.3.50
6,46.171.89.5
7,211.243.152.103
8,248.190.250.182
9,22.51.163.8
10,129.116.26.230
```
### OUTPUT

```
data/output/ipInfo.csv

//contents of file...

ID,IPAddress,city,state,zip
1,144.77.113.8,Newport Beach,California,92660
2,169.60.167.129,,,
3,199.46.252.68,,Arizona,
4,58.39.58.83,Shanghai,Shanghai Shi,
5,204.49.3.50,,,
6,46.171.89.5,Krakow,Lesser Poland Voivodeship,30-811
7,211.243.152.103,Daejeon,Daejeon,
8,248.190.250.182,,,
9,22.51.163.8,,,
10,129.116.26.230,Austin,Texas,78705
```

If no data is returned from API, columns remain empty.
