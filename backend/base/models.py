from django.db import models
from django.contrib.auth.models import User


# These are the status choices for the Software Versions.
class Status(models.TextChoices):
    LTS = 'LTS'
    STABLE = 'stable'
    ALPHA = 'alpha'
    BETA = 'beta'


class Software(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    version = models.FloatField(null=True, blank=True, default=0)
    mainFeature = models.CharField(max_length=200, null=True, blank=True)
    mainFeatureImage = models.ImageField(null=True, blank=True)
    mainFeatureDescription = models.TextField(null=True, blank=True)
    status = models.CharField(
        max_length=50, choices=Status.choices, default=Status.STABLE)
    licenseUse = models.CharField(max_length=200, null=True, blank=True)
    downloadSize = models.FloatField(null=True, blank=True, default=0)
    downloadNumber = models.IntegerField(null=True, blank=True, default=0)
    releasedAt = models.DateTimeField(auto_now_add=True)
    # Features (3)
    feature1 = models.CharField(max_length=200, null=True, blank=True)
    image1 = models.ImageField(null=True, blank=True)
    description1 = models.TextField(null=True, blank=True)
    feature2 = models.CharField(max_length=200, null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    description2 = models.TextField(null=True, blank=True)
    feature3 = models.CharField(max_length=200, null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    description3 = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    thumbnail = models.ImageField(null=True, blank=True)
    link = models.CharField(max_length=200, null=True, blank=True)
    length = models.FloatField(null=True, blank=True, default=0)
    sections = models.IntegerField(null=True, blank=True, default=0)
    lectures = models.IntegerField(null=True, blank=True, default=0)
    intro = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    author = models.CharField(max_length=200, null=True, blank=True)
    level = models.CharField(max_length=200, null=True, blank=True)
    tools = models.CharField(max_length=200, null=True, blank=True)
    price = models.FloatField(null=True, blank=True, default=0)
    projectFilesAvailable = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Tag(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    tag = models.CharField(max_length=32, null=True)

    def __str__(self):
        return self.tag


class BlogTag(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    tag = models.CharField(max_length=32)

    def __str__(self):
        return self.tag


class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    image1 = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    image4 = models.ImageField(null=True, blank=True)
    tags = models.ManyToManyField(BlogTag)
    description = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    timeToRead = models.IntegerField(null=True, blank=True, default=0)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    like = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image1 = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    image4 = models.ImageField(null=True, blank=True)
    tags = models.ManyToManyField(Tag)
    artistName = models.CharField(max_length=200, null=True, blank=True)
    artistPic = models.ImageField(null=True, blank=True)
    versionUsed = models.CharField(max_length=200, null=True, blank=True)
    material = models.CharField(max_length=200, null=True, blank=True)
    texture = models.BooleanField(default=False)
    weight = models.IntegerField(null=True, blank=True, default=0)
    height = models.IntegerField(null=True, blank=True, default=0)
    width = models.IntegerField(null=True, blank=True, default=0)
    assetFormat = models.CharField(max_length=200, null=True, blank=True)
    polygons = models.IntegerField(null=True, blank=True, default=0)
    vertecies = models.IntegerField(null=True, blank=True, default=0)
    licenseUse = models.CharField(max_length=200, null=True, blank=True)
    downloadSize = models.IntegerField(null=True, blank=True, default=0)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    like = models.IntegerField(null=True, blank=True, default=0)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    idDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
