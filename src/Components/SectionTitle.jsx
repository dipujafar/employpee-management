import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='my-2'>
            <h1 className="text-3xl font-medium text-center text-orange-400 uppercase">{heading}</h1>
            <p className="text-center max-w-lg mx-auto mt-2 text-gray-700">{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
  };


export default SectionTitle;