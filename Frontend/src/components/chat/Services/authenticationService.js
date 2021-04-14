import { BehaviorSubject } from 'rxjs';
import { useSnackbar } from 'notistack';
import axios from 'axios';

import useHandleResponse from '../Utilities/handle-response';

const currentUserSubject = new BehaviorSubject(
    JSON.parse(localStorage.getItem('currentUser'))
);

export const authenticationService = {
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
