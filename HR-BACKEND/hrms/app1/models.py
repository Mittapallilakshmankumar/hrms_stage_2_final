# from django.db import models


# # ✅ Candidate Table (MAIN)
# class Candidate(models.Model):

#     # 🔹 Basic Details
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100, blank=True)
#     email = models.EmailField()
#     phone = models.CharField(max_length=10)

#     # 🔹 Government IDs
#     aadhaar = models.CharField(max_length=12)
#     pan = models.CharField(max_length=10)
#     uan = models.CharField(max_length=12, blank=True, null=True)

#     # 🔹 Official Info
#     official_email = models.EmailField(blank=True, null=True)

#     # 🔹 Address
#     address_line1 = models.CharField(max_length=255, blank=True)
#     address_line2 = models.CharField(max_length=255, blank=True)
#     city = models.CharField(max_length=100, blank=True)

#     # 🔹 Professional
#     experience = models.CharField(max_length=100, blank=True)
#     source = models.CharField(max_length=100, blank=True)
#     skills = models.CharField(max_length=255, blank=True)
#     department = models.CharField(max_length=100, blank=True)

#     # 🔹 File Upload (Photo)
#     photo = models.ImageField(upload_to="candidates/photos/", blank=True, null=True)

#     # 🔹 Status
#     status = models.CharField(max_length=50, default="Pending")

#     # 🔹 Dates
#     created_at = models.DateTimeField(auto_now_add=True)

#     date_of_joining = models.DateField(null=True, blank=True)

#     def __str__(self):
#         return self.first_name


# # ✅ Education Table (SINGLE TABLE FOR MULTIPLE ROWS)
# class Education(models.Model):

#     candidate = models.ForeignKey(
#         Candidate,
#         on_delete=models.CASCADE,
#         related_name="education"
#     )

#     school = models.CharField(max_length=255)
#     degree = models.CharField(max_length=255)
#     field_of_study = models.CharField(max_length=255)
#     start_date = models.DateField(blank=True, null=True)
#     notes = models.TextField(blank=True)

#     def __str__(self):
#         return self.school


# # ✅ Experience Table (OPTIONAL BUT GOOD)
# class Experience(models.Model):

#     candidate = models.ForeignKey(
#         Candidate,
#         on_delete=models.CASCADE,
#         related_name="experiences"
#     )

#     company_name = models.CharField(max_length=255)
#     role = models.CharField(max_length=255)
#     years = models.CharField(max_length=50)
#     description = models.TextField(blank=True)

#     def __str__(self):
#         return self.company_name



from django.db import models


# ✅ Candidate Table (MAIN)
class Candidate(models.Model):

    # 🔹 Basic Details
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=10)

    # 🔹 Government IDs
    aadhaar = models.CharField(max_length=12)
    pan = models.CharField(max_length=10)
    uan = models.CharField(max_length=12, blank=True, null=True)

    # 🔹 Official Info
    official_email = models.EmailField(blank=True, null=True)

    # 🔹 Address
    address_line1 = models.CharField(max_length=255, blank=True)
    address_line2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)

    # 🔹 Professional
    experience = models.CharField(max_length=100, blank=True)
    source = models.CharField(max_length=100, blank=True)
    skills = models.CharField(max_length=255, blank=True)
    department = models.CharField(max_length=100, blank=True)

    # 🔹 File Upload (Photo)
    photo = models.ImageField(upload_to="candidates/photos/", blank=True, null=True)

    # 🔹 Status
    status = models.CharField(max_length=50, default="Pending")

    # 🔹 Dates
    created_at = models.DateTimeField(auto_now_add=True)

    date_of_joining = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.first_name


# ✅ Education Table (SINGLE TABLE FOR MULTIPLE ROWS)
class Education(models.Model):

    candidate = models.ForeignKey(
        Candidate,
        on_delete=models.CASCADE,
        related_name="education"
    )

    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    start_date = models.DateField(blank=True, null=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return self.school


# ✅ Experience Table (OPTIONAL BUT GOOD)
class Experience(models.Model):

    candidate = models.ForeignKey(
        Candidate,
        on_delete=models.CASCADE,
        related_name="experiences"
    )

    company_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    years = models.CharField(max_length=50)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.company_name

class Employee(models.Model):
    employee_id = models.CharField(max_length=20, unique=True, null=True, blank=True)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    department = models.CharField(max_length=100)
    date_of_joining = models.DateField()

    def __str__(self):
        return self.name