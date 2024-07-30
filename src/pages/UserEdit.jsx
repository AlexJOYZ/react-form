import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button/Button';
import { Input } from '../components/UI/input/Input';
import { Modal } from '../components/UI/modal/Modal';
import { Textarea } from '../components/UI/textarea/Textarea';

import { useContext, useEffect, useState } from 'react';
import { UsersService } from '../API/UsersService';
import { Loader } from '../components/UI/loader/Loader';
import { regNameAndSurname, regTwitter, regURL } from '../const/regular';
import { UsersContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import '../styles/userEdit.css';
import { isFormEmpty } from '../utils/isFormEmpty';

export const UserEdit = () => {
  const navigation = useNavigate();
  const { users, setUsers } = useContext(UsersContext);
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isModal, setIsModal] = useState(false);
  // const [inputDirty, setInputDirty] = useState({
  //   firstName: false,
  //   lastName: false,
  //   twitter: false,
  //   notes: false,
  //   avatar: false,
  // });
  const [formError, setFormError] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    twitter: '',
    notes: '',
    avatar: '',
  });

  const [fetchUserById, userIsLoader, userError] = useFetching(async () => {
    const res = await UsersService.getUserById(id);
    setUser(res.data);
    setForm({
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      twitter: res.data.twitter,
      notes: res.data.notes,
      avatar: res.data.avatar,
    });
  });
  useEffect(() => {
    if (id) {
      fetchUserById();
    } else {
      setUser(null);
      setForm({
        firstName: '',
        lastName: '',
        twitter: '',
        notes: '',
        avatar: '',
      });
    }
  }, [id]);

  const saveUserData = async (event) => {
    event.preventDefault();
    if (isFormEmpty(form)) {
      setFormError('Должны быть заполнены все поля!');
      setIsModal(true);
      return;
    } else if (
      !form.lastName.match(regNameAndSurname) ||
      !form.firstName.match(regNameAndSurname)
    ) {
      setFormError('Некорректный формат имени или фамилии!');
      setIsModal(true);
      return;
    } else if (!form.twitter.match(regTwitter)) {
      setFormError('Некорректный формат имени пользователя в Twitter!');
      setIsModal(true);
      return;
    } else if (!form.avatar.match(regURL)) {
      setFormError('Некорректный формат ссылки на аватар!');
      setIsModal(true);
      return;
    } else {
      const userId = `${Date.now()}`;
      if (id) {
        const updatedUser = {
          ...user,
          ...form,
        };
        UsersService.updateUserDataById(updatedUser, id);
        setUsers(
          users.map((user) => {
            if (user.id === id) {
              return updatedUser;
            }
            return user;
          }),
        );
      } else {
        const newUser = {
          ...form,
          favorite: false,
          id: userId,
        };
        UsersService.postUser(newUser);
        setUsers([...users, newUser]);
      }
      navigation('/users/' + `${id ? id : userId}`);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigation(-1);
  };
  return (
    <div className='form__container'>
      {userError && <p>{userError}</p>}
      {userIsLoader ? (
        <Loader />
      ) : (
        <form className='form__edit'>
          <Input
            type='with-label-2'
            titleLabel='Name'
            placeholder='First'
            anotherPlaceholder='Last'
            value={form.firstName}
            anotherValue={form.lastName}
            onChange={(event) => setForm({ ...form, firstName: event.target.value })}
            anotherOnChange={(event) => setForm({ ...form, lastName: event.target.value })}
          />
          <Input
            type='with-label'
            titleLabel='Twitter'
            placeholder='@jack'
            value={form.twitter}
            onChange={(event) => setForm({ ...form, twitter: event.target.value })}
          />
          <Input
            type='with-label'
            titleLabel='Avatar URL'
            placeholder='https://example.com/avatar.jpg'
            value={form.avatar}
            onChange={(event) => setForm({ ...form, avatar: event.target.value })}
          />
          <Textarea
            rows='10'
            type='with-label'
            textLabel='Notes'
            value={form.notes}
            onChange={(event) => setForm({ ...form, notes: event.target.value })}
          />
          <div className='buttons'>
            <Button type='submit' onClick={(event) => saveUserData(event)}>
              Save
            </Button>
            <Button type='default' onClick={(e) => handleCancel(e)}>
              Cancel
            </Button>
          </div>
          {isModal && (
            <Modal title='Error validations!' description={formError} setIsModal={setIsModal} />
          )}
        </form>
      )}
    </div>
  );
};
