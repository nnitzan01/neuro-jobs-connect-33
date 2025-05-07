
# NeuroTech Job Board Backend

Django REST API backend for the NeuroTech Job Board application.

## API Endpoints

### Jobs

- `GET /api/jobs/` - List all jobs
  - Query parameters:
    - `featured=true` - Filter featured jobs
    - `search=keyword` - Search in title, company, and description
    - `job_function=software-engineer` - Filter by job function
    - `sector=implantable-devices` - Filter by sector
    - `location=CA` - Filter by location
    - `type=full-time` - Filter by job type
    - `setting=remote` - Filter by work setting

- `GET /api/jobs/<id>/` - Get job details
- `POST /api/jobs/` - Create a new job (requires authentication)
- `PUT /api/jobs/<id>/` - Update a job (requires authentication)
- `DELETE /api/jobs/<id>/` - Delete a job (requires authentication)

### Profiles

- `GET /api/profiles/` - List all profiles (admin only)
- `POST /api/profiles/` - Submit a new profile

## Authentication

The API uses Django's session-based authentication. To post jobs, you need to be authenticated.

- Login: `/api-auth/login/`
- Logout: `/api-auth/logout/`

## Development

1. Activate the virtual environment:
   ```
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Run the development server:
   ```
   python manage.py runserver
   ```

3. Access the API at `http://localhost:8000/api/`
