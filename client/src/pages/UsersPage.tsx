import { useEffect, useState } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';

import API from '../shared/api/api';
import { NewUser as ApiUser } from '../shared/api/types';
import Footer from '../templates/Footer';
import Button from '../components/atoms/Button';
import { COLOR } from '../shared/theme/types';
import Form from '../components/molecules/Form';
import Table from '../components/molecules/Table/Table';
import {
  ButtonWrapper,
  PageWrapper,
  StyledErrorMessage,
  StyledFooterContainer,
} from './styles';
import FullScreenLoader from '../components/atoms/FullScreenLoader';
import Input from '../components/atoms/Input';

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

  const [searchValue, setSearchValue] = useState('');
  const [filterUsers, setFilterUsers] = useState<User[] | []>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    getUsersInitial();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const itemsAfterSearch = usersToDisplay.filter((user) => {
        return (
          user.name
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          user.surname
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          user.email
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          user.age.toString().toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilterUsers(itemsAfterSearch);
    } else {
      getUsers();
      setFilterUsers(usersToDisplay);
    }
  }, [message, searchValue]);

  const getUsersInitial = async () => {
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
    console.log(users);
  };

  const displayUsers = (users: User[]) => {
    if (users.length) {
      setUsersToDisplay(users);
      setFilterUsers(users);
    } else {
      setUsersToDisplay([]);
      setFilterUsers([]);
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
    }, 4000);
  };

  const updateUsers = async (userId: string, updatedUserData: ApiUser) => {
    await API.updateUser(userId, updatedUserData);
    getUsers();
  };

  const deleteUsers = async (userId: string) => {
    const res = await API.deleteUser(userId);

    setMessage(res.message);
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <PageWrapper>
      <main>
        <ButtonWrapper>
          <Input
            type='text'
            value={searchValue}
            action={(e) => setSearchValue(e.target.value)}
            icon={<i className='fa-solid fa-magnifying-glass'></i>}
            placeholder='Paieška...'
          />
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
              data={filterUsers}
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
