export interface PersonalRecord {
  event: string;
  time: string;
}

export interface BaseContact {
  name: string;
  phone_number: string;
}

interface Parent extends BaseContact {
  email: string;
}

interface EmergencyContact extends BaseContact {
  relationship: string;
}


// there probably should be a team ID here as well to map the members to a team?

export interface Athlete {
  id: string;
  name: string;
  gender: "Male" | "Female";
  age: number;  //should age be calculated on the fly or based on an 'age up' date in the roster page?
  active: boolean;
  dateOfBirth: string;
  trainingGroups: string[];
  practiceGroup: string;
  personalRecords: PersonalRecord[];
  parents: Parent[];
  emergencyContacts: EmergencyContact[];
}
