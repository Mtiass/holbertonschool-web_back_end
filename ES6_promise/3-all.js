// Handle multiple successful promises
import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then((arg) => {
      const { body } = arg[0];
      const { firstName, lastName } = arg[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
}
