import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import UserDetailsPageIndex from '@/app/dashboard/users/components/UserDetailsPageIndex';


const mockBack = jest.fn();

jest.mock('next/navigation', () => ({
  useParams: () => ({
    id: 'grace',
  }),
  useRouter: () => ({
    back: mockBack,
  }),
}));


jest.mock('@/components/icons/LongForwardIcon', () => () => <div />);
jest.mock('@/components/icons/SvgAvatar', () => () => <div />);
jest.mock('@/components/icons/FullStar', () => () => <div />);
jest.mock('@/components/icons/EmptyStar', () => () => <div />);


jest.mock(
  '@/app/dashboard/users/components/DetailsSection',
  () => ({ title }: any) => <div>{title}</div>
);

describe('UserDetailsPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders user details when user exists', () => {
    const mockUsers = [
      {
        username: 'grace',
        phoneNumber: '08012345678',
        email: 'grace@email.com',
      },
    ];

    localStorage.setItem('users', JSON.stringify(mockUsers));

    render(<UserDetailsPageIndex />);

    expect(screen.getByText('User Details')).toBeInTheDocument();
    expect(screen.getByText('grace')).toBeInTheDocument();
    expect(screen.getByText('Back to Users')).toBeInTheDocument();
  });

  it('shows "User not found" if user does not exist', () => {
    localStorage.setItem('users', JSON.stringify([]));

    render(<UserDetailsPageIndex />);

    expect(screen.getByText('User not found')).toBeInTheDocument();
  });

  it('calls router.back when clicking Back to Users', () => {
    const mockUsers = [
      {
        username: 'grace',
        phoneNumber: '08012345678',
        email: 'grace@email.com',
      },
    ];

    localStorage.setItem('users', JSON.stringify(mockUsers));

    render(<UserDetailsPageIndex />);

    fireEvent.click(screen.getByText('Back to Users'));

    expect(mockBack).toHaveBeenCalled();
  });
});