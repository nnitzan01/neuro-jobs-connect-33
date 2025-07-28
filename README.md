# Welcome to neurotech job board

## Project info

**URL**: https://lovable.dev/projects/3aa695ae-3aa1-49f5-b204-b721a558180a

## How to use this project?

There are several ways of adding new jobs to the job list:

**Using Django backend**

```sh
# Step 1: Activate the virtual environment.
conda activate neurotech-backend

# Step 2: Run the development server:
python manage.py runserver
```

**Locally updating the CSV sheet**

Once you clone the repository, you can add and remove jobs from jobs-data.csv located at neuro-jobs-connect-33/public/

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/nnitzan01/neuro-jobs-connect-33.git

# Step 2: Navigate to the project directory.
cd neuro-jobs-connect-33

# Step 3: Update the table locally

# Step 4: Add the table to be comitted
git add public/jobs-data.csv

# Step 5: Commit the changes
git commit -m "changes made"

# Step 6: Push the changes to the remote repository
git push origin main
```

**Edit a file directly in GitHub**

- Navigate to neuro-jobs-connect-33/public/jobs-data.csv
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
