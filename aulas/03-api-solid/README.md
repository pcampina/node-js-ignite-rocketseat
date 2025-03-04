# APP

GymPass app style.

# FR (Functional Requirements)

- [ ] Users should be able to register.
- [ ] Users should be able to authenticate.
- [ ] Users should be able to view their profile.
- [ ] Users should be able to view their total number of check-ins.
- [ ] Users should be able to view their check-in history.
- [ ] Users should be able to find the nearest gyms.
- [ ] Users should be able to search for gyms by name.
- [ ] Users should be able to check-in at a gym.
- [ ] Check-ins should be able to be validated.
- [ ] Admins should be able to register new gyms.

# BR (Business Rules)

- [ ] Duplicate email addresses should not be allowed during registration.
- [ ] Users should not be able to check-in more than once a day.
- [ ] Users should not be able to check-in if they are more than 100 meters away from the gym.
- [ ] Check-ins should only be validated within 20 minutes of the check-in time.
- [ ] Only admins should be able to validate check-ins.
- [ ] Only admins should be able to register new gyms.

# NFR (Non-Functional Requirements)

- [ ] User passwords should be encrypted in the database.
- [ ] Data should be persisted in a PostgreSQL database.
- [ ] All data lists should be paginated with 20 items per page.
- [ ] Users should be identified in the system using JWT (JSON Web Token).
