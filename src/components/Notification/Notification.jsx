import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({message }) => {
return (
<Message >{message}</Message>
)
}

Notification.prototypes = {
    message: PropTypes.string.isRequired
}