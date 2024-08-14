# from django.db import models
# import uuid

# class BasicInformation(models.Model):
#     id = models.CharField(max_length=50, primary_key=True)
#     full_name = models.CharField(max_length=255)
#     father_or_husband_name = models.CharField(max_length=255)
#     gender = models.CharField(max_length=10)
#     occupation = models.CharField(max_length=255)
#     income = models.CharField(max_length=255)
#     kyc_document_number = models.CharField(max_length=255)
#     email = models.EmailField()
#     mobile = models.CharField(max_length=20)
#     permanent_address = models.TextField()
#     address_details = models.TextField()
#     communication_address = models.TextField()
#     pin_code = models.CharField(max_length=10)

# class BasicInfoAccount(models.Model):
#     account_number = models.CharField(max_length=50)
#     loan_amount = models.CharField(max_length=50)
#     loan_requested_for = models.CharField(max_length=255)
# '''   
# class BasicInfoAccount(models.Model):
#     account_number = models.CharField(max_length=10)
#     loan_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     loan_requested_for = models.CharField(max_length=255)
#     agri_id = models.CharField(max_length=20, unique=True, blank=True, null=True)  # New field for Agri ID
#     '''
# class User(models.Model):
#     id = models.CharField(max_length=50, primary_key=True)
#     email = models.EmailField()
#     password = models.CharField(max_length=255)
#     role = models.CharField(max_length=20, blank=True, null=True)

# class Admin(models.Model):
#     id = models.CharField(max_length=50, primary_key=True)
#     email = models.EmailField()
#     password = models.CharField(max_length=255)
#     role = models.CharField(max_length=20)
    
# class UserLogin(models.Model):
#     email = models.CharField(max_length=255)
#     password = models.CharField(max_length=255)

# class AdminLogin(models.Model):
#     admin_email = models.CharField(max_length=255)
#     admin_password = models.CharField(max_length=255)

# class UserSignup(models.Model):
#     email = models.EmailField()
#     password = models.CharField(max_length=255)
#     confirmpassword = models.CharField(max_length=255)

# class AdminSignup(models.Model):
#     admin_email = models.EmailField()
#     admin_password = models.CharField(max_length=255)
#     admin_confirmpassword = models.CharField(max_length=255)
from django.db import models
import uuid

class BasicInformation(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    full_name = models.CharField(max_length=255)
    father_or_husband_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    occupation = models.CharField(max_length=255)
    income = models.CharField(max_length=255)
    kyc_document_number = models.CharField(max_length=255)
    email = models.EmailField()
    mobile = models.CharField(max_length=20)
    permanent_address = models.TextField()
    address_details = models.TextField()
    communication_address = models.TextField()
    pin_code = models.CharField(max_length=10)

class BasicInfoAccount(models.Model):
    account_number = models.CharField(max_length=50)
    loan_amount = models.CharField(max_length=50)
    loan_requested_for = models.CharField(max_length=255)

class User(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=20, blank=True, null=True)

class Admin(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=20)


