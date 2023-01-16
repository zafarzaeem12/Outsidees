const INITIAL_STATES = {
  user: {
    name: 'John Smith',
    email: 'john.smith@abc.com',
    image:
      'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    state: 'Arizona',
    city: 'Phoenix',
    age: '16 years 04 Months',
    lessonsCompleted: '04',
    overallScore: '78%',
    role: 'guardian',
    institute: 'Driving Institute of Phoenix',
    totalStudents: 87,
    dob: '2000-04-25',
  },
  loader: false,
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        posts: [],
      };
    case 'LOADER_START':
      return {
        ...state,
        loader: true,
      };
    case 'LOADER_STOP':
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
}
