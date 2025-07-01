export type ResUser = {
  users: tableElements[],
  types: {type: string}[],
  typeCounter: amount[] ,
};

export interface tableElements {
    type: string;
    enabled: boolean;
    ad_display_name: string;
    last_logon_time: string;
    created_date: string;
    smart_card_logon_required: boolean;
    password_not_required: boolean;
  }
  
  export interface amount {
    count: string;
  }

  export interface UserValidation {
    isValidUser: boolean, 
    token: string
  }
  
  export interface usersInAD {
    id: number;
    typeid: number;
    enabled: boolean;
    ad_display_name: string;
    last_logon_time: Date;
    created_date: Date;
    smart_card_logon_required: boolean;
    password_not_required: boolean;
  }

  export interface typesAmount {
    count: number;
    user_type: {
      type: string;
    }
  }
  
  export interface types {
    type: string
  }