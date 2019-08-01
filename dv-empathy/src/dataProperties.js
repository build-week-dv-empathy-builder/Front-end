// This is what the server expects the payload to look like on POST
export default 
{
  //has vehicle in general?
  //general data
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
  personal_savings: '',
  individual_income: '',

  //child care
  //personal budget
  transportation: '',
  food: '',
  health_care: '',
  car_loans: '',
  personal_loans: '',
  personal_other: '',
  personal_budget_total: '', // we'll need to calculate this in the backgroud

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
  relocation_budget_total: '',

  //calculated results
  calculated_difference: '',
}
