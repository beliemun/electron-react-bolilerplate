import { cn } from '@common/utils';
import { Button, Title } from '@components/atoms';
import { useAlertStore } from '@stores';

const HomePage = () => {
  const { show } = useAlertStore();
  const handleShowAlert = () => {
    show({
      title: 'This is title',
      contents:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vero neque modi explicabo excepturi, mollitia laboriosam exercitationem porro totam est vitae animi esse numquam perspiciatis! Dignissimos recusandae at blanditiis architecto?',
    });
  };
  return (
    <main
      className={cn(
        'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-screen',
        'flex flex-col justify-center items-center gap-10',
      )}
    >
      <Title type="h1-normal" color="invert">
        {process.env.REACT_APP_API_BASE_URL ?? 'Undefined'}
      </Title>
      <Title type="h3-normal" color="invert">
        {process.env.NODE_ENV}
      </Title>
      <Button onClick={handleShowAlert}>Button</Button>
    </main>
  );
};

export default HomePage;
