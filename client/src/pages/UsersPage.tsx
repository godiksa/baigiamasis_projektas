import { useEffect, useState } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';

import API from '../shared/api/api';
import { NewUser as ApiUser } from '../shared/api/types';
import Footer from '../templates/Footer';
import Button from '../components/atoms/Button';
import { COLOR } from '../shared/theme/types';
import Form from '../components/molecules/Form';
import Table from '../components/molecules/Table/Table';
import { ButtonWrapper, PageWrapper, StyledErrorMessage, StyledFooterContainer } from './styles';
import FullScreenLoader from '../components/atoms/FullScreenLoader';

type User = ApiUser & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const UsersPage = () => {
  const [message, setMessage] = useState('');
  const [usersToDisplay, setUsersToDisplay] = useState<User[] | []>([]);
  const [openFormModal, setOpenFormModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  // const isLoadingInitialLoad = isLoading && usersToDisplay.length === 0;
  // const isErrorInitialLoad = !!error && usersToDisplay.length === 0;

  useEffect(() => {
    getUsers1();
  }, []);

  useEffect(() => {
    getUsers();
  }, [message]);

  const getUsers1 = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const users = await API.getUsers();
      setIsLoading(false);
      displayUsers(users);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  const getUsers = async () => {
    const users = await API.getUsers();
    displayUsers(users);
  };

  const displayUsers = (users: User[]) => {
    if (users.length) {
      setUsersToDisplay(users);
    } else {
      setUsersToDisplay([]);
    }
  };

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target.name as unknown as HTMLInputElement).value;
    const surname = (target.surname as HTMLInputElement).value;
    const email = (target.email as HTMLInputElement).value;
    const age = Number((target.age as HTMLInputElement).value);

    const addedUser = await API.addUser({ name, surname, email, age });

    setOpenFormModal(false);
    setMessage(addedUser.message);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const updateUsers = async (userId: string, updatedUserData: ApiUser) => {
    await API.updateUser(userId, updatedUserData);
    getUsers();
  };

  const deleteUsers = async (userId: string) => {
    const res = await API.deleteUser(userId);

    setMessage(res.message);
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <PageWrapper>
      <main>
        <ButtonWrapper>
          <Button
            text='Pridėti naują'
            type='button'
            action={() => {
              setOpenFormModal(true);
            }}
            color={COLOR.primary}
          />
        </ButtonWrapper>
        {openFormModal && <Form action={(e) => addUser(e)} />}
        {isLoading ? (
          <FullScreenLoader />
        ) : error ? (
          <StyledErrorMessage>Error: nepavyko užkrauti</StyledErrorMessage>
        ) : (
          <div>
            <Table
              data={usersToDisplay}
              updatedValuesAction={(id, updatedUser) =>
                updateUsers(id, updatedUser)
              }
              deleteUserAction={(id) => deleteUsers(id)}
              message={message}
            />
          </div>
        )}
      </main>
      <StyledFooterContainer>
      <Footer />
      </StyledFooterContainer>
    </PageWrapper>
  );
};

export default UsersPage;
