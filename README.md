# AWS DynamoDB Table Copy

Simple table copy using the the NPM package "copy-dynamodb-table"
Can copy table like for like, or if the table exists it will copy the data only. Useful if you want to change primary key for example of an existing table.

### Instructions

-   clone repo
-   npm install
-   Edit copy table.js and update the following variables with your own details:
    -   accessKeyId
    -   secretAccessKey
    -   region
    -   source table name
    -   destination table name
-   From the terminal window, run: node copy-table
