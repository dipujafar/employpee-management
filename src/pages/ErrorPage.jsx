import errorImg from '../assets/image/errorImg.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;