import Loader from 'components/Loader/Loader';

const DefaultButton = ({ children, onClick, loader, ...allyProps }: any) => {
  return (
    <button onClick={onClick} {...allyProps}>
      {loader ? <Loader /> : children}
    </button>
  );
};

// DefaultButton.defaultProps = {
//   onClick: () => null,
//   children: null,
//   loader: null,
// };
// DefaultButton.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };

// const DefaultButton = ({
//   children,
//   onClick,
//   loader,
//   ...allyProps
// }: DefaultButtonInterface) => {
//   return (
//     <button
//       onClick={onClick}
//       loader={loader ? loader.toString() : undefined}
//       {...allyProps}
//     >
//       <>{loader ? <Loader></Loader> : <>{children}</>}</>
//     </button>
//   );
// };

export default DefaultButton;
