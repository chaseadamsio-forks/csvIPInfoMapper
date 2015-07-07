# IP Address Mapper

    A package to map ip addresses to ip address data.

This IP Address Mapper does a really simple thing: It reads a file (from the name that you pass in as an argument) and 

## Requirements

- `NodeJS` > v-0.10.0 (for running the project)
- `git` (for cloning down the project)

## Setup

In the terminal, run `git clone git@github.com:chaseadamsio/csvIPInfoMapper.git` in your workspace, change into the new directory (`csvIPInfoMapper`) and run `npm install`. 

## Quick Start

Already know what you're doing? Just run:

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