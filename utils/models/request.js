const mongoose = require('mongoose')
const validator = require('validator')

// Create "Request" model
const Request = mongoose.model('Request', {
    "requestID":"1234",
    "timestamp":"",
    "registered":true,
    "user":"abc",
    "recover":"oranges",
    "contact":{
        
        "firstName":"Scott",
        "lastName":"Miller",
        "phone":"614-555-1234",
        "secondaryPhone":"614-555-2345",
        "email":"scott@example.com",
        "notes":[],
        "address": {
            "street":"1111 Street Name",
            "streetPlus":"Apartment C",
            "city":"Columbus",
            "state":"Ohio",
            "zip":"43229",
            "county":"Franklin"
        }
    },
    "serviceAddress":{
        
        "street":"1111 Street Name",
        "streetPlus":"Apartment C",
        "city":"Columbus",
        "state":"Ohio",
        "zip":"43229",
        "county":"Franklin"
    },
    "heard": {
        "how":"Customer Referral",
        "more":"Michael Hansen" 
    },
    "notes":"",
    "discount": {
        "apply":true,
        "type":"Monthly Discount"
    },
    "refCard":2,
    "gift":25,
    "fees":{
        "trip":25,
        "soil":0
    },
    "services":{
        "standard": {
            "carpet":[
                {
                    "area":"living",
                    "qty":1,
                    "price":45
                },
                {
                    "area":"great",
                    "qty":1,
                    "price":65
                },
                {
                    "area":"masterBed",
                    "qty":1,
                    "price":45
                },
                {
                    "area":"bed",
                    "qty":5,
                    "price":25
                },
                {
                    "area":"walkCloset",
                    "qty":2,
                    "price":15
                },
                {
                    "area":"closet",
                    "qty":3,
                    "price":5
                },
                {
                    "area":"hallway",
                    "qty":18,
                    "price":1
                },
                {
                    "area":"stairs",
                    "qty":24,
                    "price":3
                },
                {
                    "area":"landing",
                    "qty":2,
                    "price":5
                },
                {
                    "area":"basement",
                    "qty":500,
                    "price":0.25
                }
            ],
            "rugs":[],
            "tile":[],
            "upholstery":[],
            "total":550
        },
        "ducts":{
            "hvac":[],
            "dryer":[]
        }
    },
    "schedule":{
        "standard":{
            "hours":7.5,
            "techNumber":2,
            "technicians":["jmooney", "aames"],
            "day":"10/18/2020",
            "time":"13:00"
        },
        "ducts":{

        }
    }
})