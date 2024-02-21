import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="100%"
      width="100"
      radius="10"
      color="#131413"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        alignItmes: 'center',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Loader;
