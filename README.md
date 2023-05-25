# README

## Instaling dependencies

- First you need to make sure to have `Python==v3.8.3` minimum and `Node.js==v14.5.0` installed


 You might 

### Django

- First you need to install `Vitualenv` with the comand

```bash
pip install virtualenv
```

- Activate the virtuall env with the comand:

```bash
myenv\scripts\activate
```

- After activating the virtualenv, cd into the `backend` directory:

```bash
cd backend
```

- And install the dependencies from the `requirements.txt` file with this commad:

```bash
pip3 install -r requirements.txt 
```

- Once everything setup and installed you can run the Backend server in the port `http://localhost:8000` with this command:

```bash
python manage.py runserver
```

### React

- First cd into the `frontend` directory

```bash
cd frontend
```

- Install the dependencies from the `package.json` file with the command:

```bash
npm install
```

- All done, you can now run the server in the port`http://localhost:3000` :

```bash
npm start
```


### Additional informations about the project
<!-- - If You would like to test the register functionality you can  use your own email account or you can log in with the one that i will give you.

```
Email: tester@email.com
Password: tester1234
``` -->

- If you want to test out the `PayPal` API you will need the sandbox account.

