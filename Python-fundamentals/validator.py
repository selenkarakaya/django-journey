# Example of a custom module to be imported

import re


def validate_email(email):
    return bool(re.match(r"^.+@(\[?)[a-zA-Z0-9-.]+.([a-zA-Z]{2,3}|[0-9]{1,3})(]?)$", email))
