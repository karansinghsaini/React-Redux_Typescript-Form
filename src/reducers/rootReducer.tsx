 const initState = {
     users: [
         {
             "id": "1",
             "employee_name": "Tiger Nixon",
             "employee_salary": "320800",
             "employee_age": "61",
         },
         {
             "id": "2",
             "employee_name": "Garrett Winters",
             "employee_salary": "170750",
             "employee_age": "63",
         }
     ]
}

const rootReducer = (state = initState, action:any) =>  {
    return state;
}

export default rootReducer;