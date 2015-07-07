# IP Address Mapper

    A package to map ip addresses to ip address data.

## Quick Start

* `npm install`

## Usage

The `ip-mapper` will take the file path that you specify and read CSV data from the file. You can save your `*.csv` files in the `data` directory (its contents are ignored in `git`).

To use the script, you can run:

`node index.js -f [fileName]`

It will generate a new CSV file (relative to this directory called `/data/output/ipInfo.csv`) with the following columns:

- ID
- IPAddress
- city
- state
- zip