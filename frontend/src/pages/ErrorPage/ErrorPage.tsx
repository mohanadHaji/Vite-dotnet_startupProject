import { Link } from 'react-router-dom';
import {
    ErrorBody,
    ErrorHeader,
    ErrorWrapper,
    GotoPageWrapper,
} from './ErrorPage.styles';

const ErrorPage = () => {
    return (
        <ErrorWrapper id="error-page">
            <ErrorHeader>Oops!</ErrorHeader>
            <ErrorBody>Sorry, an unexpected error has occurred.</ErrorBody>
            <GotoPageWrapper>
                <Link to="/"> go to home page</Link>
            </GotoPageWrapper>
        </ErrorWrapper>
    );
};

export default ErrorPage;
