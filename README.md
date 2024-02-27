"# nodejs-nodemailer-poc" 

## initilize node project
    npm init

## install dependencies

    npm install express nodemailer
    
    npm install --save-dev nodemon

## API's

    curl --location --request POST 'http://localhost:4000/users/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "Rishant Gupta",
        "email": "rishantgupta007@gmail.com"
    }'

    