import validator
from validator import validate_email

email = "selen@gmail.com"
if validate_email(email):
    print("valid")
else:
    print("invalid")
