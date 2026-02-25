import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginIndex from '../app/auth/login/components/LoginIndex'; 


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));


jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
   
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Login Page', () => {
  it('renders without crashing', () => {
    render(<LoginIndex />);
    
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});