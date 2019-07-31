// This is to organize data without our app. Calculator.js will use this structure
export default 
{
    personal_savings: '',
    individual_income: '',

    //calculated results
    calculated_difference: '',
    personal_budget_total: '', // we'll need to calculate this in the backgroud
    
    demographics: {
        current_location: '',
        timestamp: '',
        desired_relocation: '',
        sex: '',
        relationship_status: '',
        orientation: '',
        age: '',
        race: '',
        safe_status: '',
        employed: '',
        partner_employed: '',
        children: '',
    },

    personal_costs: {
        //child care
        //personal budget
        transportation: '',
        food: '',
        health_care: '',
        car_loans: '',
        personal_loans: '',
        personal_other: '',
        
    },

    relocation_costs: {
        //relocation budget
        travel_costs: '',
        rental_deposit: '',
        utility_connection: '',
        storage_unit: '',
        rent: '',
        car_rental: '',
        cell_phone: '',
        moving_truck: '',
        mental_health: '',
        income_loss: '',
        additional_security: '',
        relocation_other: '',
        
    }
}
