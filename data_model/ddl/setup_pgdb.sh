#!/bin/bash

# Setup arrow1 database and create schema
# Run this as the postgres user
# Assumes required DDL scripts are in the same directory as this script

export PGPASSWORD=***REMOVED***

echo -----------------------------------------------------------------
echo SETUP THE DATABASE
echo -----------------------------------------------------------------

# Create database and setup required plsql language support
dropdb --username=teamarrow teamarrow
createdb --username=teamarrow teamarrow
createlang --username=teamarrow -d teamarrow plpgsql

# Create database schemas
psql --username=teamarrow -d teamarrow -a -f postgres.sql

# Create database functions
psql --username=teamarrow -d teamarrow -a -f functions.sql

# Load test data
psql --username=teamarrow -d teamarrow -a -f referencedata.sql
