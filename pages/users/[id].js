import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import { useUser } from '../../actions/users';

const User = () => {
  const {
    query: { id },
  } = useRouter();
  const { user, isLoading, isError } = useUser(id);

  if (isLoading) return <Loading />;
  if (isError) return <h2>{isError}</h2>;

  return <div>{user && <Card user={user} />}</div>;
};

export default User;
