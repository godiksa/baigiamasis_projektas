import { useEffect, useState } from 'react';

import { COLOR } from '../../../shared/theme/types';
import { NewUser as ApiUser } from '../../../shared/api/types';
import Button from '../../atoms/Button';
import Pagination from '../../atoms/Pagination';
import {
  StyledButtonDiv,
  StyledEmailSpan,
  StyledHeaderDiv,
  StyledListDiv,
  StyledMessage,
  StyledNoUsersMessage,
  StyledNotificationAlert,
  StyledPaginationContainer,
  StyledTableContainer,
  StyledTableWrapperDiv,
} from './styles';

type User = ApiUser & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

interface IUpdatedUserProps {
  name: string;
  surname: string;
  email: string;
  age: number;
}

interface ITableProps {
  data: User[];
  updatedValuesAction: (userId: string, updatedUser: IUpdatedUserProps) => void;
  deleteUserAction: (userId: string) => void;
  message?: string;
  itemsPerPage?: number;
}

const Table = ({
  data,
  updatedValuesAction,
  deleteUserAction,
  message,
  itemsPerPage = 10,
}: ITableProps) => {
  const [usersToDisplay, setUsersToDisplay] = useState<User[] | []>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [editableUser, setEditableUser] = useState('');
  const [deletableUser, setDeletableUser] = useState('');

  useEffect(() => {
    displayUsers(data);

    if (message) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [data, message, currentPage, editableUser]);

  const displayUsers = (data: User[]) => {
    if (data.length) {
      setUsersToDisplay(data);
    } else {
      setUsersToDisplay([]);
    }
  };

  const handleEditableContent = (userId: string) => {
    setEditableUser((prev) => (prev === userId ? '' : userId));

    if (editableUser === userId) {
      const name =
        (
          document.getElementById(`name-${userId}`) as HTMLElement
        ).textContent?.toString() || '';
      const surname =
        (
          document.getElementById(`surname-${userId}`) as HTMLElement
        ).textContent?.toString() || '';

      const emailElement = document.getElementById(
        `email-${userId}`
      ) as HTMLElement;
      const emailText = emailElement.textContent?.trim();

      const email = emailText
        ? emailText.includes('@')
          ? emailText
          : 'incorrect@email.com'
        : 'empty@email.com';

      const ageElement = document.getElementById(
        `age-${userId}`
      ) as HTMLElement;
      const ageText = ageElement.textContent?.trim();
      const ageValue = ageText ? Number(ageText) : 0;

      const age = Number.isNaN(ageValue)
        ? 0
        : ageValue > 200
        ? 200
        : ageValue < 1
        ? 1
        : ageValue;

      const updatedUserData = { name, surname, email, age };
      updatedValuesAction(userId, updatedUserData);

      ageElement.textContent = String(age);
      emailElement.textContent = email;
    }
    if (deletableUser === userId) {
      deleteUserAction(userId);
      setCurrentPage(1);
    }
  };

  const deleteUsers = (userId: string) => {
    if (editableUser === userId) {
      setEditableUser((prev) => (prev === userId ? '' : userId));
    } else if (deletableUser === userId) {
      setDeletableUser('');
    } else {
      setDeletableUser(userId);
    }
  };

  return (
    <StyledTableContainer>
      <StyledTableWrapperDiv>
        <StyledHeaderDiv>
          <span>Vardas</span>
          <span>Pavardė</span>
          <span>El. paštas</span>
          <span>Amžius</span>
        </StyledHeaderDiv>
        {usersToDisplay.length ? (
          usersToDisplay
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((user) => (
              <div key={user._id}>
                <StyledListDiv key={user._id}>
                  <span
                    suppressContentEditableWarning
                    id={`name-${user._id}`}
                    className={user._id === editableUser ? 'editable' : ''}
                    contentEditable={user._id === editableUser ? true : false}
                  >
                    {user.name}
                  </span>
                  <span
                    suppressContentEditableWarning
                    id={`surname-${user._id}`}
                    className={user._id === editableUser ? 'editable' : ''}
                    contentEditable={user._id === editableUser ? true : false}
                  >
                    {user.surname}
                  </span>
                  <StyledEmailSpan
                    suppressContentEditableWarning
                    id={`email-${user._id}`}
                    className={`${
                      user._id === editableUser ? 'editable' : ''
                    } ${
                      user.email === 'incorrect@email.com' ||
                      user.email === 'empty@email.com'
                        ? 'incorrect'
                        : ''
                    }`}
                    contentEditable={user._id === editableUser ? true : false}
                  >
                    {user.email}
                  </StyledEmailSpan>
                  <span
                    suppressContentEditableWarning
                    id={`age-${user._id}`}
                    className={user._id === editableUser ? 'editable' : ''}
                    contentEditable={user._id === editableUser ? true : false}
                  >
                    {user.age}
                  </span>
                  <StyledButtonDiv>
                    {deletableUser === user._id && (
                      <StyledNotificationAlert>
                        <i className='fa-solid fa-triangle-exclamation'></i> Ar
                        tikrai norite ištrinti?
                      </StyledNotificationAlert>
                    )}
                    <Button
                      type='button'
                      text={
                        user._id === editableUser
                          ? 'Išsaugoti'
                          : user._id === deletableUser
                          ? 'Taip'
                          : 'Redaguoti'
                      }
                      action={() => handleEditableContent(user._id)}
                      color={
                        user._id === editableUser
                          ? COLOR.primary
                          : user._id === deletableUser
                          ? COLOR.danger
                          : ''
                      }
                      outline='true'
                    />
                    <Button
                      type='button'
                      text={
                        user._id === (editableUser || deletableUser)
                          ? 'Atšaukti'
                          : 'Ištrinti'
                      }
                      action={() => deleteUsers(user._id)}
                      color={
                        user._id === (editableUser || deletableUser)
                          ? COLOR.danger
                          : COLOR.default
                      }
                    />
                  </StyledButtonDiv>
                </StyledListDiv>
              </div>
            ))
        ) : (
          <StyledNoUsersMessage>Vartotojų nerasta...</StyledNoUsersMessage>
        )}
      </StyledTableWrapperDiv>
      <StyledPaginationContainer>
        <Pagination
          currentPage={currentPage}
          displayData={usersToDisplay}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </StyledPaginationContainer>
      {showMessage && (
        <StyledMessage>
          <p>{message}</p>
        </StyledMessage>
      )}
    </StyledTableContainer>
  );
};

export default Table;
