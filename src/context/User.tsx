import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { UserRank } from '../types/UserRank';
import { calculateRank }  from '../utils';

// Type for the state
type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  apPointTotal: number;
  rank: UserRank;
};

// Define the actions
type UserAction = { type: 'add-points'; payload: number };

// Initial state with the type UserState
export const initialState: UserState = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@johndoe.com',
  apPointTotal: 90,
  rank: 1,
};

// Create contexts with the appropriate types
export const UserStateContext = createContext<UserState>(initialState);
export const UserDispatchContext = createContext<Dispatch<UserAction> | undefined>(undefined);

// Reducer with UserState and UserAction types
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'add-points': {
      const newApPointsTotal = state.apPointTotal + action.payload;
      const newRank = calculateRank(newApPointsTotal);

      return {
        ...state,
        apPointTotal: newApPointsTotal,
        rank: newRank,
      };
    }
      
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// UserProvider component
export const UserProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

// Custom hook to use the dispatch context
export const useUserDispatch = (): Dispatch<UserAction> => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
};

// Custom hook to use the state context
export const useUserState = (): UserState => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};